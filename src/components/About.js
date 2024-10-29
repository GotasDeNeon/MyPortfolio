import React from 'react';
import './About.scss';

const About = () => (
  <section className="about">
    <div className="about-intro">
      <img src="path_to_image" alt="Example Work" />
      <div>
        <h3>Graphic Design Project</h3>
        <p>Subtitle of the project</p>
      </div>
    </div>
    <h3>About Me</h3>
    <p>
      I'm a passionate graphic designer focused on bringing visual narratives to
      life through various digital media.
    </p>
    <div className="about-grid">
      <div>Column 1</div>
      <div>Column 2</div>
      <div>Column 3</div>
      <div>Column 4</div>
    </div>
  </section>
);

export default About;
