import React, { Component } from 'react';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import SearchBar from "../components/searchBar";
import axios from "axios";

import "../styles/results.css"

import SmallResultCard from "../components/smallResultCard";

class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentProps: props.location.state,
            results: {}
        }
    }

    apiURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"

    apiKey = "95kefuyGhMmsh5fvZ5iUw5IpoleOp1fj6ygjsn2aoaYqg3AJvh"

    recipeSearch() {
        let number = "number=15"
        let call = "/recipes/search?"
        let query = "query=" + this.props.location.state


        axios.get(this.apiURL + call + number + "&" + query, {
            headers: {
                "X-RapidAPI-Key": this.apiKey
            }
        })
            .then(response => {
                this.setState({ results: response.data.results })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    createList() {
        if (Object.keys(this.state.results).length === 0) {
            this.recipeSearch()
        }
        console.log(this.state.results)
        var i
        var arr = []
        let imgURL = "https://spoonacular.com/recipeImages/"
        for (i = 0; i < this.state.results.length; i++) {
            arr.push(<SmallResultCard key={i} recipeName={this.state.results[i].title} recipeImage={imgURL + this.state.results[i].id + "-240x150.jpg"}
                ecoScore="5/5" time={this.state.results[i].readyInMinutes + " Minutes"} price="$$"
                description="This omelette is so yummy, I make it all the time! It's loaded with healthy veggies." />)
        }
        return arr;
    }

    render() {

        return (
            <div class="results">
                <div class="searchbar">
                    <SearchBar />
                </div>
                <div class="filters">
                    <h5 class="resultsTitle">Results</h5>
                    <div class="sortFilters">
                        <p class="sort"> Sort By|</p>
                        <ButtonToolbar>
                            <ToggleButtonGroup type="checkbox" defaultValue={1}>
                                <ToggleButton value={1} variant="success">EcoScore</ToggleButton>
                                <ToggleButton value={2} variant="success">Price</ToggleButton>
                                <ToggleButton value={3} variant="success">Time</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                    </div>
                </div>
                <div class="resultList">
                    {console.log(this.props.location.state)}
                    {this.createList()}

                </div>

            </div>


        );
    }
}

export default Results;