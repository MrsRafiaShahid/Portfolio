import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import React, { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../Loader";
const scene = "/3d/programmer_desktop_3d_pc.glb";
const Computer = ({ device }) => {
  const computer = useGLTF(scene);

  return (
    <>
      <mesh>
        <hemisphereLight intensity={0.15} groundColor={"black"} />
        <ambientLight intensity={0.1} />
        <pointLight intensity={1} />
        <spotLight
          position={[-20, 50, 10]}
          color={"blue"}
          castShadow
          intensity={1}
          angle={0.12}
          penumbra={1}
          shadow-mapSize={1024}
        />
        <primitive
          object={computer.scene}
          scale={device ? 0.75 : 0.95}
          position={device ? [0.4, -1.5, -1.4] : [0.75, -1.75, -0.75]}
          rotation={[0.01, 0.1, -0.1]}
        />
      </mesh>
    </>
  );
};

export default Computer;

const ComputerCanvas = () => {
  const [device, setDevice] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    setDevice(mediaQuery.matches);

    const MediaQueryChange = (e) => {
      setDevice(e.matches);
    };
    mediaQuery.addEventListener("change", MediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", MediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 0, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
          color="blue"
        />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 2.2}
        />
        <Computer device={device} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export { ComputerCanvas };
