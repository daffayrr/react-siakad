// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/header';
import TabMenu from './components/tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
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
}

export default App;
