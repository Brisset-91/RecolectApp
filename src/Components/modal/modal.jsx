import { useState } from "react"
import React, { Component } from "react";


import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Modals = () => {

    function Example() {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Button variant="primary" id="root" onClick={handleShow}>
              Launch demo modal
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  No
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Si
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
    }
    
    render (<Example />);
}

export default Modals