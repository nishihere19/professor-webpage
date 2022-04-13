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
      id='conferences'
      className='table-parent'
    >
      <h3>Invited Talks and Other activities</h3>
      <div className='table-parent'>
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
      </div>
      <h3>Conferences</h3>
      <div className='table-parent'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Title of the Paper</th>
              <th>Role</th>
              <th>International/National</th>
              <th>Organiser/Venue</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                Second-law Based Validation for the Choice of Optimum Gas-power
                Cycles
              </td>
              <td>First Author</td>
              <td>International</td>
              <td>IIT Bombay</td>
              <td>2018</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                Perturbation Solution of a Viscoelastic Fluid Squeezed and
                Extruded Between Two Parallel Plates
              </td>
              <td>First Author</td>
              <td>International</td>
              <td>IIT Bombay</td>
              <td>2018</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                Studies on coiled wire finned heat exchangers operating with
                wide boiling mixtures
              </td>
              <td>First Author</td>
              <td>International</td>
              <td>IIR Yokohama Japan</td>
              <td>2015</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Conferences;
