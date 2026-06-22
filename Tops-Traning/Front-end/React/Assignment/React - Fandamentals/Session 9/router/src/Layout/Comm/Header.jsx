import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';

function Header() {

  const [showBasic, setShowBasic] = useState(false)

  return (

    <div>

 <header>
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='ms-auto mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page'  tag={NavLink} to="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink tag={NavLink} to="/Cart">Cart</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink tag={NavLink} to="/Deals">Deals</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>

    </div>

  )
}

export default Header