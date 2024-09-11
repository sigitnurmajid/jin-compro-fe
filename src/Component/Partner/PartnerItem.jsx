import React from "react";
import { motion } from "framer-motion";

const PartnerItem = ({ images }) => {
  const containerWidth = images.length * (100 + 24); // 100px for image width, 24px for gap

  return (
    <div className="flex overflow-hidden border-t border-b border-secondary-white">
      <motion.div
        className="flex gap-6"
        initial={{ x: 0 }}
        animate={{ x: -containerWidth }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60,
            ease: "linear",
          },
        }}
      >
        {images.concat(images).map((image, index) => (
          <img
            className="h-[100px] w-[100px] object-contain"
            src={image.src}
            alt={image.alt}
            key={`${image.alt}-${index}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default PartnerItem;
