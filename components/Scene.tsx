"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Component, useEffect, useMemo, useRef, useSyncExternalStore, type ReactNode } from "react"
import * as THREE from "three"

type SceneProps = {
  className?: string
}

const sceneQuery = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)"
const subscribe = (callback: () => void) => {
  const query = window.matchMedia(sceneQuery)
  query.addEventListener("change", callback)
  return () => query.removeEventListener("change", callback)
}
const getSnapshot = () => window.matchMedia(sceneQuery).matches
const getServerSnapshot = () => false

class SceneFallback extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  render() {
    return this.state.failed ? null : this.props.children
  }
}

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
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
    geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2))
    geometry.computeVertexNormals()

    return geometry
  }, [width, segmentsU, segmentsV])
}

function MobiusLoop() {
  const ref = useRef<THREE.Mesh>(null)
  const elapsed = useRef(0)
  const pointer = useRef({ x: 0, y: 0 })
  const geometry = useMobiusGeometry()

  useEffect(() => {
    const move = (event: PointerEvent) => {
      pointer.current.x = event.clientX / window.innerWidth - 0.5
      pointer.current.y = event.clientY / window.innerHeight - 0.5
    }
    window.addEventListener("pointermove", move, { passive: true })
    return () => window.removeEventListener("pointermove", move)
  }, [])

  useFrame((_, delta) => {
    elapsed.current += Math.min(delta, 0.1)
    if (ref.current) {
      ref.current.rotation.x = Math.PI / 3 + elapsed.current * 0.16
      ref.current.rotation.z = elapsed.current * 0.11
      ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, pointer.current.x * 0.65, 3, delta)
      ref.current.position.y = Math.sin(elapsed.current * 0.8) * 0.12 - pointer.current.y * 0.08
    }
  })

  return (
    <mesh ref={ref} geometry={geometry} scale={1.48}>
      <meshStandardMaterial
        color="#75e0c8"
        roughness={0.2}
        metalness={0.34}
        emissive="#4eb59f"
        emissiveIntensity={0.72}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default function Scene({ className = "" }: SceneProps) {
  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  if (!visible) return null

  return (
    <SceneFallback>
      <div className={`pointer-events-none absolute z-10 ${className}`} aria-hidden="true">
        <Canvas fallback={null} camera={{ position: [0, 0, 4.4], fov: 46 }} dpr={[1, 1.5]}>
          <ambientLight intensity={1.6} />
          <hemisphereLight args={["#b8fff0", "#18231e", 2]} />
          <directionalLight position={[5, 5, 5]} intensity={3.4} />
          <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={190} />
          <pointLight position={[-4, -2, 4]} intensity={60} color="#ff8666" />
          <MobiusLoop />
        </Canvas>
      </div>
    </SceneFallback>
  )
}
