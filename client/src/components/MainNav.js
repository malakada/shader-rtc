import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function MainNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">ShaderJam</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Item className="align-self-center">
              <Nav.Link href="/rooms">Join Room</Nav.Link>
            </Nav.Item>
            <Nav.Item className="align-self-center">
              <Nav.Link href="/faq">FAQ</Nav.Link>
            </Nav.Item>
            <Nav.Item className="align-self-center">
              <Nav.Link href="/dashboard">
                <Button variant="primary">Dashboard</Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default MainNav;
