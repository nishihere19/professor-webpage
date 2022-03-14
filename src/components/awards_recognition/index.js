import React from "react";
import { Container, Row, Col, Card, ListGroup, Badge } from "react-bootstrap";

const AwardsRecognition = () => {
  return (
    <Container
      style={{
        margin: "2 rem",
      }}
      id="awards"
    >
      <h3>Awards and Recognition</h3>
      <ListGroup
        style={{
          textAlign: "left",
        }}
      >
        <ListGroup.Item>
          Best Faculty award in recognition of the commendable performance in
          Teaching, Research and Institutional Development in 2020-21 at NIT
          Trichy.
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default AwardsRecognition;
