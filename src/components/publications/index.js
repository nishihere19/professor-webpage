import React from "react";
import {
  Container,
  Table,
  Row,
  Col,
  Card,
  ListGroup,
  Badge,
} from "react-bootstrap";

const Publications = () => {
  return (
    <Container
      style={{
        margin: "2 rem"
      }}
      id="publications"
    >
      <h3>Publications</h3>
      <div className="table-parent">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title of the Paper</th>
            <th>Role</th>
            <th>Journal</th>
            <th>Publisher</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              Polyelectrolyte layer grafting effect on the rotational
              electroosmotic flow of viscoplastic material
            </td>
            <td>Author</td>
            <td>Microfluidics and Nano</td>
            <td>Springer</td>
            <td>2021</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Recent trends on titanium metal matrix composites: A review</td>
            <td>Corresponding author</td>
            <td>Materials Today: Proceedings</td>
            <td>Elsevier</td>
            <td>2021</td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              Rotating electroosmotic flow of power-law fluid through
              polyelectrolyte grafted microchannel
            </td>
            <td>Author</td>
            <td>Colloids and Surfaces B: Biointerfaces</td>
            <td>Elsevier</td>
            <td>2020</td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              Modified thermal balance method for estimating minimum inerting
              concentraion of flammable refrigerant mixtures
            </td>
            <td>Corresponding author</td>
            <td>Journal of Thermal Analysis and Calorimetry</td>
            <td>Springer</td>
            <td>2020</td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              Performance of J-T refrigerators operating with mixtures and
              coiled wire-finned heat exchangers
            </td>
            <td>Corresponding author</td>
            <td>Journal of Thermal Analysis and Calorimetry</td>
            <td>Springer</td>
            <td>2020</td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              Studies on capillary tube expansion device used in JT
              refrigerators operating with nitrogen-hydrocarbon mixtures
            </td>
            <td>First Author</td>
            <td>Cryogenics</td>
            <td>Elsevier</td>
            <td>2017</td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              Comparison of the straight adiabatic capillary tube expansion
              devices used in refrigeration systems operating with refrigerants
              R134a and R1234yf
            </td>
            <td>First Author</td>
            <td>Journal of Thermal Science and Engineering Applications</td>
            <td>ASME</td>
            <td>2016</td>
          </tr>
        </tbody>
      </Table>
      </div>
      <div className="table-parent">
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
              Studies on coiled wire finned heat exchangers operating with wide
              boiling mixtures
            </td>
            <td>First Author</td>
            <td>International</td>
            <td>IIR Yokohama Japan</td>
            <td>2015</td>
          </tr>
        </tbody>
      </Table>
      </div>
      <h5>Reviewer For International Journals</h5>
      <ListGroup
        style={{
          textAlign: "left",
        }}
      >
        <ListGroup.Item>
          Sadhana, Springer, Published by the Indian Academy of Sciences
        </ListGroup.Item>
        <ListGroup.Item>Cryogenic Engineering</ListGroup.Item>
        <ListGroup.Item>
          Journal of Thermal Analysis and Calorimetry, Springer
        </ListGroup.Item>
        <ListGroup.Item>
          Journal of Enhanced Heat Transfer, Begell House
        </ListGroup.Item>
        <ListGroup.Item>
          Science and Technology for the Built Environment, Taylor and Francis
        </ListGroup.Item>
        <ListGroup.Item>
          Asia-Pacific Journal of Chemical Engineering, Wiley
        </ListGroup.Item>
        <ListGroup.Item>Materials Today: Proceedings, Elsevier</ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default Publications;
