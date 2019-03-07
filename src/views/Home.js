import React, { Component } from 'react';

import LargeResultCard from "../components/largeResultCard";
import Slogan from "../components/slogan";

import "../styles/home.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends Component {

    render() {

        return (
            <div className="Home">

                <div className="imgbox" title="Cover Photo of Veggie Omelette">
                    <div className="searchSection">

                        <p className="landingSearch"> Search for food or paste recipe link</p>
                        <form>
                            <div className="searchBar">

                                <input className="submit" type="image" src="./Images/greySearch.png" alt="Search" />
                                <input className="type" type="text" name="name" />

                            </div>
                        </form>

                        <Slogan />
                        {/* <p className="slogan">
                            Sustainable eating made easy. Evaluate your meal's ecological impact.
                        </p> */}

                    </div>

                </div>

                {/*Page Content*/}

                <h2 className="ourPicks pl-1 mb-5"> Our Favorite Picks For Today!</h2>

                <Container>
                    <Row>
                        <Col className="columns" sm={12} md={6} lg={4}>
                            <h5 className="pickTitles">Breakfast</h5>
                            <LargeResultCard />
                        </Col>
                        <Col className="columns" sm={12} md={6} lg={4}>
                            <h5 className="pickTitles">Lunch</h5>
                            <LargeResultCard />
                        </Col>
                        <Col className="columns" sm={12} md={6} lg={4}>
                            <h5 className="pickTitles">Dinner</h5>
                            <LargeResultCard />
                        </Col>
                    </Row>
                </Container>

                <div className="footer"></div>
            </div >
        );
    }
}


export default Home;