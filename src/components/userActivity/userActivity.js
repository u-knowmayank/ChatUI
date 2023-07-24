import React, { useState } from "react";
import "./userActivity.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

const UserProfile = () => {
    const [isActive, setIsActive] = useState(false);

    const handleChange = (event) => {
        setIsActive(event.target.checked);
    };

    const handleSettings = () => {
        // alert("hello")
    }

    return (
        <div className="main_userActivity">
            <div className="activity_card">
                <div className="image"> <AccountCircleIcon style={{ width: "110px", height: "4em" }} /></div>
                <div className="details_main">
                    <div className="userDetails"> <MailOutlineIcon fontSize="small" />
                        <p>tim_hover@gmail.com</p></div>
                    <div className="userDetails"> <AccountCircleOutlinedIcon fontSize="small" />
                        <p style={{ display: "inline" }}>Tim Hover</p></div>
                </div>
                <div className="image">
                    <button class="button-with-outline">Archive <ArchiveOutlinedIcon fontSize="small" /></button>
                </div>

            </div>
        </div>
    );
};

export default UserProfile;
