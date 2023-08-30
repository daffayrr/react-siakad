import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import AlmaAta from '../assets/main_logo_white.png'
import { auth } from '../firebase';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';



function Header () {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const handleLogout = async () => {
        try {
          await auth.signOut();
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home">
                <img
                src={AlmaAta}
                width="95"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle />

  

            <Navbar.Collapse className="justify-content-end" >
            <Navbar.Text variant='Light'>

            <Button variant="danger" onClick={handleShow}>
              Logout
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Konfirmasi</Modal.Title>
              </Modal.Header>
              <Modal.Body>Apakah anda yakin untuk LOGOUT ?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button onClick={handleLogout} variant='danger'>Logout
                </Button>
              </Modal.Footer>
            </Modal>
            </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
        
    )
}

export default Header;