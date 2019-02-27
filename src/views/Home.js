import React, { Component } from 'react';

import LargeResultCard from "../components/largeResultCard";
import BottomNavbar from "../components/bottomNavbar";
import TopHeader from "../components/TopHeader";

//import '../styles/global.css';
import "../styles/home.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Home extends Component {
    render() {
        // const { classes } = this.props;
        // const { value } = this.state;
        return (
            <div className="App">

                <TopHeader />

                <div class="imgbox" title="Cover Photo of Veggie Omelette">
                    <div class="searchSection">
                        <p class="landingSearch"> Search for food or paste recipe link</p>
                        <form>

                            <div class="searchBar">

                                <input class="submit" type="image" src="./Images/greySearch.png" alt="Search" />
                                <input class="type" type="text" name="name" />

                            </div>

                        </form>

                        <p class="slogan"> Sustainable eating made easy. Evaluate your meal's ecological impact.</p>

                    </div>

                </div>

                <BottomNavbar />


                {/*Page Content*/}

                <h2 class="ourPicks pl-1 mb-5"> Our picks of the day</h2>

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