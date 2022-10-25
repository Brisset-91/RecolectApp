
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {Container,Nav,Offcanvas,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'

import { Link } from 'react-router-dom'
import user from '../../assets/user 1.jpg';
import './navbar.scss'

const MenuNavbar = () => {
  return (
    <div>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to='/pocket' className="nav-link" >POCKET</Link>
                  <Link to='/history' className='nav-link'>HISTORY</Link>
                  <Link to='/pricing' className='nav-link'>PRICING</Link>
                  <Link to='/payment' className='nav-link'>PAYMENT</Link>
                  <Link to='/profileSettings' className='nav-link'>PROFILE SETTINGS</Link>
                  <Link to='/newsletter' className='nav-link'>NEWSLETTER</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>          
  )
}

export default MenuNavbar
