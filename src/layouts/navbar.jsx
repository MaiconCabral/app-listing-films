import React, { Fragment } from 'react';

import {Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet, Link, NavLink } from 'react-router-dom';


function NarBarExample() {
  return (
    <Fragment>
        {/* <Navbar className="navBg" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
                    <Nav.Link as={Link} to="/list">List</Nav.Link>
                  
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> */}
        <ul>
            <li>
              <NavLink 
              className={({ isActive }) => (isActive ? "link-active" : "none")}
              to="/">
                    Dashboard
                </NavLink>
            </li>
            <li>
              <NavLink 
              className={({ isActive }) => (isActive ? "link-active" : "none")}
              to="/list">
                List
                </NavLink>
            </li>
        </ul>

        <section>
            <Outlet></Outlet>
        </section>
    </Fragment>
  )
}

export default NarBarExample;