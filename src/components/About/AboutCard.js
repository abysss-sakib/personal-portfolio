import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">

          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Sa Kib</span>.
            <br /><br />

            I enjoy exploring coding and technology in a simple and practical way, focusing on building clean and user-friendly web projects.
            <br /><br />

            I'm a student with a strong interest in web development, and I use AI tools to help me create websites and improve my workflow. Most of my work is done from my mobile device, which helps me stay flexible and consistent in learning.
            <br /><br />

            I have also worked on projects like Messenger bots and small game-related ideas, which helped me understand problem-solving and development basics.
            <br /><br />

            I am always eager to learn, improve step by step, and build simple yet useful projects over time.
          </p>

          <footer className="blockquote-footer">Sa Kib</footer>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
