import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./spaceStyles.css";
import * as math from "mathjs";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      status: false,
    };
  }
  statusClick = () => {
    this.setState({
      status: !this.state.status,
      input: this.state.input === "" ? "0" : "",
    });
  };

  captureValue = (data) => {
    if (this.state.status === true) {
      this.setState({
        input:
          this.state.input === "0" && data.target.value !== "0"
            ? `${data.target.value}`
            : `${this.state.input}${data.target.value}`,
      });
    }
  };
  evaluateValue = () => {
    try {
      this.setState({
        input: math.evaluate(this.state.input),
      });
    } catch {
      this.setState({
        input: "Error",
      });
    }
  };
  clearData = () => {
    if (this.state.status)
      this.setState({
        input: "0",
      });
  };
  render() {
    return (
      <div className="container center">
        <div className="space"></div>
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4"></div>
          <input
            type="textbox"
            className="displayWidth"
            value={this.state.input}
            disabled
          ></input>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4"></div>
          <button className="clearButtonWidth" onClick={() => this.clearData()}>
            clear
          </button>
          <button
            className="buttonWidthSymbols"
            value="/"
            onClick={(e) => this.captureValue(e)}
          >
            /
          </button>
        </div>
        <div className="row ">
          <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4"></div>
          <button
            className="buttonWidth"
            value="7"
            onClick={(e) => this.captureValue(e)}
          >
            7
          </button>
          <button
            className=" buttonWidth"
            value="8"
            onClick={(e) => this.captureValue(e)}
          >
            8
          </button>
          <button
            className="buttonWidth"
            value="9"
            onClick={(e) => this.captureValue(e)}
          >
            9
          </button>
          <button
            className="buttonWidthSymbols"
            value="-"
            onClick={(e) => this.captureValue(e)}
          >
            -
          </button>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4"></div>
          <button
            className="buttonWidth"
            value="4"
            onClick={(e) => this.captureValue(e)}
          >
            4
          </button>
          <button
            className=" buttonWidth"
            value="5"
            onClick={(e) => this.captureValue(e)}
          >
            5
          </button>
          <button
            className="buttonWidth"
            value="6"
            onClick={(e) => this.captureValue(e)}
          >
            6
          </button>
          <button
            className="buttonWidthSymbols"
            value="+"
            onClick={(e) => this.captureValue(e)}
          >
            +
          </button>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4"></div>
          <button
            className="buttonWidth"
            value="1"
            onClick={(e) => this.captureValue(e)}
          >
            1
          </button>
          <button
            className="buttonWidth"
            value="2"
            onClick={(e) => this.captureValue(e)}
          >
            2
          </button>
          <button
            className="buttonWidth"
            value="3"
            onClick={(e) => this.captureValue(e)}
          >
            3
          </button>
          <button
            className="buttonWidthSymbols"
            value="1"
            onClick={() => this.evaluateValue()}
          >
            =
          </button>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4"></div>
          <button
            className="buttonWidth"
            value="0"
            onClick={(e) => this.captureValue(e)}
          >
            0
          </button>
          <button
            className="buttonWidth"
            value="."
            onClick={(e) => this.captureValue(e)}
          >
            .
          </button>
          <button
            className="powerWidth"
            value="on"
            onClick={() => this.statusClick()}
          >
            ON/OFF
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
