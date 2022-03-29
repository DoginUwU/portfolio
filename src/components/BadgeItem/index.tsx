import { motion } from "framer-motion";
import { Container, Duration, ProgressBar } from "./styles";

interface BadgeItemProps {
  name: string;
  image: string;
  duration: number;
  hasProgressBar: boolean;
}

const BadgeItem = ({
  name,
  image,
  duration,
  hasProgressBar,
}: BadgeItemProps) => {
  return (
    <Container>
      <button>
        <motion.img whileHover={{ scale: 1.1 }} src={image} alt={name} />
      </button>
      <h6>{name}</h6>
      {hasProgressBar && (
        <Duration>
          <p>
            {duration} year{duration > 1 && "s"}
          </p>
          <ProgressBar progress={(duration / 5) * 100} />
        </Duration>
      )}
    </Container>
  );
};

export default BadgeItem;
