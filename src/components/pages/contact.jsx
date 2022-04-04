import React, { useState } from "react";
import logo1 from "../../assets/images/logo1.png";
import { StyledContact, Wrapper } from "../styles/contactStyle";
import { Form, Row, Col, Button, Container, Modal } from "react-bootstrap";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledContact id="contact">
      <Container>
        <Wrapper>
          <img alt="" src={logo1} />
          <Form className="ml-100" onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  onChange={handleName}
                  value={name}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  onChange={handleEmail}
                  value={email}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGriMessage">
              <Form.Control
                placeholder="Write message here..."
                value={message}
                onChange={handleMessage}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="btn-info btn"
              onClick={handleShow}
            >
              Send
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Thank You!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Thanks for contacting us. We'll get back to you as soon as
                possible!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Form>
        </Wrapper>
      </Container>
    </StyledContact>
  );
}

export default Contact;
