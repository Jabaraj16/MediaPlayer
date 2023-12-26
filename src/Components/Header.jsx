import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-info">
        <Container>
          <Navbar.Brand  className='fw-bolder' style={{fontSize:'25px',color:'white'}}>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
            <i class="fa-solid fa-cloud-arrow-up fa-beat"></i>
              <span className='ms-2'>Media Player</span>
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header