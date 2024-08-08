import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "NextJS Auth - Singup/Login",
    github: "https://github.com/rajendra-dhaka/nextjs-auth",
    demo: "https://nextjs-auth-beta-orpin.vercel.app/signup",
  },
  {
    id: 2,
    image: IMG2,
    title: "NextJS Dynamic UI - Music School",
    github:
      "https://github.com/rajendra-dhaka/aceternity-ui-nextjs-MUSIC-SCHOOL",
    demo: "https://aceternity-ui-nextjs-music-school.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "ReactJS Ionic - Contact Book",
    github: "https://github.com/rajendra-dhaka/Contact-Book",
    demo: "https://tringbook.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "ReactJS Material UI - Admin Dash",
    github: "https://github.com/rajendra-dhaka/admin-dashboard",
    demo: "https://adminzz.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "ReactJS - The T-Shirt Store",
    github: "https://github.com/rajendra-dhaka/Full-Ecommerce/tree/master",
    demo: "https://tee-shirt-store.netlify.app",
  },

  {
    id: 6,
    image: IMG6,
    title: "React Package - NPM PACKAGE",
    github: "https://github.com/rajendra-dhaka/dummy-users-json",
    demo: "https://www.npmjs.com/package/dummy-users-json",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data &&
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article className="portfolio__item" key={id}>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Source Code
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
};
