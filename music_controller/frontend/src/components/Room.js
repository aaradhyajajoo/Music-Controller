import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { withRouter } from "./test";

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votesToSkip: 2,
      guestsCanPause: false,
      isHost: false,
    };
    console.log("Hello");
  }
  render() {
    return (
      <div>
        <h3>{this.state.roomCode}</h3>
        <p>Votes: {this.state.votesToSkip}</p>
        <p>Guests Can Pause: {this.state.guestsCanPause.toString()}</p>
        <p>Host: {this.state.isHost.toString()}</p>
      </div>
    );
  }
}
