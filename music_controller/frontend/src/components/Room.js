import React, { Component } from "react";

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votesToSkip: 2,
      guestsCanPause: false,
      isHost: false,
    };
    this.roomCode = this.props.match.params.roomCode;
  }
  render() {
    return (
      <div>
        <h3>{this.state.roomCode}</h3>
        <p>Votes: {this.state.votesToSkip}</p>
        <p>Guests Can Pause: {this.state.guestsCanPause}</p>
        <p>Host: {this.state.isHost}</p>
      </div>
    );
  }
}
