import './App.css';
import React, { useState } from "react";
import NumberInput from "./NumberInput";
import { Container, Row, Col, Alert, Card } from "react-bootstrap";


function App() {
  const [numbers, setNumbers] = useState([]);
  const [error, setError] = useState("");

  const handleValidInput = (numArray) => {
    
    setError("");
    
    const sortedNumbers = numArray.sort((a, b) => b - a);
    setNumbers(sortedNumbers);
  };

  const handleError = (message) => {
    
    setError(message);
    setNumbers([]);
  };

  return (
    <Container className="mt-4">
    <Row className="justify-content-center">
      <Col xs={12} md={8} lg={6}>
        <Card className="p-4">
          <h1 className="text-center">Number Sorting App</h1>
          <NumberInput onValidInput={handleValidInput} onError={handleError} />
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
          {!error && numbers.length > 0 && (
            <Alert variant="success" className="mt-3">
              <strong>Sorted Numbers: </strong>{numbers.join(", ")}
            </Alert>
          )}
        </Card>
      </Col>
    </Row>
  </Container>
  );
}

export default App;

