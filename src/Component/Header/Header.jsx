import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import HeaderButton from "./Button/HeaderButton";
import "./header.css";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav/Nav";
import logo_complete from "../../assets/logo_complete.svg";

const menu = {
  open: {
    width: "480px",
    height: "650px",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Header({ scrollY }) {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleLogoClick = () => {
    navigate("/home");
  };

  const handleCloseMenu = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className={`header max-container ${scrollY > 50 ? "scrolled" : ""}`}>
      <button className="header__logo" onClick={handleLogoClick}>
        <img src={logo_complete} alt="Logo" />
      </button>
      <div className="header__right" ref={menuRef}>
        <motion.div
          className="header__menu"
          variants={menu}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>
            {isActive && <Nav onCloseMenu={handleCloseMenu} />}
          </AnimatePresence>
        </motion.div>
        <HeaderButton isActive={isActive} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
}
