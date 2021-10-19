import { useFrame } from "@react-three/fiber";

interface AnimateProps {
  onUpdate: (time: number) => void;
}

const Animate = ({ onUpdate }: AnimateProps) => {
  useFrame(({ clock }) => {
    onUpdate(clock.getElapsedTime());
  });
  return <></>;
};

export default Animate;
