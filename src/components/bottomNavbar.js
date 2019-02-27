// Bottom Navigation Bar Component
import React, { Component } from 'react';

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
                <a href="issues.html"> <img src={issuesIcon} alt="issues" height="45px" /></a>
                <a href="ecotips.html"><img src={ecoTipsIcon} alt="Eco Tips" height="45px" /></a>
                <a href="search.html"><img src={searchIcon} alt="Search" height="45px" /></a>
                <a href="ecoscore.html"><img src={ecoScoreIcon} alt="Eco Score" height="45px" /></a>
            </nav>
        );
    }
}

export default BottomNavbar;