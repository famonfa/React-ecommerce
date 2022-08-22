
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'

function NavBarN() {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="#home">NintendoOldies</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#"><a><img className='logo-uno' src={require('./color.png')} alt='game boy color'></img> </a></Nav.Link>
            <Nav.Link href="https://google.com"><a><img className='logo' src={require('./advance.png')} alt='game boy advance'></img> </a></Nav.Link>
            <Nav.Link href="https://google.com"><a><img className='logo' src={require('./ds.png')} alt='nintendo ds'></img> </a></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarN;