import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">HARSH DARAK </span>
            from <span className="purple"> Pune, India.</span>
            <br />I have a keen interest in learning Python<img src="https://img.icons8.com/color/48/000000/python.png" alt="python" width="40" height="40"/> 
            <br/>and ReactJS<img src="https://img.icons8.com/?size=512&id=25Sjy8fKExYA&format=png" alt="react" width="40" height="40"/> 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Done is better than perfect!"{" "}
          </p>
          <footer className="blockquote-footer">Harsh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
