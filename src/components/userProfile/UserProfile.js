import React, { Component } from "react";
import "./userProfile.css";
import Switch from '@mui/material/Switch';
import SettingsIcon from '@mui/icons-material/Settings';
import img from "../../images/profile.png"


export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  handleChange = (event) => {
    this.setState({ isActive: event.target.checked });
  };

  handleSettings = (event) => {
    // alert("hello")
  }

  render() {
    const { isActive } = this.state;
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src={img} alt="profile-logo" />
          </div>
          <span>BIll Bradford <SettingsIcon style={{ cursor: 'pointer' }} onClick={this.handleSettings} fontSize="small" /></span>
          <p>Lead UI/UX Designer</p>
          <div className="profile__status"><Switch checked={isActive} onChange={this.handleChange} size="small" />
            <div>{isActive ? 'Active' : 'Disabled'}</div></div>
        </div>
      </div>
    );
  }
}
