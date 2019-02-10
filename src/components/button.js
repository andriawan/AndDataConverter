import React from "react";
import { Button as Btn, Modal } from "react-bootstrap";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Btn bsStyle="success" onClick={this.handleShow}>
          {this.props.label}
        </Btn>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Hello from Andriawan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Tester Modal :D</p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Button;
