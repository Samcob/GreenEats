import React, { Component } from 'react';
import "../styles/topHeader.css";

class TopHeader extends Component {
    state = {}
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <a href="homepage.html"><img src="./Images/headerLogo.png" alt="Green Eats" height="45px"></img></a>
                </header>
            </div>
        );
    }
}

export default TopHeader;