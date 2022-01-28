import React from "react";
import "./asideTop.scss";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Container } from 'react-bootstrap';
import HamburgerButton from "../HamburgerButton";
import { Link } from 'gatsby'
const showSettings=(event)=> {
  event.preventDefault();
}
//!!!!!!!!!!!!!!!! problème width > 110% smartphone

 const AsideTop=()=>{
    return(
      //show/hide via css because document/window doesn't work
      <aside>
          <div id="menus">

  
           
         <div id="hamburger">
         <HamburgerButton />
         </div>
         
      
            
           
            
           
            

  <Navbar  variant="light" id="menuLarge">
    <Container>
    <Link to="/" className="navbar-brand">Portfolio</Link>
    <Nav className="me-auto">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/work" className="nav-link">My work</Link>
      <Link to="/about" className="nav-link">About me</Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

        
            </div>

        </aside>
    )
}
export default AsideTop;