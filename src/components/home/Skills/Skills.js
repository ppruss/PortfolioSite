import React, { useEffect } from "react";
import "./Skills.scss";

const Skills = () => {
  var tl = new window.TimelineMax();
  var controller = new window.ScrollMagic.Controller();

  // Wait for DOM initialization to access elements
  // for animation
  useEffect(() => {
    tl.from(".determinate", 0.5, {
      width: "0%"
    });

    new window.ScrollMagic.Scene({
      triggerElement: ".progress",
      duration: 500
    })
      .on("enter leave", function(e) {
        if (e.type === "enter") {
          tl.play();
          console.log("enter");
        } else {
          tl.reverse();
        }
      })
      .addTo(controller);
  });

  return (
    <section id="skills" className="section scrollspy">
      <h2>Skills</h2>
      <div className="card-panel">
        <h6>C#</h6>
        <div className="progress grey lighten-3">
          <div
            className="determinate secondary-color"
            style={{ width: "80%" }}
          />
        </div>
      </div>

      <div className="card-panel">
        <h6>HTML, CSS, JavaScript</h6>
        <div className="progress grey lighten-3">
          <div
            className="determinate secondary-color"
            style={{ width: "60%" }}
          />
        </div>
      </div>

      <div className="card-panel">
        <h6>React</h6>
        <div className="progress grey lighten-3">
          <div
            className="determinate secondary-color"
            style={{ width: "40%" }}
          />
        </div>
      </div>

      <div className="card-panel">
        <h6>Angular 2+</h6>
        <div className="progress grey lighten-3">
          <div
            className="determinate secondary-color"
            style={{ width: "50%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
