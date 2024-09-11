import React from "react";
import { images } from "./data";
import "./partner.css";

const Partner = () => {
  // Create a duplicated array for seamless animation
  const duplicatedImages = [...images];

  return (
    <div data-scroll-section>
      <p className="text-2xl text-center font-light text-primary-white py-4">
        CLIENT & PARTNERS WE'VE MET ON OUR JOURNEY
      </p>
      <div className="partner__container overflow-hidden">
        <div className="partner__slider">
          {duplicatedImages.map((image, index) => (
            <div key={index} className="flex-shrink-0 mx-4">
              <img src={image.src} alt={image.alt} width="100" height="100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
