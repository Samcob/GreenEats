import React, { Component } from 'react';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import "../styles/results.css"

import SmallResultCard from "../components/smallResultCard";

class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentProps: props.location.state,
        }
        console.log(props)
    }

    render() {

        function createList(amount) {
            var i;
            var arr = []
            for (i = 0; i < amount; i++) {
                arr.push(<SmallResultCard recipeTitle="Veggie Omlette" recipeImage="./Images/veggieOm.jpg"
                    ecoScore="5/5" time="30 Minutes" price="$$"
                    description="This omelette is so yummy, I make it all the time! It's loaded with healthy veggies." />)
            }
            return arr;
        }

        return (
            <div class="results">
                <div class="searchbar">Search Bar</div>
                <div class="filters">
                    <ButtonToolbar>
                        <ToggleButtonGroup type="checkbox" defaultValue={1}>
                            <ToggleButton value={1} variant="success">EcoScore</ToggleButton>
                            <ToggleButton value={2} variant="success">Price</ToggleButton>
                            <ToggleButton value={3} variant="success">Time</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </div>

                <div class="resultList">

                    {createList(15)}

                </div>

            </div>


        );
    }
}

export default Results;