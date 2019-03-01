// Bottom Navigation Bar Component
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import issuesIcon from "../styles/Images/issuesIcon.png";
import ecoTipsIcon from "../styles/Images/ecoTipsIcon.png";
import searchIcon from "../styles/Images/searchIcon.png";
import ecoScoreIcon from "../styles/Images/ecoScoreIcon.png";

import "../styles/bottomNavbar.css";

class BottomNavbar extends Component {
    state = {}
    render() {
        return (
            <nav class="navBar">
                <Link className="icon" to="/issues">
                    <img src={issuesIcon} alt="issues" height="45px" />
                </Link>
                <Link className="icon" to="/ecoTips">
                    <img src={ecoTipsIcon} alt="EcoTips" height="45px" />
                </Link>
                <Link className="icon" to="/results">
                    <img src={searchIcon} alt="Search" height="45px" />
                </Link>
                <Link className="icon" to="/ecoScore">
                    <img src={ecoScoreIcon} alt="ecoScore" height="45px" />
                </Link>
            </nav>
        );
    }
}

export default BottomNavbar;