import React from "react";
//import css
import "./ChatBot.css";
import "bootstrap/dist/css/bootstrap.css";
//import chatbox
import { Chatbot } from "react-chatbot-kit";
import ActionProvider from "../../ActionProvider";
import MessageParser from "../../MessageParser";
import config from "../../config";
//import bootsrap elements
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
//import icon
import { GrRobot } from "react-icons/gr";

const display = {
  display: "block",
};
const hide = {
  display: "none",
};

export class ChatBot extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggle: false,
    };
  }
  toggle(event) {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  }
  render() {
    var modal = [];
    modal.push(
      <div className="modal" style={this.state.toggle ? display : hide}>
        <div className="modal-content">
          <CloseButton
            className="chatButton"
            variant="warning"
            size="lg"
            onClick={this.toggle}
          ></CloseButton>
          <Chatbot
            className="BotAvatar"
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </div>
    );
    return (
      <div className="chatBot">
        <Button variant="warning" size="sm">
          <GrRobot />
          <a className="btn" onClick={this.toggle}>
            {this.state.toggle ? "Close" : "FAQ"}
          </a>
        </Button>
        {modal}
      </div>
    );
  }
}
