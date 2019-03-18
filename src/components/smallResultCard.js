import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import data from "../data/emissionsData.json";

import "../styles/smallResultCard.css";


class SmallResultCard extends Component {
    state = {
        id: this.props.id,
        ecoScore: this.props.ecoScore,
        ingredientsList: []
    }

    averageCarbon = 105.6;

    range = 4000;

    apiURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"

    apiKey = "95kefuyGhMmsh5fvZ5iUw5IpoleOp1fj6ygjsn2aoaYqg3AJvh"

    hasRun = false

    ecoScore = ""

    totalCarbon = 0

    componentDidMount() {

        axios.get(this.apiURL + this.props.id + "/information", {
            headers: {
                "X-RapidAPI-Key": this.apiKey
            }
        })
            .then(response => {
                this.setState({ ingredientsList: response.data.extendedIngredients })

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    compare(data) {
        //change recipe ingredient to all caps
        //Sort through cscv titles to search for a match
        //if match found, grab CO2 number and add it to ecoScore
        //if no match found, add average and move to the next ingredient***
        //return totalCarbon
        //csv 

        var totalCarbon = 0;
        for (var i = 0; i < this.state.ingredientsList.length; i++) {
            var ingredient = this.state.ingredientsList[i]["name"].toUpperCase()
            totalCarbon = totalCarbon + this.averageCarbon
            for (var k = 0; k < data.length; k++) {
                if (ingredient.includes(data[k]["Food"])) {
                    totalCarbon = totalCarbon + data[k]["g CO2"] - this.averageCarbon
                }
            }
        }
        return totalCarbon;

    }

    convert(totalCarbon) {
        var temp = (totalCarbon / this.range) * 100
        if (temp <= 20) {
            return "5/5";
        } else if (temp > 20 && temp <= 40) {
            return "4/5";
        } else if (temp > 40 && temp <= 60) {
            return "3/5";
        } else if (temp > 60 && temp <= 80) {
            return "2/5";
        } else if (temp > 80 && temp <= 100) {
            return "1/5";
        }
    }

    render() {
        if (this.state.ingredientsList.length > 1) {
            this.totalCarbon = this.compare(data)
        }
        this.ecoScore = this.convert(this.compare(data))

        return (

            <div class="smallCard">
                <Link to={{
                    pathname: "/recipe",
                    search: "?",
                    state: this.props, ecoScore: this.ecoScore
                }}>

                    <img className="cardImage" src={this.props.recipeImage} alt="icon"></img>
                    <p className="recipeName">{this.props.recipeTitle}</p>

                    <div className="stats">
                        <div className="stat"><strong>EcoScore | </strong>{this.ecoScore}</div>

                        <div className="stat"><strong>Price | </strong>{this.props.price}</div>
                        <div className="stat"><strong>Time | </strong>{this.props.time}</div>
                    </div>
                </Link>
            </div>
        )

    }

}

export default SmallResultCard;