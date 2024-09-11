import React from "react";
import { motion } from "framer-motion";

const PartnerItem = ({ images, from, to }) => {
  return (
    <div className="flex gap-6 border-t border-b border-secondary-white min-w">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 gap-6"
      >
        {images.map((image, index) => {
          return (
            <img
              className="h-[100px] w-[100px] object-contain"
              src={image.src}
              alt={image.alt}
              key={index}
            />
          );
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 gap-6"
      >
        {images.map((image, index) => {
          return (
            <img
              className="h-[100px] w-[100px] object-contain"
              src={image.src}
              alt={image.alt}
              key={index}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default PartnerItem;
