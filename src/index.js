import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Button from "./components/button";
import Content from "./components/content";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      app_name: "AndDataConverter Beta",
      version: "0.01",
      version_int: 1
    };
  }

  greet = () => {
    alert("hey");
  };

  render() {
    return (
      <div className="App">
        <Header banner={this.state.app_name} version={this.state.version} />
        <Content />
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
