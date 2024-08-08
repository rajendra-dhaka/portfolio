import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

// Reusable ServiceCard component
const ServiceCard = ({ title, features }) => (
  <article className="service">
    <div className="service__head">
      <h3>{title}</h3>
    </div>
    <ul className="service__list">
      {features.map((feature, index) => (
        <li key={index}>
          <BiCheck className="service__list-icon" />
          <p>{feature}</p>
        </li>
      ))}
    </ul>
  </article>
);

export const Services = () => {
  // Service data
  const services = [
    {
      title: "Frontend Development",
      features: [
        "Responsive Design",
        "Cross-Browser Compatibility",
        "Advanced UI/UX Implementation",
        "Performance Optimization",
        "Integration with APIs and Backend",
      ],
    },
    {
      title: "Backend Development",
      features: [
        "RESTful API Development",
        "Database Design and Management",
        "Authentication and Authorization",
        "Server-Side Logic",
        "Integration with Third-Party Services",
      ],
    },
    {
      title: "DevOps and Deployment",
      features: [
        "CI/CD Pipelines",
        "Containerization with Docker",
        "Cloud Deployment (AWS, Azure)",
        "Monitoring and Logging",
        "Scalability and Load Balancing",
      ],
    },
  ];

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            features={service.features}
          />
        ))}
      </div>
    </section>
  );
};
