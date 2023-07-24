import React, { Component } from "react";
import "./nav.css";
import { IoChatbubbles } from 'react-icons/io5';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <IoChatbubbles size="40" color="#508EB7" />
        <span>QuickChat</span>
      </div>
    );
  }
}
