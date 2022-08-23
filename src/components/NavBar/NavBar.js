
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

function NavBarN() {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="#home">NintendoOldies</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#"><img className='logo-uno' src={require('./color.png')} alt='game boy color'></img></Nav.Link>
            <Nav.Link href="https://google.com"><img className='logo' src={require('./advance.png')} alt='game boy advance'></img> </Nav.Link>
            <Nav.Link href="https://google.com"><img className='logo' src={require('./ds.png')} alt='nintendo ds'></img> </Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavBarN;