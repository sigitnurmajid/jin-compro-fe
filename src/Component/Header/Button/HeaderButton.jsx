import { motion } from "framer-motion";
import "./headerbutton.css";

const HeaderButton = ({ isActive, toggleMenu }) => {
  return (
    <div className="header__button">
      <motion.div
        className="header__button-slider"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="header__button-el" onClick={toggleMenu}>
          <PerspectiveText label="Menu" />
        </div>
        <div className="header__button-el" onClick={toggleMenu}>
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
};

function PerspectiveText({ label }) {
  return (
    <div className="header__button-perstext">
      <p>{label}</p>

      <p>{label}</p>
    </div>
  );
}

export default HeaderButton;