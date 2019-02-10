import React from "react";
import {
  FormGroup,
  HelpBlock,
  FormControl,
  ControlLabel
} from "react-bootstrap";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.callback(event.target.value);
    console.log(this.state.value);
  }

  render() {
    return (
      <FormGroup controlId="formBasicText">
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl
          type="text"
          value={this.props.value}
          placeholder="Enter text"
          onChange={this.handleChange}
        />
      </FormGroup>
    );
  }
}

export default Input;
