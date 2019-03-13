import React, { Component } from 'react';
import SplitText from "react-pose-text";

import "../styles/home.css"

const charPoses = {
    exit: {
        opacity: 0,
        x: "-100%"
    },
    enter: {
        opacity: 1,
        x: "0%",
        beforeChildren: true,
        staggerChildren: 50
    }
}

class Slogan extends Component {
    constructor(props) {
        super(props);
        this.state = { modalVisible: false };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ modalVisible: true });
        }, 1000);
    }

    render() {
        return (
            <div initialPose="enter" pose="exit">

                <p className="slogan">
                    <SplitText charPoses={charPoses} pose={this.state.modalVisible ? "enter" : "exit"}>Sustainable eating made easy. Evaluate your meal's ecological impact.</SplitText>
                </p>
            </div>
        );
    }
}

export default Slogan;