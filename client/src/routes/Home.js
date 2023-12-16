import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import MainNav from '../components/MainNav';

function Home() {
  return (
    <div>
      <MainNav />
      <Container fluid className="hero-area">
        <Row>
          <Col className="d-flex">
            <div className="hero-box mx-auto">
              <h1>Room Code</h1>
              <Form.Label htmlFor="roomCode">Enter a room code:</Form.Label>
              <Form.Control id="roomCode" type="text" placeholder="Room code" />
              <Button className="mt-4" variant="primary">Play</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
