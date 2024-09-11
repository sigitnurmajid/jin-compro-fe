import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import from Framer Motion
import logo from "../../assets/logo.svg";
import Transition from "../../Transition";
import "./project.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import Mailer from "../../Component/Mailer/Mailer";
import Footer from "../../Component/Footer/Footer";
import Section from "../../Component/Anim/Section";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

const Projects = ({ works, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoriesItem = categories.data;
  const worksItem = works.data;

  const filteredWorks =
    selectedCategory === "All"
      ? worksItem
      : worksItem.filter(
          (work) =>
            work.attributes.category.data.attributes.title === selectedCategory
        );

  useEffect(() => {
    if (window.locomotiveScroll) {
      window.locomotiveScroll.update();
    }
  }, [selectedCategory]);

  return (
    <>
      <Section>
        <div className="max-container w-full padding" data-scroll-section>
          <div className="max-container">
            <div className="flex flex-col text-6xl font-bold justify-center items-center padding text-primary-white gap-2">
              <p>YOUR TRUSTED</p>
              <div className="flex">
                <p>INTEGRATION</p>
                <img src={logo} alt="" className="mx-4" />
                <p>PARTNER</p>
              </div>
              <p className="text-lg font-light w-[717px] text-center my-4">
                Here is a showcase of the projects we've successfully completed
                in the past, highlighting our expertise and accomplishments.
              </p>
            </div>
            <div className="project__work_container">
              <div className="project__category_container">
                <div className="project__category_item">
                  <button
                    className={`project__category_button ${
                      selectedCategory === "All" ? "active" : ""
                    }`}
                    onClick={() => setSelectedCategory("All")}
                  >
                    All
                  </button>
                </div>
                {categoriesItem.map((category) => (
                  <div key={category.id} className="project__category_item">
                    <button
                      className={`project__category_button ${
                        selectedCategory === category.attributes.title
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        setSelectedCategory(category.attributes.title)
                      }
                    >
                      {category.attributes.title}
                    </button>
                  </div>
                ))}
              </div>

              <div className="project__card_container">
                <AnimatePresence>
                  {filteredWorks.map((work, i) => (
                    <motion.div
                      key={`p_${i}`}
                      className={`project-grid-item ${
                        i % 3 === 2 ? "project-grid-item-lg" : ""
                      }`}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <ProjectCard
                        category={
                          work.attributes.category.data.attributes.title
                        }
                        images={work.attributes.image?.data}
                        title={work.attributes.title}
                        summary={work.attributes.summary}
                        description={work.attributes.description}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        <Mailer />
        <Footer />
      </Section>
    </>
  );
};

export default Transition(Projects);
