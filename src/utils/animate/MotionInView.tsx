import { useEffect } from "react";
import { motion, useAnimation, HTMLMotionProps } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface MotionInViewProps extends HTMLMotionProps<"div"> {
  threshold?: number;
  handleVisible: () => void;
  triggerOnce?: boolean;
}

const MotionInView = ({
  children,
  variants,
  threshold,
  handleVisible,
  triggerOnce = true,
  ...other
}: MotionInViewProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: threshold || 0,
    triggerOnce,
  });

  useEffect(() => {
    if (handleVisible && inView) handleVisible();
    if (!variants) return;
    if (inView) {
      controls.start(Object.keys(variants)[1]);
    } else {
      controls.start(Object.keys(variants)[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controls, inView, variants]);

  return (
    <motion.div
      ref={ref}
      initial={variants ? Object.keys(variants)[0] : false}
      animate={controls}
      style={{ padding: 0, margin: 0 }}
      {...other}
    >
      {children}
    </motion.div>
  );
};

export default MotionInView;
