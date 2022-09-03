import { Container, Row } from "react-bootstrap";
import { QueryForm } from "./QueryForm";
export const Body = () => {
  return (
    <Container className="form-container">
      <Row className="align-items-center">
        <h1 className="form-header">LoL Game Checker</h1>
        <QueryForm></QueryForm>
      </Row>
    </Container>
  );
};
