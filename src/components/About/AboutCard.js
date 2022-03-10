import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Atmagyan Singh </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />I am pursuing B.Tech from University of Lucknow in Computer Science and Engineering..
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drawing Sketch
            </li>
            <li className="about-activity">
              <ImPointRight /> Listeing Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Stories
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Atmagyan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
