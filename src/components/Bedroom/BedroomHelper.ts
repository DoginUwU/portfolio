import * as TWEEN from "@tweenjs/tween.js";
import { cameraNodes } from "../../utils/bedroom";

const position = (
  camera: any,
  index: number,
  setIndex: (n: number) => void,
  onComplete: VoidFunction
) => {
  const cords = {
    x: camera.position.x,
    y: camera.position.y,
    z: camera.position.z,
  };

  new TWEEN.Tween(cords)
    .to({
      x: cameraNodes[index][0],
      y: cameraNodes[index][1],
      z: cameraNodes[index][2],
    })
    .onUpdate(() => {
      camera.position.set(cords.x, cords.y, cords.z);
    })
    .onComplete(() => {
      if (index < cameraNodes.length - 1) setIndex(index + 1);
      else onComplete();
    })
    .duration(cameraNodes[index][6])
    .start();
};

const rotation = (camera: any, index: number) => {
  const cords = {
    x: camera.rotation.x,
    y: camera.rotation.y,
    z: camera.rotation.z,
  };

  new TWEEN.Tween(cords)
    .to({
      x: cameraNodes[index][3],
      y: cameraNodes[index][4],
      z: cameraNodes[index][5],
    })
    .onUpdate(() => {
      camera.rotation.set(cords.x, cords.y, cords.z);
    })
    .duration(cameraNodes[index][6])
    .start();
};

export { position, rotation };
