import React, { Component } from 'react';
import photo from "../styles/Images/PhotoBackgroundVertical.jpg";

class Issues extends Component {
    state = {}
    render() {
        return (
            <div>
                <p>Issues Page</p>
                <img src={photo} alt="test"></img>
            </div>
        );
    }
}

export default Issues;