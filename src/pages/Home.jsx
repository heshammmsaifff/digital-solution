import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Contact from "../components/Contact";
import ProjectSteps from "../components/ProjectSteps";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <ProjectSteps />
      <Contact />
    </>
  );
};

export default Home;
