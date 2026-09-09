"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { Component, useEffect, useMemo, useRef, useState, useSyncExternalStore, type ReactNode } from "react"
import * as THREE from "three"
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js"

const sceneQuery = "(prefers-reduced-motion: no-preference)"
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

function StudioLighting() {
  const room = useMemo(() => new RoomEnvironment(), [])
  useEffect(() => () => room.dispose(), [room])

  return (
    <>
      {/* Capture studio reflections locally, without downloading an HDR texture. */}
      <Environment resolution={128} frames={1}>
        <primitive object={room} />
      </Environment>
      <ambientLight intensity={0.35} />
      <directionalLight position={[-3, 4, 5]} intensity={3.5} color="#f4edda" />
      <directionalLight position={[4, 1, 2]} intensity={2.5} color="#75e4bd" />
      <directionalLight position={[0, -3, 1]} intensity={0.8} color="#bd9c5a" />
    </>
  )
}

function useMonogramShapes() {
  return useMemo(() => {
    const c = new THREE.Shape()
    c.moveTo(0.67, 0.63)
    c.bezierCurveTo(0.35, 1.12, -0.28, 1.19, -0.69, 0.76)
    c.bezierCurveTo(-1.13, 0.3, -1.1, -0.48, -0.66, -0.86)
    c.bezierCurveTo(-0.2, -1.24, 0.43, -1.08, 0.7, -0.63)
    c.lineTo(0.42, -0.41)
    c.bezierCurveTo(0.16, -0.82, -0.21, -0.79, -0.45, -0.49)
    c.bezierCurveTo(-0.69, -0.18, -0.67, 0.38, -0.4, 0.65)
    c.bezierCurveTo(-0.16, 0.89, 0.18, 0.79, 0.37, 0.43)
    c.closePath()

    const e = new THREE.Shape()
    const outline = [
      [-0.68, 1.02], [0.66, 1.02], [0.7, 0.58], [0.56, 0.58],
      [0.43, 0.81], [-0.12, 0.81], [-0.12, 0.14], [0.25, 0.14],
      [0.35, 0.34], [0.48, 0.34], [0.48, -0.28], [0.35, -0.28],
      [0.25, -0.08], [-0.12, -0.08], [-0.12, -0.8], [0.45, -0.8],
      [0.63, -0.52], [0.77, -0.52], [0.7, -1.02], [-0.68, -1.02],
      [-0.68, -0.88], [-0.46, -0.82], [-0.46, 0.82], [-0.68, 0.88],
    ]
    outline.forEach(([x, y], index) => index === 0 ? e.moveTo(x, y) : e.lineTo(x, y))
    e.closePath()

    const dot = new THREE.Shape()
    dot.moveTo(-0.1, -0.1)
    dot.lineTo(0.1, -0.1)
    dot.lineTo(0.1, 0.1)
    dot.lineTo(-0.1, 0.1)
    dot.closePath()

    return { c, e, dot }
  }, [])
}

const extrusion = { depth: 0.23, bevelEnabled: true, bevelSize: 0.045, bevelThickness: 0.045, bevelSegments: 3, curveSegments: 32, steps: 1 }

function Monogram() {
  const group = useRef<THREE.Group>(null)
  const elapsed = useRef(0)
  const pointer = useRef({ x: 0, y: 0 })
  const { viewport, size } = useThree()
  const shapes = useMonogramShapes()
  const mobile = size.width < 640
  const tablet = size.width < 1024
  const scale = Math.min(mobile ? 0.92 : 1.55, viewport.width / 4.4)
  const x = viewport.width * (tablet ? 0.04 : -0.1)
  const y = viewport.height * (tablet ? -0.08 : 0.04)

  useEffect(() => {
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return
      pointer.current.x = event.clientX / window.innerWidth - 0.5
      pointer.current.y = event.clientY / window.innerHeight - 0.5
    }
    const reset = () => { pointer.current = { x: 0, y: 0 } }
    window.addEventListener("pointermove", move, { passive: true })
    window.addEventListener("blur", reset)
    return () => {
      window.removeEventListener("pointermove", move)
      window.removeEventListener("blur", reset)
    }
  }, [])

  useFrame((_, delta) => {
    if (!group.current) return
    const step = Math.min(delta, 0.05)
    elapsed.current += step
    const time = elapsed.current
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -0.08 + Math.sin(time * 0.22) * 0.06 + pointer.current.y * 0.12, 3, step)
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, -0.24 + Math.sin(time * 0.18) * 0.18 + pointer.current.x * 0.24, 3, step)
    group.current.rotation.z = 0.06 + Math.sin(time * 0.16) * 0.025
    group.current.position.y = Math.sin(time * 0.35) * 0.07
  })

  return (
    <group position={[x, y, 0]} scale={scale}>
      <group ref={group} rotation={[-0.08, -0.24, 0.06]}>
        <mesh position={[-0.87, 0.02, 0.04]}>
          <extrudeGeometry args={[shapes.c, extrusion]} />
          <meshPhysicalMaterial color="#c7d2c6" metalness={0.92} roughness={0.23} clearcoat={0.6} clearcoatRoughness={0.2} />
        </mesh>
        <mesh position={[0.19, -0.86, 0.08]} rotation={[0, 0, Math.PI / 4]}>
          <extrudeGeometry args={[shapes.dot, extrusion]} />
          <meshStandardMaterial color="#63c79c" metalness={0.7} roughness={0.2} />
        </mesh>
        <mesh position={[1.03, -0.04, -0.06]} rotation={[0, 0.06, -0.035]}>
          <extrudeGeometry args={[shapes.e, extrusion]} />
          <meshPhysicalMaterial color="#b99c54" metalness={0.9} roughness={0.26} clearcoat={0.5} clearcoatRoughness={0.2} />
        </mesh>
      </group>
    </group>
  )
}

export default function Scene() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const container = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (!visible || !container.current) return
    let intersecting = true
    const update = () => setActive(intersecting && document.visibilityState === "visible")
    const observer = new IntersectionObserver(([entry]) => {
      intersecting = entry.isIntersecting
      update()
    })
    observer.observe(container.current)
    document.addEventListener("visibilitychange", update)
    return () => {
      observer.disconnect()
      document.removeEventListener("visibilitychange", update)
    }
  }, [visible])

  if (!visible) return null

  return (
    <SceneFallback>
      <div ref={container} className="hero-scene pointer-events-none absolute inset-0 z-0" aria-hidden="true" data-rendering={active ? "active" : "paused"}>
        <Canvas fallback={null} camera={{ position: [0, 0, 8.4], fov: 40 }} dpr={[1, 1.25]} frameloop={active ? "always" : "never"} gl={{ alpha: true, antialias: true }}>
          <StudioLighting />
          <Monogram />
        </Canvas>
      </div>
    </SceneFallback>
  )
}
