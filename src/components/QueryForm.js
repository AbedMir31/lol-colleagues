import { Button, Form, Row, InputGroup } from "react-bootstrap";
export const QueryForm = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <InputGroup>
          <Form.Control
            className="form-text"
            name="ign1"
            type="text"
            placeholder="Summoner 1..."
            required
          ></Form.Control>
          <Form.Control
            className="form-text"
            name="ign2"
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
