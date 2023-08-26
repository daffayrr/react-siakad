import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import AlmaAta from '../assets/main_logo_white.png'
import { auth } from '../firebase';



function Header () {

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
             <Button onClick={handleLogout} variant='danger'>Logout</Button>
            </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
        
    )
}

export default Header;