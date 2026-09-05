"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, OrbitControls } from "@react-three/drei"
import { useMemo, useRef } from "react"
import * as THREE from "three"

/**
 * Builds a smooth Möbius / interlocking loop parametrically.
 * u sweeps the full loop, v sweeps across the ribbon width,
 * and the u/2 twist makes the surface join back on itself
 * with a single half-twist — the classic Möbius form.
 */
function useMobiusGeometry(width = 0.62, segmentsU = 240, segmentsV = 24) {
  return useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const positions: number[] = []
    const uvs: number[] = []
    const indices: number[] = []

    for (let i = 0; i <= segmentsU; i++) {
      const u = (i / segmentsU) * Math.PI * 2
      const cosHalfU = Math.cos(u / 2)
      const sinHalfU = Math.sin(u / 2)
      for (let j = 0; j <= segmentsV; j++) {
        const v = (j / segmentsV) * width - width / 2
        const r = 1 + (v / 2) * cosHalfU
        positions.push(r * Math.cos(u), r * Math.sin(u), (v / 2) * sinHalfU)
        uvs.push(i / segmentsU, j / segmentsV)
      }
    }

    for (let i = 0; i < segmentsU; i++) {
      for (let j = 0; j < segmentsV; j++) {
        const a = i * (segmentsV + 1) + j
        const b = (i + 1) * (segmentsV + 1) + j
        indices.push(a, b, a + 1)
        indices.push(b, b + 1, a + 1)
      }
    }

    geometry.setIndex(indices)
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    )
    geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2))
    geometry.computeVertexNormals()

    // Smooth the shading seam: because of the half-twist, ring 0 lines up
    // with ring `segmentsU` at the mirrored v position.
    const normal = geometry.getAttribute("normal")
    for (let j = 0; j <= segmentsV; j++) {
      const a = j
      const b = segmentsU * (segmentsV + 1) + (segmentsV - j)
      const nx = (normal.getX(a) + normal.getX(b)) / 2
      const ny = (normal.getY(a) + normal.getY(b)) / 2
      const nz = (normal.getZ(a) + normal.getZ(b)) / 2
      normal.setXYZ(a, nx, ny, nz)
      normal.setXYZ(b, nx, ny, nz)
    }
    normal.needsUpdate = true

    return geometry
  }, [width, segmentsU, segmentsV])
}

function MobiusLoop() {
  const ref = useRef<THREE.Mesh>(null)
  const geometry = useMobiusGeometry()

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 3 + state.clock.getElapsedTime() * 0.18
      ref.current.rotation.z = state.clock.getElapsedTime() * 0.12
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.6}>
      <mesh ref={ref} geometry={geometry} scale={1.5}>
        <meshStandardMaterial
          color="#f0c7b2"
          roughness={0.28}
          metalness={0.22}
          emissive="#e8a98c"
          emissiveIntensity={0.95}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  )
}

export default function Scene() {
  return (
    <div className="pointer-events-none absolute left-[58%] top-[58%] z-0 hidden h-[500px] w-[580px] -translate-x-1/2 -translate-y-1/2 opacity-85 md:block xl:left-[56%] xl:top-[55%] xl:h-[560px] xl:w-[640px]">
      <Canvas camera={{ position: [0, 0, 4.4], fov: 46 }} dpr={[1, 1.75]}>
        <ambientLight intensity={2.1} />
        <hemisphereLight args={["#ffe0cc", "#30221d", 1.8]} />
        <directionalLight position={[5, 5, 5]} intensity={4} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={250} />
        <pointLight position={[-4, -2, 4]} intensity={90} color="#ffffff" />
        <MobiusLoop />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
