
import { Link } from 'react-router-dom'
import user from '../../assets/user 1.jpg';
import './navbar.scss'

const Navbar = () => {

  return (
      
    <nav className=" navbar-prncipal navbar navbar-expand-sm navbar-dark fixed-top d-flex flex-column  align-items-center">
      <div className="container-fluid">
        <div>
          <button 
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/AddNewBusiness' className="nav-link" >POCKET</Link>
              </li>
              <li className="nav-item">
                <Link to='/AddNewBusiness' className='nav-link'>HISTORY</Link>
              </li>
              <li className="nav-item">
                <Link to='/AddNewBusiness' className='nav-link'>PRICING</Link>
              </li>
              <li className="nav-item">
                <Link to='/AddNewBusiness' className='nav-link'>PAYMENT</Link>
              </li>
              <li className="nav-item">
                <Link to='/AddNewBusiness' className='nav-link'>PROFILE SETTINGS</Link>
              </li>
              <li className="nav-item">   
                <Link to='/AddNewBusiness' className='nav-link'>NEWSLETTER</Link>
              </li>

            </ul>
          </div>
        </div>

        <div>
          <p className='nameUser '>Hola Brisset</p>
        </div>

        <div className="" >
          <img className='rounded-circle' src={user} alt="" />
        </div>

      </div>
    </nav>
      
      
          
  )
}

export default Navbar


/*
import {Nav, Navbar, Container, NavDropdown } from 'reactstrap'

function NavBar(props) {
    return (
        <Navbar collapseOnSelect expand="lg" >
        <Container>
        <Navbar.Brand href="#home">Recolect App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar */