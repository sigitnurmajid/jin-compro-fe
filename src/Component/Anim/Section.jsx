import React, { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section ref={ref}>
      <AnimatePresence>
        {isInView && (
          <motion.span
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.9,
                ease: [0.17, 0.55, 0.55, 1],
                delay: 0.6,
              },
            }}
            exit={{
              x: 200,
              opacity: 0,
              transition: {
                duration: 0.7,
                ease: [0.17, 0.55, 0.55, 1],
              },
            }}
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Section;
