/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useRef, useState } from "react";
import { PerspectiveCamera, useFBX } from "@react-three/drei";
import Animate from "../../components/Animate";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useThree } from "@react-three/fiber";
import { useEarth } from "../../stores";

const HomeCanvas = () => {
  const { width } = useWindowDimensions();
  const { coords, setFocus, setName } = useEarth();
  const [intersects, setIntersects] = useState<any>([]);
  const earth = useRef<any>();
  const earthModel = useFBX("/models/earth.fbx");
  const { raycaster, scene, camera } = useThree();

  useEffect(() => {
    if (!earth.current) return;

    earth.current.position.x = 180 * (width / 1920);
  }, [width]);

  useMemo(() => {
    setFocus(intersects.length > 0);
    if (intersects.length > 0) {
      if (intersects[0].object.name.includes("Icosphere006")) {
        setName("Earth");
      } else if (intersects[0].object.name.includes("Cube001")) {
        setName("Building");
      } else {
        setName("Earth");
      }
    }
  }, [intersects.length]);

  const handleUpdateAnimation = (time: number) => {
    if (!earth.current) return;
    raycaster.setFromCamera(coords, camera);
    setIntersects(raycaster.intersectObjects(scene.children));

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
