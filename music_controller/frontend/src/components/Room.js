import React, { Component } from "react";
import { useParams } from "react-router-dom";

function withHook(Component) {
  return function WrappedComponent(props) {
    const params = useParams();
    // assuming :id is what you have on the route
    var roomCode = params.roomCode;
    return <Room {...props} roomCode={params.roomCode} />;
  };
}

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votesToSkip: 2,
      guestsCanPause: false,
      isHost: false,
    };
    this.roomCode = props.roomCode;
    this.getRoomDetails(this.roomCode);
  }

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
        <h3>{this.roomCode}</h3>
        <p>Votes: {this.state.votesToSkip}</p>
        <p>Guests Can Pause: {this.state.guestsCanPause.toString()}</p>
        <p>Host: {this.state.isHost.toString()}</p>
      </div>
    );
  }
}

export default withHook(Room);
