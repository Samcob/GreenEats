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
                <Link to="/issues">
                    <img src={issuesIcon} alt="issues" height="45px" />
                </Link>
                <Link to="/ecoTips">
                    <img src={ecoTipsIcon} alt="EcoTips" height="45px" />
                </Link>
                <Link to="/results">
                    <img src={searchIcon} alt="Search" height="45px" />
                </Link>
                <Link to="/ecoScore">
                    <img src={ecoScoreIcon} alt="ecoScore" height="45px" />
                </Link>
                {/* <a href="issues.html"> <img src={issuesIcon} alt="issues" height="45px" /></a> */}
                {/* <a href="ecotips.html"><img src={ecoTipsIcon} alt="Eco Tips" height="45px" /></a> */}
                {/* <a href="search.html"><img src={searchIcon} alt="Search" height="45px" /></a>
                <a href="ecoscore.html"><img src={ecoScoreIcon} alt="Eco Score" height="45px" /></a> */}
            </nav>
        );
    }
}

export default BottomNavbar;