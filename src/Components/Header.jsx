import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';  // Ensure this is included
import { NavbarBrand } from 'react-bootstrap';
import logo from '../assets/logo.png'

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <MDBNavbar style={{ backgroundColor: "#121618", color: 'white', width: '100%' }} expand='lg'>
      <MDBContainer>
        <MDBNavbarBrand href='#' style={{color:"#0796EF"}}> 
          <img
            src={logo}
            height='60'
            alt=''
            loading='lazy'
          />
          DEEPNETSOFT
        </MDBNavbarBrand>
        <NavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-controls='navbarResponsive'
          aria-expanded={isCollapsed}
          aria-label='Toggle navigation'
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse id='navbarResponsive' navbar show={isCollapsed}>
          <div className='text-light d-flex'>
            <h6 className='mx-4'>Home</h6>
            <h6 style={{textDecoration:'underline',color:"#0796EF"}} className='mx-4'>Menu</h6>
            <h6 className='mx-4'>Make A Reservation</h6>
            <h6 className='mx-4'>Contact Us</h6>
          </div>
        </MDBCollapse>
        </NavbarBrand>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;
