import React, { Component } from 'react';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import SearchBar from "../components/searchBar";
import axios from "axios";

import SmallResultCard from "../components/smallResultCard";
import SearchToBegin from "../styles/Images/searchToBegin.jpg";


import "../styles/results.css"

class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentProps: this.props.location.state,
            results: {}
        }
    }

    apiURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"

    apiKey = "95kefuyGhMmsh5fvZ5iUw5IpoleOp1fj6ygjsn2aoaYqg3AJvh"

    isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    newSearch() {
        if (this.isEmpty(this.props.location.state) === true && this.isEmpty(this.state.results) === true) {
            return <img className="searchPrompt" src={SearchToBegin} alt="search to begin" />
        }
    }

    recipeSearch() {
        let number = "number=15"
        let type = "&type=main+course"
        let call = "/recipes/search?"
        let query = "&query=" + this.props.location.state.searchPhrase

        axios.get(this.apiURL + call + number + type + query, {
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
        if (this.isEmpty(this.props.location.state) === false && Object.keys(this.state.results).length < 1) {
            this.recipeSearch()
        }
        var i
        var arr = []
        let imgURL = "https://spoonacular.com/recipeImages/"
        for (i = 0; i < this.state.results.length; i++) {
            arr.push(<SmallResultCard key={i} recipeTitle={this.state.results[i].title} recipeImage={imgURL + this.state.results[i].id + "-240x150.jpg"}
                time={this.state.results[i].readyInMinutes + " Minutes"} price="$$" id={this.state.results[i].id} />)
        }
        return arr;
    }

    render() {

        return (

            <div class="results">
                <div class="searchbar">
                    <p className="label">Search for food or paste recipe link</p>

                    <SearchBar />
                </div>
                <div className="filters">
                    <h5 className="resultsTitle">Results</h5>
                    <div className="sortFilters">
                        <p className="sort"> Sort By|</p>
                        <ButtonToolbar>
                            <ToggleButtonGroup type="checkbox" defaultValue={1}>
                                <ToggleButton value={1} variant="success">EcoScore</ToggleButton>
                                <ToggleButton value={2} variant="success">Price</ToggleButton>
                                <ToggleButton value={3} variant="success">Time</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                    </div>
                </div>

                {this.newSearch()}

                <div className="resultList">
                    {this.createList()}
                </div>
            </div>


        );
    }
}

export default Results;