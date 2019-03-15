import React, { Component } from 'react';
import axios from "axios";

import LargeResultCard from "../components/largeResultCard";
import Slogan from "../components/slogan";

import "../styles/home.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends Component {
    state = {
        results: {}
    }
    recipeSearch(searchPhrase) {
        let apiURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        let apiKey = "95kefuyGhMmsh5fvZ5iUw5IpoleOp1fj6ygjsn2aoaYqg3AJvh"
        let number = "number=15"
        let call = "/recipes/search?"
        let query = "query=" + this.state.searchPhrase

        axios.get(apiURL + call + number + "&" + query, {
            headers: {
                "X-RapidAPI-Key": apiKey
            }
        })
            .then(function (response) {
                this.setState({ results: response.data.results })
                console.log(this.state.results)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    // Made new branch

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

                    </div>

                </div>

                {/*Page Content*/}

                {/* ./Images/PhotoBackgroundHorizontal.jpg */}

                <div class="suggestions">


                    <h2 class="ourPicks pl-1 mb-5"> Our Favorite Picks For Today!</h2>

                    <Container fluid={true}>
                        <Row>
                            <Col className="columns" sm={12} md={6} lg={4}>
                                <h5 class="pickTitles">Breakfast</h5>
                                <LargeResultCard recipeTitle="Veggie Omelette" recipeImage="./Images/veggieOm.jpg"
                                    ecoScore="5/5" time="30 Minutes" price="$$"
                                    description="This omelette is so yummy, I make it all the time! It's loaded with healthy veggies." />
                            </Col>
                            <Col className="columns" sm={12} md={6} lg={4}>
                                <h5 class="pickTitles">Lunch</h5>
                                <LargeResultCard recipeTitle="Caprese Sandwhich" recipeImage="./Images/caprese.jpg"
                                    ecoScore="5/5" time="15 Minutes" price="$"
                                    description="In the summer, I usually make a Caprese salad with tomatoes, fresh mozzarella and grilled zucchini..." />
                            </Col>
                            <Col className="columns" sm={12} md={6} lg={4}>
                                <h5 class="pickTitles">Dinner</h5>
                                <LargeResultCard recipeTitle="Stir Fry" recipeImage="./Images/stirfry.jpg"
                                    ecoScore="5/5" time="35 Minutes" price="$$"
                                    description="This tangy stir fry is loaded with delious veggies. It’s so easy to make!" />
                            </Col>
                        </Row>
                    </Container>

                    <div class="footer"></div>

                </div>
            </div >
        );
    }
}


export default Home;