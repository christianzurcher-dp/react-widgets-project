import { Component } from "react";

export default class FontSizer extends Component {
  constructor() {
    super();
    this.state = {
      fontSize: 15,
    };
  }

  render() {
    return (
      <div className="FontSizer">
        {
          <h4 style={{ fontSize: this.state.fontSize }}>
            FontSize: {this.state.fontSize}
          </h4>
        }
        <button
          onClick={() =>
            this.state.fontSize !== 100
              ? this.setState((prevState) => ({
                  fontSize: prevState.fontSize + 5,
                }))
              : null
          }
        >
          Grow
        </button>
        <button
          onClick={() =>
            this.state.fontSize !== 0
              ? this.setState((prevState) => ({
                  fontSize: prevState.fontSize - 5,
                }))
              : null
          }
        >
          Shrink
        </button>
      </div>
    );
  }
}
