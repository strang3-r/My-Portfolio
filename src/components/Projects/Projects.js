import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import todo from "../../Assets/Projects/TodoList.png";
import keep from "../../Assets/Projects/keepr.jpeg";
import book from "../../Assets/Projects/book.jpeg";
import auth from "../../Assets/Projects/auth.jpeg";
import tindog from "../../Assets/Projects/tindog.jpeg";
import krishikart from "../../Assets/Projects/Krishikart.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krishikart}
              isBlog={false}
              title="Krishikart"
              description="Used HTML, CSS, Javascript to build this Krishikart Web Page. This is only Frontend design for Krishikart."
              link="https://github.com/Black-Devil007/Krishikart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do List"
              description="I used HTML, CSS, Javascript, MongoDB, ejs and NodeJs to build this intresting and responsive To-Do List Web App."
              link="https://github.com/Black-D3vil007/To-Do-List"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keep}
              isBlog={false}
              title="Keeper-App"
              description="Keeper-App is built to keep some notes. It is developed by using React framework."
              link="https://github.com/Black-D3vil007/Keeper-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Book-Shop"
              description="Using NodeJs, HTML, CSS, Javascript, JSON, and ejs develop a book shop in which you can buy books."
              link="https://github.com/Black-D3vil007/Shop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={auth}
              isBlog={false}
              title="Authentication"
              description="Used Facebook, Instagram, and Google account to sign-up or sign-in ."
              link="https://github.com/Black-D3vil007/Authentication"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tindog}
              isBlog={false}
              title="TinDog"
              description="This is a simple website build using HTML and CSS. "
              link="https://github.com/Black-D3vil007/TinDog"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
