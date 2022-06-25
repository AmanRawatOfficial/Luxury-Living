import React from "react";
import { Link } from "react-router-dom";

import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";

import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <Link className="none" to="/">
                <h2 className="navbar_logo">LuxuryLiving</h2>
            </Link>

            <div className="navbar_icons_container">
                <Link className="none navbar_home" to="/">
                    <IoHomeOutline className="navbar_icons" />
                </Link>
                <IoChatboxEllipsesOutline className="navbar_icons display" />
                <IoGlobeOutline className="navbar_icons display" />
                <IoVideocamOutline className="navbar_icons display" />
            </div>
        </nav>
    );
}

export default Navbar;
