import { Component } from "react";

export default class TextAligner extends Component {
  constructor() {
    super();
    this.state = {
      textAlign: "center",
    };
  }
  render() {
    return (
      <div className="text-aligner">
        <div>
          <h1 style={{ textAlign: this.state.textAlign }}>Text</h1>
        </div>
        <button
          onClick={() => this.setState((prevState) => ({ textAlign: "left" }))}
        >
          left
        </button>
        <button
          onClick={() =>
            this.setState((prevState) => ({ textAlign: "center" }))
          }
        >
          center
        </button>
        <button
          onClick={() => this.setState((prevState) => ({ textAlign: "right" }))}
        >
          right
        </button>
      </div>
    );
  }
}
