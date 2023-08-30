// src/components/Auth.js
import React from 'react';
import { auth, provider } from '../firebase';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Auth = ({ setUser }) => {
  const handleSignIn = async () => {
    try {
      const result = await auth.signInWithPopup(provider);
      const user = result.user;
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
    <div>
      <br/>
      <Container>
      <Row>
        <Col>
          <Card className="text-center">
            <Card.Header>Universitas Alma Ata</Card.Header>
            <Card.Body>
              <Card.Title>Selamat Datang</Card.Title>
              <Card.Text>
                Silahkan login menggunakan akun nim@almaata.ac.id.
              </Card.Text>
              <Button onClick={handleSignIn}>Sign in with Google</Button>
            </Card.Body>
            <Card.Footer className="text-muted">{Date('YY:MM:DD:H:S')}</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
      
    </div>
  );
};

export default Auth;
