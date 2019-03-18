import React, { Component } from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";

import "../styles/directionsList.css";


class DirectionsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            directionsList: []
        };
    }

    apiURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids="

    apiKey = "95kefuyGhMmsh5fvZ5iUw5IpoleOp1fj6ygjsn2aoaYqg3AJvh"

    hasRun = false

    getDirections() {

        axios.get(this.apiURL + this.props.id, {
            headers: {
                "X-RapidAPI-Key": this.apiKey
            }
        })
            .then(response => {
                // console.log(response.data[0].analyzedInstructions[0].steps)
                this.setState({ directionsList: response.data[0].analyzedInstructions[0].steps })
                this.hasRun = true
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    createList() {
        if (this.hasRun === false) {
            this.getDirections()
        }
        let arr = []
        for (var i = 0; i < this.state.directionsList.length; i++) {
            arr.push(<ListGroup.Item key={i}>
                <h2 className="number">{i + 1}</h2>

                <p>{this.state.directionsList[i]["step"]}</p>
            </ListGroup.Item>)
        }
        return arr
    }

    state = {}
    render() {
        return (

            <div className="directionsGroup" >
                <h5 className="title">Directions</h5>
                < ListGroup variant="flush" >
                    {this.createList()}
                </ListGroup >
            </div>

        );
    }
}

export default DirectionsList;