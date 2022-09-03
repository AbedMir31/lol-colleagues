import { Button, Form, Col, Row, InputGroup } from "react-bootstrap";
export const QueryForm = () => {
  return (
    <Form>
      <Row>
        <InputGroup>
          <Form.Control
            className="form-text"
            type="text"
            placeholder="Summoner 1..."
            required
          ></Form.Control>
          <Form.Control
            className="form-text"
            type="text"
            placeholder="Summoner 2..."
            required
          ></Form.Control>
        </InputGroup>
        <Button variant="primary" size="sm" type="submit">
          Search
        </Button>
      </Row>
    </Form>
  );
};
