import { Container, Navbar, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavBar = () => {
  return (
    <div style={{ borderBottom: "1px solid white" }}>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Row className="align-items-center">
            <Col></Col>
            <Col>
              <Navbar.Brand href="#home" style={{ fontSize: "28px" }}>
                LoL Colleagues
              </Navbar.Brand>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};
