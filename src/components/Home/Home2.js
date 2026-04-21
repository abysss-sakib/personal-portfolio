import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I'm <span className="purple">Sa Kib</span>.
              <br />
              I'm a student who enjoys exploring coding in a simple way. I use{" "}
              <i>
                <b className="purple">AI tools</b>
              </i>{" "}
              to build websites, and I usually do my work from my{" "}
              <i>
                <b className="purple">mobile</b>
              </i>
              .
              <br />
              <br />
              I've also worked on{" "}
              <i>
                <b className="purple">Messenger bots</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">game-related projects</b>
              </i>
              .
              <br />
              <br />
              In my free time, I like{" "}
              <b className="purple">gaming</b>, watching{" "}
              <b className="purple">anime</b>, and doing a bit of{" "}
              <b className="purple">editing</b>.
              <br />
              <br />I enjoy building simple things and improving step by step.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/share/1CgHAxkyQi/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/iimnnot_sakib?igsh=djVyMWYyYXBlNGVj&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/noturtypesakib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
