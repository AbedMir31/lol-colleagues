import { Container, Navbar, Col, Row, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import lol from "../assets/img/lol.svg";

export const NavBar = () => {
  return (
    <div style={{ borderBottom: "1px solid white" }}>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Row className="align-items-center">
            <Col>
              <Image src={lol}></Image>
            </Col>
            <Col>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};
