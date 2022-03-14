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

const AcademicResponsibities = () => {
  return (
    <Container
      style={{
        margin: "2 rem"
      }}
      className="table-parent"
      id="academic_responsibilities"
    >
      <h3>Academic Responsibities</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name of the Post</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Department MIS Coordinator</td>
            <td>2018</td>
            <td>Till Date</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Department DDFS Coordinator</td>
            <td>2020</td>
            <td>Till Date</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Refrigeration and Air Conditioning Lab-in charge (UG Lab)</td>
            <td>2018</td>
            <td>Till Date</td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              Mechanical Engineering association faculty advisor (Student
              Activity)
            </td>
            <td>2019</td>
            <td>Till Date</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Low Temperature Lab (Research Lab)</td>
            <td>2020</td>
            <td>Till Date</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default AcademicResponsibities;
