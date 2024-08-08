import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
  return (
    <section id="about">
      <h5>Discover More</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2.5+ Years in Frontend Development</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Companies Worked</h5>
              <small>3</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>25+ Completed</small>
            </article>
          </div>

          <p>
            I'm a passionate and innovative Frontend Developer with over 2.5
            years of hands-on experience in creating dynamic and responsive web
            applications. My expertise lies in translating complex design
            concepts into seamless user experiences, utilizing technologies such
            as React, Next.js, and modern UI frameworks. I thrive in
            collaborative environments, delivering high-quality solutions that
            meet both user needs and business objectives. Continuously enhancing
            my skills, I am committed to leveraging the latest technologies to
            build impactful and user-centric digital solutions.
          </p>

          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};
