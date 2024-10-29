import React from 'react';
import './WorkSection.scss'; // Ensure the correct stylesheet is imported

const WorkSection = () => (
  <section className="work-section">
    <h3>MUSIC VIDEOS</h3>
    <div className="video-row">
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/S8Y0ijph1Gg?si=qIGGVJMwluCEo3Bf"
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen
      ></iframe>
      <iframe 
        src="https://www.youtube.com/embed/VIDEO_ID_2" // Replace with your actual video link
        title="Video 2"
        width="560" 
        height="315" 
        allowFullScreen 
      ></iframe>
    </div>
  </section>
);

export default WorkSection;
