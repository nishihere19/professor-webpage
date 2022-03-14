import React from "react";
import { Container, Row, Col, Card, ListGroup, Badge } from "react-bootstrap";

const Courses = () => {
  return (
    <Container
      style={{
        margin: "2 rem",
      }}
      id="courses"
    >
      <h3>
        Courses
      </h3>
      <ListGroup style={{
          textAlign: "left",
      }}>
        <ListGroup.Item>Refrigeration & Air conditioning</ListGroup.Item>
        <ListGroup.Item>Cryogenic Engineering</ListGroup.Item>
        <ListGroup.Item>Advanced Heat Transfer</ListGroup.Item>
        <ListGroup.Item>Fluid Mechanics</ListGroup.Item>
        <ListGroup.Item>Engineering Mechanics</ListGroup.Item>
        <ListGroup.Item>Introduction to Mechanical Engineering</ListGroup.Item>
        <ListGroup.Item>Fluids and Thermal Engineering
</ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default Courses;
