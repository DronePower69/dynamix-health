import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1>Welcome to Dynamix Health Initiative</h1>
          <p>Empowering Health Through Innovation.</p>
          <Button variant="primary">Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
