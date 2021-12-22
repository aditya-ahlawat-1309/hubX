import React from 'react'
import {Navbar,Nav, Container} from 'react-bootstrap';
function NavbarJS() {
    return (
      <>
        <Navbar bg="info" expand="lg" style={{color:"white"}}>
          <Container>
            <div className="d-flex mx-3">
              <Navbar.Brand>Internshala Project MERN Stack</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="float-right align-items-end">
                  <Nav.Link href="/login"> LogIn</Nav.Link>
                  <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </>
    );
}

export default NavbarJS
