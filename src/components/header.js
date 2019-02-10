import React from "react";
import { Navbar } from "react-bootstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">
              {this.props.banner} versi {this.props.version}
            </a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Header;
