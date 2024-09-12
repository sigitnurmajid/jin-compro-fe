import { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import axios from "axios";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./index.css";
import Header from "./Component/Header/Header";
import Preloader from "./Component/Preloader/Preloader";
import { AnimatePresence } from "framer-motion";
import ENDPOINT from "./constant/endpoint";
import Project from "./Pages/Project/Projects";
import Services from "./Pages/Services/Services";
import WorkDetail from "./Pages/WorkDetail/WorkDetail";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Partner from "./Component/Partner/Partner";
import Mailer from "./Component/Mailer/Mailer";
import Footer from "./Component/Footer/Footer";
import Hero from "./Component/Hero/Hero";
import Speciality from "./Component/Speciality/Speciality";
import Work from "./Component/Work/Work";
import FloatingButton from "./Component/FloatingButton/FloatingButton";

function ScrollContainer({ children, isLoading, setLocomotiveInstance }) {
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (isLoading) return;

    const initLocomotiveScroll = () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.05,
        multiplier: 1,
        getDirection: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });

      // Pass the initialized Locomotive instance to parent component
      setLocomotiveInstance(locomotiveScrollRef.current);
    };

    const timer = setTimeout(() => {
      initLocomotiveScroll();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, [location.pathname, isLoading, setLocomotiveInstance]);

  // Update Locomotive Scroll on window resize and content changes
  useEffect(() => {
    if (isLoading) return;

    const handleResize = () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.update();
      }
    };

    const updateScroll = () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.update();
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      if (scrollRef.current) {
        const height = scrollRef.current.clientHeight;
        document.body.style.height = `${height}px`;
        updateScroll();
      }
    });

    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    window.addEventListener("resize", handleResize);
    updateScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollRef.current) {
        resizeObserver.unobserve(scrollRef.current);
      }
      document.body.style.height = "";
    };
  }, [children, isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [works, setWorks] = useState([]);
  const [locomotiveInstance, setLocomotiveInstance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicesResponse = await axios.get(ENDPOINT.SERVICES);
        const categoriesResponse = await axios.get(ENDPOINT.CATEGORY);
        const worksResponse = await axios.get(ENDPOINT.WORKS);

        setServices(servicesResponse.data);
        setCategories(categoriesResponse.data);
        setWorks(worksResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = "default";
          window.scrollTo(0, 0);
        }, 3000);
      }
    };
    fetchData();
  }, []);

  const MainContent = () => (
    <>
      <Hero />
      <Speciality categories={categories} services={services} />
      <Work works={works} />
      <Partner />
      <Mailer />
      <Footer />
    </>
  );

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading ? <Preloader /> : null}
      </AnimatePresence>
      <Header isLoading={isLoading} />
      {!isLoading && <FloatingButton locomotiveInstance={locomotiveInstance} />}
      <AnimatePresence mode="wait">
        {!isLoading && (
          <ScrollContainer
            isLoading={isLoading}
            setLocomotiveInstance={setLocomotiveInstance}
          >
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route
                path="/home"
                element={
                  <Home
                    categories={categories}
                    services={services}
                    works={works}
                    isLoading={isLoading}
                  />
                }
              />
              <Route
                path="/services"
                element={
                  <Services categories={categories} services={services} />
                }
              />
              <Route
                path="/projects"
                element={<Project works={works} categories={categories} />}
              />
              <Route path="/workdetail" element={<WorkDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </ScrollContainer>
        )}
      </AnimatePresence>
    </Router>
  );
}


export default App;
