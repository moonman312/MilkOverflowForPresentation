import React from "react";
import './Header.css';
import milkLogo from '../Assets/milkLogo.png';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default function Header(){
    return (

      <div className='header'>
            <img className='milkLogo' src={milkLogo} alt="logo" />

      {/*<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar bg="dark">
          <Navbar.Brand href="#home">
            <img
              src="../Assets/milkLogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="mik overflow logo"
          />
        </Navbar.Brand>
        </Navbar>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Brand href="#about">About Us</Navbar.Brand>
        <Navbar.Brand href="#alldonors">Donor Map</Navbar.Brand>
        <Navbar.Brand href="#profile">Profile</Navbar.Brand>
        <Navbar.Brand href="#addbatch">Make A Milk Donation</Navbar.Brand>
      </Navbar>*/}
      </div>
    )
}
