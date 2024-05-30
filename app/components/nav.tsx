import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import code from '../../img/code.png';
import {
  CNavbar,
  CNavbarBrand,
  CContainer,
  CNavbarToggler,
  CCollapse,
  CNavItem,
  CNavLink,
  CNavbarNav
} from '@coreui/react';

const Nav = () => {
  const [visible, setVisible] = useState(false);
  
  return (
    <CNavbar  expand="lg" className="bg-base-300" placement='sticky-top'>
      <CContainer fluid>
        <CNavbarBrand href="/">
          <Image alt='brand logo' src={code} />
        </CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav>
            <CNavItem>
              <Link href="/" passHref>
                <CNavLink active>
                  <i className="mr-1 fas fa-home"></i> Home
                </CNavLink>
              </Link>
            </CNavItem>
            <CNavItem>
              <Link href="#about" passHref>
                <CNavLink>
                  <i className="mr-1 fas fa-question-circle"></i> About
                </CNavLink>
              </Link>
            </CNavItem>
            <CNavItem>
              <Link href="#projects" passHref>
                <CNavLink>
                  <i className="mr-1 fas fa-book"></i> Projects
                </CNavLink>
              </Link>
            </CNavItem>
            <CNavItem>
              
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
}

export default Nav;
