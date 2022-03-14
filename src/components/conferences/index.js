import React from "react";
import img from "./assets/conferences.jpg";
import {
  Container,
  Table,
  Row,
  Col,
  Card,
  Carousel,
  Badge,
} from "react-bootstrap";

const Conferences = () => {
  return (
    <Container
      style={{
        margin: "2 rem",
      }}
      id="conferences"
      className="table-parent"
    >
      <h3>Conferences</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title of the Talk/Program/Activity</th>
            <th>Role</th>
            <th>Venue</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ICAMS (2021)</td>
            <td>Conference Chair</td>
            <td>Vardaman College of Engg, Hyd</td>
            <td>2021</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Low Temperature Science and Engineering</td>
            <td>Speaker</td>
            <td>K L University, Vijayawada</td>
            <td>2021</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Introduction to Cryogenics and its Applications</td>
            <td>Speaker</td>
            <td>VIIT, Vizag</td>
            <td>2021</td>
          </tr>
          <tr>
            <td>4</td>
            <td>ICAMS (2020)</td>
            <td>Conference Chair</td>
            <td>Vardaman College of Engg, Hyd</td>
            <td>2020</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Doctoral Committee</td>
            <td>External DC Member</td>
            <td>VIT, Vellore</td>
            <td>2020</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Conferences;
