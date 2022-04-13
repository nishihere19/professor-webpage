import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import image from "../../assets/20220124_152706_2.jpg";
import image2 from "../../assets/1642850600958.jpg";
import image3 from "../../assets/DSCF6027.JPG";
import { Carousel } from "react-bootstrap";

const About = () => {
  return (
    <Container
      style={{
        margin: "2 rem",
      }}
      id="about"
    >
      {/* <h1>About</h1> */}
      <Row>
        <Col>
          <Card>
            {/* <Card.Header>Quote</Card.Header> */}
            <Card.Body>
              <blockquote className='blockquote mb-0'>
                <p>
                  <Row>
                    <Col>
                      <img
                        alt='profile image'
                        src={image}
                        style={{ height: "225px", width: "225px" }}
                      ></img>
                    </Col>
                    <Col>
                      <ListGroup variant='flush'>
                        <ListGroup.Item>
                          PhD in Thermal Engineering at IIT Madras.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          M.Tech in Thermal Engineering at NIT Warangal.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          B.Tech in Mechanical Engineering JNTU Kakinada.
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                  </Row>
                </p>
                <footer className='footer'>
                  I am an Assistant Professor at NIT Tiruchirappalli, India. I
                  do research in Two phase heat transfer, Heat Exchangers,
                  Alternate Refrigerants, Cryogenic refrigerators operating with
                  mixtures (hydrocarbons), Expansion capillary design and Vapor
                  Compression Refrigeration systems.
                  {/* <cite title="Source Title">Source Title</cite> */}
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image3}
            alt='First slide'
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image2}
            alt='Second slide'
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default About;
