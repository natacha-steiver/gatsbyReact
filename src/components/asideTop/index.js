import React from "react";
import "./asideTop.scss";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Container } from 'react-bootstrap';
import HamburgerButton from "../HamburgerButton";
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
    <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">My work</Nav.Link>
      <Nav.Link href="#pricing">About me</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

        
            </div>

        </aside>
    )
}
export default AsideTop;