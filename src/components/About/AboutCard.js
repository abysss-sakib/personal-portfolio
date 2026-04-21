import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Sa Kib</span>.
            <br />
            I’m a student who enjoys exploring coding in a simple way. I use{" "}
            <span className="purple">AI tools</span> to build websites, and I
            usually do my work from my <span className="purple">mobile</span>.
            I’ve also worked on{" "}
            <span className="purple">Messenger bots</span> and{" "}
            <span className="purple">game-related projects</span>.
            <br />
            <br />
            In my free time, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> A bit of Editing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I enjoy building simple things and improving step by step."
          </p>
          <footer className="blockquote-footer">Sa Kib</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
