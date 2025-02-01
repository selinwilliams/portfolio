import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children, direction = 'up', delay = 0, duration = 1 }) => {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
    rootMargin: '-50px'
  });

  const getInitialDirection = () => {
    switch (direction) {
      case 'up':
        return { y: 30, x: 0, rotate: 0, scale: 0.95 };
      case 'down':
        return { y: -30, x: 0, rotate: 0, scale: 0.95 };
      case 'left':
        return { x: 30, y: 0, rotate: -1, scale: 0.95 };
      case 'right':
        return { x: -30, y: 0, rotate: 1, scale: 0.95 };
      default:
        return { y: 0, x: 0, rotate: 0, scale: 1 };
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...getInitialDirection(),
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: duration,
        ease: [0.25, 0.1, 0.25, 1.0], // Custom easing
        opacity: { duration: duration * 1.2 }, // Slightly longer fade
        scale: {
          duration: duration * 1.1,
          ease: [0.33, 1, 0.68, 1] // Custom spring-like easing
        }
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      style={{ 
        willChange: 'opacity, transform',
        perspective: '1000px'
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection; 
