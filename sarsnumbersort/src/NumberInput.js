import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function NumberInput({ onValidInput, onError }) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Split the input by commas and trim spaces
    const numArray = input.split(",").map((item) => item.trim());

    
    const isValid = numArray.every((item) => !isNaN(item) && item !== "");

    if (!isValid) {
      onError("Error: Input should only contain numbers.");
      return;
    }

    const numberArray = numArray.map(Number);

    onValidInput(numberArray);
  };

  return (
    <Container className="mt-4">
    <Row className="justify-content-center">
      <Col xs={12} md={6}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNumbers">
            <Form.Label>Enter comma-separated numbers</Form.Label>
            <Form.Control
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="e.g., 1,2,3,4,5"
              isInvalid={input && !/^\d+(,\d+)*$/.test(input)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter only numbers and commas.
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
  );
}

export default NumberInput;
