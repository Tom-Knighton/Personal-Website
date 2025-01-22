"use client";
import { useState, useEffect } from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (
    section:
      | "home"
      | "about"
      | "projects"
      | "skills"
      | "experience"
      | "education"
      | "contact"
  ) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    }
  };

  return (
    <>
      <div className={styles.navBg}>
        <nav className={styles.items}>
          <ul>
            <li
              className={activeSection === "home" ? styles.active : ""}
              onClick={() => scrollTo("home")}
            >
              Home
            </li>
            <li
              className={activeSection === "about" ? styles.active : ""}
              onClick={() => scrollTo("about")}
            >
              About Me
            </li>
            <li
              className={activeSection === "projects" ? styles.active : ""}
              onClick={() => scrollTo("projects")}
            >
              Projects
            </li>
            <li
              className={activeSection === "skills" ? styles.active : ""}
              onClick={() => scrollTo("skills")}
            >
              Skills
            </li>
            <li
              className={activeSection === "experience" ? styles.active : ""}
              onClick={() => scrollTo("experience")}
            >
              Experience
            </li>
            <li
              className={activeSection === "education" ? styles.active : ""}
              onClick={() => scrollTo("education")}
            >
              Education
            </li>
            <li
              className={activeSection === "contact" ? styles.active : ""}
              onClick={() => scrollTo("contact")}
            >
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
