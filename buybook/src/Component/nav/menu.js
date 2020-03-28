import React, { Component,useState } from 'react';
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import './menu.css';

const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Buy Book</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink><Link to="/dangnhap">Đăng nhập</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/dangky">Đăng ký</Link></NavLink>
              </NavItem>
            </Nav>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default Menu;