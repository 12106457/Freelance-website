import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedCounter({ target = 100, duration = 1.5 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration });
      return controls.stop;
    }
  }, [isInView, target, count, duration]);

  return (
    <motion.span ref={ref}>
      {rounded}
    </motion.span>
  );
}
