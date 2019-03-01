import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../styles/topHeader.css";

class TopHeader extends Component {
    state = {}
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Link to="/">
                        <img src="./Images/headerLogo.png" alt="Green Eats" height="45px"></img>
                    </Link>
                    {/* <a href="homepage.html"><img src="./Images/headerLogo.png" alt="Green Eats" height="45px"></img></a> */}
                </header>
            </div>
        );
    }
}

export default TopHeader;