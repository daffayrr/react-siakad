import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import AlmaAta from '../assets/main_logo_white.png'

function Header() {
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
            </Container>
        </Navbar>
        </>
        
    )
}

export default Header;