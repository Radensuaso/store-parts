import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiComputerFan } from 'react-icons/gi';
import { BsFillCartFill } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';

function NavbarStoreParts() {
  const location = useLocation();

  return (
    <Navbar fixed='top' className='nav-bar-store-parts' variant='dark'>
      <Container>
        <Link className='navbar-brand' to='/'>
          <GiComputerFan />
        </Link>
        <Nav className='me-auto'>
          <Link
            className={
              location.pathname === '/'
                ? 'navbar-brand active-link'
                : 'navbar-brand'
            }
            to='/'
          >
            Home
          </Link>
        </Nav>
        <Nav>
          <Link
            className={
              location.pathname === '/cart'
                ? 'navbar-brand active-link'
                : 'navbar-brand'
            }
            to='/cart'
          >
            <BsFillCartFill />
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarStoreParts;
