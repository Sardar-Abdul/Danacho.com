import React, { useState } from "react";
import { StyledBuy, Wrapper, Header } from "../styles/buyStyle";
import { Form, Button, Modal } from "react-bootstrap";

function Buy() {
  const [buy, setBuy] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleBuy = (e) => {
    setBuy(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledBuy id="buy">
      <>
        <Wrapper>
          <Form onSubmit={handleSubmit}>
            <Header>
              <h1>Buy Danacho (NAC)</h1>
            </Header>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter ETH"
                onChange={handleBuy}
                value={buy}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleShow}>
              Connect Wallet
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Buy Danacho</Modal.Title>
              </Modal.Header>
              <Modal.Body>Please connect wallet first!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Form>
        </Wrapper>
      </>
    </StyledBuy>
  );
}

export default Buy;
