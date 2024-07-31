import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Services = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col md={6}>
          <h2>Our Services</h2>
          <p>We offer a range of health services to meet your needs.</p>
          <p>This is just the basic. We will be tuning it further on.</p>
        </Col>
      </Row>
    </Container>
  );
};
  
export default Services;
