import React, { Component } from 'react';
import photo from "../styles/Images/PhotoBackgroundVertical.jpg";

class Results extends Component {
    state = {}
    render() {
        return (
            <div>
                <p>Results Page</p>
                <img src={photo} alt="test"></img>
            </div>
        );
    }
}

export default Results;