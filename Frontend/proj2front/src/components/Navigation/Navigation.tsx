import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './Navigation.module.scss';
// import 'bootstrap/js/dist/collapse.js';

const Navigation = (props: any) => {


  const navButtons = props.NavButtons;
  console.log(navButtons);
  const navButtonComps = navButtons.map((button: {dest: string, title: string}) =>
    <Nav.Link onClick={() => props.nextPageHandler(button.dest)}>{button.title}</Nav.Link>
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

export default Navigation;
