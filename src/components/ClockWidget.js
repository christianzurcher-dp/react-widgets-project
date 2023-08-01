import { Component } from "react";

export default class ClockWidget extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: new Date(),
      toggle: false,
    };
  }

  handleClick = () => {
    this.setState(
      (prevState) => ({ toggle: !prevState.toggle, currentTime: new Date() }),
      () => {
        if (this.state.toggle === true) {
          this.updateTime = setInterval(() => {
            this.setState((prevState) => ({ currentTime: new Date() }));
          }, 1000);
        } else {
          clearInterval(this.updateTime);
        }
      }
    );
  };

  render() {
    return (
      <div className="ClockWidget">
        <h1>
          {this.state.toggle && this.state.currentTime.toLocaleTimeString()}
        </h1>
        <button onClick={this.handleClick}>
          {this.state.toggle ? "Unmount" : "Mount"}
        </button>
      </div>
    );
  }
}
