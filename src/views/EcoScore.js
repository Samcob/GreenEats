import React, { Component } from 'react';
import photo from "../styles/Images/PhotoBackgroundHorizontal.jpg";

class EcoScore extends Component {
    state = {}
    render() {
        return (
            <div>
                <p>EcoScore Page</p>
                <img src={photo} alt="test"></img>
            </div>
        );
    }
}

export default EcoScore;