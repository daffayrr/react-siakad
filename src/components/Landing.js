// src/components/Dashboard.js
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './header';
import TabMenu from './tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Dashboard = ({ user }) => {

  return (
    <div>
      <Header />
       <br />
        <Container fluid="md">
        <Row>
          <Col>
            <TabMenu />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
