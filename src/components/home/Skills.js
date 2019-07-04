import React from "react";
import "./HomeComponents.scss";
import { TweenMax } from "gsap/TweenMax";

const Skills = () => {
  const animateBars = () => {
    TweenMax.from(".determinate", 4, { width: "0%" });
  };

  return (
    <section id="skills" className="section scrollspy">
      <h2>Skills</h2>
      <div className="card-panel">
        <h4>C#</h4>
        <div className="progress">
          <div className="determinate" style={{ width: "80%" }} />
        </div>
      </div>

      <div className="card-panel">
        <h4>HTML, CSS, JavaScript</h4>
        <div className="progress">
          <div className="determinate" style={{ width: "60%" }} />
        </div>
      </div>

      <div className="card-panel">
        <h4>React</h4>
        <div className="progress">
          <div className="determinate" style={{ width: "40%" }} />
        </div>
      </div>

      <div className="card-panel">
        <h4>Angular 2+</h4>
        <div className="progress">
          <div className="determinate" style={{ width: "50%" }} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
