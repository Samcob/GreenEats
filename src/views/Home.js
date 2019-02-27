import React, { Component } from 'react';
//import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import '../styles/global.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// const styles = {
// }

class Home extends Component {
    render() {
        // const { classes } = this.props;
        // const { value } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <a href="homepage.html"><img src="./Images/headerLogo.png" alt="Green Eats" height="45px"></img></a>
                </header>

                <div class="imgbox" title="Cover Photo of Veggie Omelette">
                    <div class="searchSection">

                        <p class="landingSearch"> Search for food or paste recipe link</p>
                        <form>
                            <div class="searchBar">

                                <input class="submit" type="image" src="./Images/Slice.png" alt="Search" />
                                <input class="type" type="text" name="name" />
                            </div>

                        </form>
                        <p class="slogan"> Sustainable eating made easy. Evaluate your meal's ecological impact.</p>

                    </div>
                </div>


                {/* ********************  EVENTUALLY WE NEED TO PUT THIS INTO ITS OWN COMPONENT ************************ */}

                <nav class="navBar">
                    <a href="issues.html"> <img src="./Images/issuesLogo.png" alt="issues" height="45px" /></a>
                    <a href="ecotips.html"><img src="./Images/ecoTipsLogo.png" alt="Eco Tips" height="45px" /></a>
                    <a href="search.html"><img src="./Images/searchLogo.png" alt="Search" height="45px" /></a>
                    <a href="ecoscore.html"><img src="./Images/ecoScoreLogo.png" alt="Eco Score" height="45px" /></a>
                </nav>

                {/* ********************  EVENTUALLY WE NEED TO PUT THIS INTO ITS OWN COMPONENT ************************ */}

                <h2 class="ourPicks"> Our picks of the day</h2>

                <Container>
                    <Row>
                        <Col className="yellow">
                            Breakfast
                        </Col>
                        <Col>
                            Lunch
                         </Col>
                        <Col>
                            Dinner
                        </Col>
                    </Row>
                </Container>

                <div class="footer"></div>
            </div >
        );
    }
}


export default Home;