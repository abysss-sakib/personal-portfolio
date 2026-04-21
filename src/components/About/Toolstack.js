import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiGooglechrome, SiGithub } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode fontSize={"24px"} />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglechrome fontSize={"24px"} />
        <div className="tech-icons-text">Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub fontSize={"24px"} />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaMobileAlt fontSize={"24px"} />
        <div className="tech-icons-text">Mobile Dev</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
