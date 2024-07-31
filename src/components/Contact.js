import React from 'react';
import { Container, Row, Col, Button ,Form } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col md={6}>
          <h2>Contact Us</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
  
export default Contact;
