import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
// import 'bootstrap/js/dist/collapse.js';

const Navigation2 = (props: any) => {


  const navButtons = props.NavButtons;
  const navButtonComps = navButtons.map((button: {dest: string, title: string, add: string}) =>
    <Nav.Link as={Link} to={button.add} onClick={() => props.nextPageHandler(button.dest)}>{button.title}</Nav.Link>
  );

  return (<Navbar sticky="top" bg="light" variant="light" expand="lg">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" style={{ width: "100%" }}>
          {navButtonComps}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>);
};

export default Navigation2;
