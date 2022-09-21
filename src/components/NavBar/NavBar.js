
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { Link } from 'react-router-dom'
// import SearchBar from '../SearchBar/SearchBar';


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container>
        
        <Link to="/"><h5 className='nav-brand'>NintendoOldies</h5></Link>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/category/1" ><img className='logo-uno' src={require('./color.png')} alt='game boy color'></img></Link>
            <Link to="/category/2" ><img className='logo' src={require('./advance.png')} alt='game boy advance'></img> </Link>
            <Link to="/category/3" ><img className='logo' src={require('./ds.png')} alt='nintendo ds'></img> </Link>
           
          </Nav>
          <Link to='/cart'><CartWidget /></Link>
         

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavBar;