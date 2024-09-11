import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { BASE_API } from "../../../constant/endpoint";
import "./projectcard.css";
import arrow from "../../../assets/card_arrow.svg";

const ProjectCard = ({ category, images, title, summary, description }) => {
  const navigate = useNavigate();

  // Display the first image from the array
  const firstImageUrl = images?.[0]?.attributes?.url;

  // Function to handle navigation
  const handleNavigate = () => {
    navigate("/workdetail", {
      state: { category, images, title, summary, description },
    });
  };

  return (
    <div className="flex flex-col">
      <div className="">
        {firstImageUrl ? (
          <img src={firstImageUrl} alt={`${title} image`} className="img-lg" />
        ) : (
          <p>No Image Available</p>
        )}
      </div>
      <div className="flex flex-col pb-5">
        <div className="flex flex-row justify-between mt-3 pt-5">
          <p className="text-2xl text-primary-white font-medium">{title}</p>
          <button onClick={handleNavigate}>
            <img src={arrow} alt="arrow" className="size-8" />
          </button>
        </div>
        <p className="w-[450px] text-xl text-secondary-white">{summary}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
