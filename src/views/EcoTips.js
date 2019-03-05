import React, { Component } from 'react';
import photo from "../styles/Images/PhotoBackgroundHorizontal.jpg";

class EcoTips extends Component {
    state = {}
    render() {
        return (
            <div>
                <p>EcoTips Page</p>
                <img src={photo} alt="test"></img>
            </div>
        );
    }
}

export default EcoTips;