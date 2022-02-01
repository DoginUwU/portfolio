/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { PerspectiveCamera, useFBX } from "@react-three/drei";
import Animate from "../../components/Animate";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const HomeCanvas = () => {
  const { width } = useWindowDimensions();
  const earth = useRef<any>();
  const earthModel = useFBX("/models/earth.fbx");

  useEffect(() => {
    if (!earth.current) return;

    earth.current.position.x = 180 * (width / 1920);
  }, [width]);

  const handleUpdateAnimation = (time: number) => {
    if (!earth.current) return;

    earth.current.rotation.y = time * 0.2;
    earth.current.rotation.x = time * 0.05;
  };

  return (
    <>
      {width > 1000 && (
        <>
          <ambientLight intensity={1} />
          {/* @ts-ignore */}
          <PerspectiveCamera makeDefault />
          <primitive
            ref={earth}
            object={earthModel}
            position={[150, -10, -450]}
          />
          <Animate onUpdate={handleUpdateAnimation} />
        </>
      )}
    </>
  );
};

export default HomeCanvas;
