import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState, useMemo, memo } from "react";
import * as THREE from "three";

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

  const imageSrc = useMemo(() => {
    const imageMap = {
      "Django & drf": "/images/logos/python.svg",
      JavaScript: "/images/logos/javascript.png",
      React: "/images/logos/react.png",
      Python: "/images/logos/python.svg",
      "Node & Express": "/images/logos/node.png",
    };
    return imageMap[model.name] || "/images/logos/git.svg";
  }, [model.name]);


  if (isMobile) {
    return (
      <div className="flex items-center justify-center h-full">
        <img
          src={imageSrc}
          alt={model.name}
          className="w-16 h-16 object-contain"
          loading="lazy"
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
