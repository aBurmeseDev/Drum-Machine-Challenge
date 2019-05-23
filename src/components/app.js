import React, { Component } from "react";
import Sounds from "../assets/sounds";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sounds: Object.keys(Sounds)
    };
    this.playSound = this.playSound.bind(this);
  }

  playSound(eventObj) {
    // code to be run when click event is fired goes below this line!
    console.log("button working");
  }

  render() {
    const buttons = [];
    for (let i = 0; i < this.state.sounds.length; i++) {
      buttons.push(
        <Button sound={this.state.sounds[i]} playSound={this.playSound} />
      );
    }
    return <div className="button-container">{buttons}</div>;
  }
}

class Button extends Component {
  render() {
    return (
      <div
        // Add additional attributes here
        className="button"
        onClick={this.props.playSound}
      >
        <p>{this.props.sound}</p>
      </div>
    );
  }
}

export default App;
