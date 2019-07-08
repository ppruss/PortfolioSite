import React from "react";
import "./Home.scss";
import Hero from "../home/Hero/Hero";
import Skills from "../home/Skills/Skills";
import Portfolio from "../home/Portfolio";

const Home = () => {
  return (
    <main id="home">
      <Hero />
      <Skills />
      <Portfolio />
    </main>
  );
};

export default Home;
