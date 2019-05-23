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

  playSound(e) {
    // code to be run when click event is fired goes below this line!
    console.log("button working", e.currentTarget.id);
    const soundToPlay = Sounds[e.currentTarget.id];
    soundToPlay.currentTime = 0;
    soundToPlay.play();
  }

  render() {
    const buttons = [];
    for (let i = 0; i < this.state.sounds.length; i++) {
      buttons.push(
        <Button
          key={i}
          sound={this.state.sounds[i]}
          playSound={this.playSound}
        />
      );
    }
    return (
      <div>
        <h1 style={{ color: "white" }}>Drummy by React</h1>;
        <div className="button-container">{buttons}</div>;
      </div>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <button
        // Add additional attributes here
        id={this.props.sound}
        className="button"
        onClick={this.props.playSound}
      >
        <p>{this.props.sound}</p>
      </button>
    );
  }
}

export default App;
