import { Suspense, memo, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

import { Room } from "./Room";
import Particles from "./Particles";
import HeroLight from "./HeroLight";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  //  Memoized values 
  const roomScale = useMemo(() => (isMobile ? 0.7 : 1), [isMobile]);
  const zoomEnabled = useMemo(() => !isTablet, [isTablet]);

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      dpr={[1, 1.5]}                     
      gl={{ antialias: true }}           
    >
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />

      {/* Controls (same behavior, optimized) */}
      <OrbitControls
        enablePan={false}
        enableZoom={zoomEnabled}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        enableDamping                     // smoother, same feel
        dampingFactor={0.05}
      />

      <Suspense fallback={null}>
        <HeroLight />
        <Particles count={100} />
        <group
          scale={roomScale}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default memo(HeroExperience);
