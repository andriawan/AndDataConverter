import React from "react";
import { Row, Grid, Col } from "react-bootstrap";
import Input from "../components/input";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mb: 0,
      b: 0,
      kb: 0
    };

    this.updateMB = this.updateMB.bind(this);
    this.updateB = this.updateB.bind(this);
    this.updateKB = this.updateKB.bind(this);
  }

  updateMB(data) {
    this.setState({
      mb: data,
      b: data * 1048576,
      kb: data * 1024
    });
  }

  updateB(data) {
    this.setState({
      mb: data / 1048576,
      b: data,
      kb: data / 1024
    });
  }

  updateKB(data) {
    this.setState({
      kb: data,
      b: data * 1024,
      mb: data / 1024
    });
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={4}>
            <Input
              type="mb"
              callback={this.updateMB}
              value={this.state.mb}
              label="Mega Bytes"
            />
          </Col>
          <Col xs={12} md={4}>
            <Input
              callback={this.updateKB}
              type="mb"
              value={this.state.kb}
              label="Kilo Bytes"
            />
          </Col>
          <Col xs={12} md={4}>
            <Input
              callback={this.updateB}
              type="mb"
              value={this.state.b}
              label="Bytes"
            />
          </Col>
        </Row>
        <p>
          {this.state.mb} MB equals to {this.state.kb} KB and also equals to{" "}
          {this.state.b} B
        </p>
      </Grid>
    );
  }
}

export default Content;
