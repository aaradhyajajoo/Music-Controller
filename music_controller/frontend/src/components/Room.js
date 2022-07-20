import React, { Component } from "react";
import { useParams } from "react-router-dom";

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votesToSkip: 2,
      guestsCanPause: false,
      isHost: false,
    };
    console.log(this.props.match.params.roomCode);
    // this.roomCode = this.getroomCode();
    // console.log(this.roomCode);
    // this.getRoomDetails();
  }
//   getroomCode() {
//     console.log(useParams().roomCode);
//     return useParams().roomCode;
//   }

  getRoomDetails() {
    fetch("/api/get-room" + "?code=" + this.roomCode)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          votesToSkip: data.votes_to_skip,
          guestCanPause: data.guest_can_pause,
          isHost: data.is_host,
        });
      });
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
