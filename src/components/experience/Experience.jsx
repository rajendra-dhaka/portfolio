import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const frontendSkills = [
  { name: "JavaScript", level: "Experienced" },
  { name: "TypeScript", level: "Experienced" },
  { name: "React", level: "Experienced" },
  { name: "Next.js", level: "Experienced" },
  { name: "Tailwind CSS", level: "Experienced" },
  { name: "Chakra UI", level: "Experienced" },
  { name: "Materail UI", level: "Experienced" },
  { name: "Ionic Framework", level: "Intermediate" },
  { name: "Angular", level: "Intermediate" },
  { name: "Laravel", level: "Intermediate" },
  { name: "Git and GitHub", level: "Experienced" },
];

const backendSkills = [
  { name: "Node.js", level: "Experienced" },
  { name: "Express", level: "Learning" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "JWT", level: "Intermediate" },
  { name: "OAuth", level: "Intermediate" },
  { name: "Mongoose", level: "Intermediate" },
  { name: "MySQL", level: "Intermediate" },
  { name: "PHP", level: "Intermediate" },
  { name: "GraphQL", level: "Intermediate" },
  { name: "Nodemailer", level: "Experienced" },
  { name: "Serverless Framework", level: "Beginner" },
  { name: "REST APIs", level: "Experienced" },
];

const tools = [
  { name: "Postman", level: "Experienced" },
  { name: "Git", level: "Experienced" },
  { name: "GitHub", level: "Experienced" },
  { name: "Docker", level: "Intermediate" },
];

const SkillItem = ({ skill }) => (
  <article className="experience__details">
    <BsPatchCheckFill className="experience__details-icon" />
    <div>
      <h4>{skill.name}</h4>
      <small className="text-light">{skill.level}</small>
    </div>
  </article>
);

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendSkills.map((skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backendSkills.map((skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
        <div className="experience__tools">
          <h3>Tools & Technologies</h3>
          <div className="experience__content">
            {tools.map((tool) => (
              <SkillItem key={tool.name} skill={tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
