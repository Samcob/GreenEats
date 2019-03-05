import React, { Component } from 'react';

import LargeResultCard from "../components/largeResultCard";
import Slogan from "../components/slogan";
import posed from "react-pose";
import SplitText from "react-pose-text";

import "../styles/home.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// const charPoses = {
//     exit: {
//         opacity: 0,
//         x: "-100%"
//     },
//     enter: {
//         opacity: 1,
//         x: "0%",
//         beforeChildren: true,
//         staggerChildren: 50
//     }
// }

class Home extends Component {
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
            <div className="App">

                <div class="imgbox" title="Cover Photo of Veggie Omelette">
                    <div class="searchSection">

                        <p class="landingSearch"> Search for food or paste recipe link</p>
                        <form>
                            <div class="searchBar">

                                <input class="submit" type="image" src="./Images/greySearch.png" alt="Search" />
                                <input class="type" type="text" name="name" />

                            </div>
                        </form>

                        <div initialPose="enter" pose="exit">
                            <Slogan pose={this.state.modalVisible ? "enter" : "exit"} />
                        </div>
                        {/* <div initialPose="enter" pose="exit">

                            <p className="slogan">
                                <SplitText charPoses={charPoses} pose={this.state.modalVisible ? "enter" : "exit"}>Sustainable eating made easy. Evaluate your meal's ecological impact.</SplitText>
                            </p>
                        </div> */}

                    </div>

                </div>

                {/*Page Content*/}

                <h2 class="ourPicks pl-1 mb-5"> Our Favorite Picks For Today!</h2>

                <Container>
                    <Row>
                        <Col className="columns" sm={12} md={6} lg={4}>
                            <h5 class="pickTitles">Breakfast</h5>
                            <LargeResultCard />
                        </Col>
                        <Col className="columns" sm={12} md={6} lg={4}>
                            <h5 class="pickTitles">Lunch</h5>
                            <LargeResultCard />
                        </Col>
                        <Col className="columns" sm={12} md={6} lg={4}>
                            <h5 class="pickTitles">Dinner</h5>
                            <LargeResultCard />
                        </Col>
                    </Row>
                </Container>

                <div class="footer"></div>
            </div >
        );
    }
}


export default Home;