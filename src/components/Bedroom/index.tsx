/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useFBX, PerspectiveCamera } from "@react-three/drei";
import * as TWEEN from "@tweenjs/tween.js";
import { cameraNodes } from "../../utils/bedroom";
import Animate from "../Animate";
import { position, rotation } from "./BedroomHelper";
import { BedroomContainer } from "./styles";
import { useBedroom } from "../../stores";

const Bedroom = () => {
  const [canvas, setCanvas] = useState(true);
  const { loading, setLoading } = useBedroom();
  const [indexCameraNode, setIndexCameraNode] = useState(0);
  const [camera, setCamera] = useState<any>();
  const model = useFBX("/models/bedroom.fbx");

  const handleRect = useCallback((node) => {
    setCamera(node);
  }, []);

  useEffect(() => {
    if (!camera) return;

    position(
      camera,
      indexCameraNode,
      setIndexCameraNode,
      handleCompleteLoading
    );
    rotation(camera, indexCameraNode);
  }, [camera, indexCameraNode]);

  const handleUpdateAnimation = (time: number) => {
    TWEEN.update();
  };

  const handleCompleteLoading = () => {
    setLoading(false);
    setTimeout(() => setCanvas(false), 1000);
  };

  return (
    <>
      {canvas && (
        <BedroomContainer visible={loading}>
          <Canvas>
            <ambientLight intensity={0.5} />
            {/* @ts-ignore */}
            <PerspectiveCamera
              ref={handleRect}
              makeDefault
              position={cameraNodes[0]}
              rotation={[0, 1, 0]}
            />
            <primitive object={model} />
            <Animate onUpdate={handleUpdateAnimation} />
          </Canvas>
        </BedroomContainer>
      )}
    </>
  );
};

export default Bedroom;
