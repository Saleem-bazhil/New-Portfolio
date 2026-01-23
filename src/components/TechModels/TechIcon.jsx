import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState, useMemo, memo } from "react";
import * as THREE from "three";
import {
  SiDjango,
  SiJavascript,
  SiReact,
  SiPython,
  SiNodedotjs,
} from "react-icons/si";

const LOGO_ICONS = {
  "Django & drf": { Icon: SiDjango, color: "#092E20" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  "React ": { Icon: SiReact, color: "#61DAFB" },
  Python: { Icon: SiPython, color: "#3776AB" },
  "Node & Express": { Icon: SiNodedotjs, color: "#68A063" },
};

const TechIcon = memo(({ model }) => {
  const [isMobile, setIsMobile] = useState(false);
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }
  }, [scene, model.name]);

  const logoData = useMemo(() => {
    return LOGO_ICONS[model.name] || { Icon: SiPython, color: "#3776AB" };
  }, [model.name]);

  if (isMobile) {
    const { Icon, color } = logoData;
    return (
      <div className="flex items-center justify-center h-full">
        <Icon
          size={80}
          color={color}
          className="drop-shadow-lg"
          style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))" }}
        />
      </div>
    );
  }

  return (
    <Canvas
      dpr={[1, 1.1]}
      gl={{
        antialias: true,
        alpha: true,
        pixelRatio: window.devicePixelRatio,
        powerPreference: "high-performance",
        logarithmicDepthBuffer: false,
        precision: "lowp",
      }}
      style={{ background: "transparent" }}
      camera={{ position: [0, 0, 8], fov: 45 }}
    >
      {/* Key light - main direction */}
      <directionalLight position={[8, 8, 8]} intensity={1.8} color="#ffffff" />

      <directionalLight
        position={[-4, -4, 4]}
        intensity={0.4}
        color="#e0e0ff"
      />

      <ambientLight intensity={0.15} color="#ffffff" />

      <Float speed={3} rotationIntensity={0.3} floatIntensity={0.6}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.25}
        dampingFactor={0.03}
      />
    </Canvas>
  );
});

TechIcon.displayName = "TechIcon";

export default TechIcon;
