import React from "react";
import { Navbar, Badge } from "react-bootstrap";

function Footer(props) {
  if (props.name) {
    return <p>Hello {props.name}</p>;
  }

  return (
    <Navbar fixedBottom inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <p>
            Andriawan <Badge>first React App</Badge>
          </p>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );
}

export default Footer;
