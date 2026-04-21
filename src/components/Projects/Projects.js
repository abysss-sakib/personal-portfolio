import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import projects from "../../data/projects";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>A few things I’ve been working on.</p>
        {projects.length === 0 ? (
          <p style={{ color: "#9a93a8", textAlign: "center", paddingBottom: "10px" }}>
            No projects yet — check back soon.
          </p>
        ) : null}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((p) => (
            <Col
              key={p.title}
              xs={12}
              md={10}
              lg={8}
              className="project-category-row"
              style={{
                marginBottom: "16px",
                padding: "16px 20px",
                borderLeft: "3px solid #c084f5",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "6px",
                textAlign: "left",
              }}
            >
              <h3 className="purple" style={{ marginBottom: "4px" }}>
                {p.title}
              </h3>
              <p style={{ color: "#dcd6e6", margin: 0 }}>{p.description}</p>
              {p.link ? (
                <p style={{ margin: "6px 0 0" }}>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#c084f5", textDecoration: "none" }}
                  >
                    View →
                  </a>
                </p>
              ) : null}
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
