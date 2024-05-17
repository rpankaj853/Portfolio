import React, { useState, useEffect, useRef } from "react";
import PageOne from "./SubComponent/PageOne";
import PageTwoIntro from "./SubComponent/PageTwoIntro";
import LayoutPage from "./SubComponent/LayoutPage";
import PageThirdProjects from "./SubComponent/PageThirdProjects";
import FooterPage from "./SubComponent/FooterPage";
import "../App.css";

const HomePage = () => {
  const [activePage, setActivePage] = useState("PageOne");
  const pageOneRef = useRef(null);
  const pageTwoIntroRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const pageOneTop = pageOneRef.current.getBoundingClientRect().top;
      const pageTwoIntroTop =
        pageTwoIntroRef.current.getBoundingClientRect().top;
      const projectsTop = projectsRef.current.getBoundingClientRect().top;

      if (pageOneTop >= 0 && pageOneTop < window.innerHeight) {
        setActivePage("PageOne");
      } else if (pageTwoIntroTop >= 0 && pageTwoIntroTop < window.innerHeight) {
        setActivePage("PageTwoIntro");
      } else if (projectsTop >= 0 && projectsTop < window.innerHeight) {
        setActivePage("PageThirdProjects");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // LayoutPage

  const sections = [
    { id: "PageOne", name: "Home" },
    { id: "PageTwoIntro", name: "About" },
    { id: "PageThirdProjects", name: "Projects" },
  ];

  return (
    <>
      <div
        className={`transition-opacity duration-500 ${
          activePage !== "PageOne" ? "opacity-100" : "opacity-0"
        }`}
      >
        <LayoutPage sections={sections} activePage={activePage} />
      </div>
      <div ref={pageOneRef}>
        <PageOne id="particles" />
      </div>
      <div ref={pageTwoIntroRef}>
        <PageTwoIntro />
      </div>
      <div ref={projectsRef}>
        <PageThirdProjects />
        <FooterPage />
      </div>
    </>
  );
};

export default HomePage;
