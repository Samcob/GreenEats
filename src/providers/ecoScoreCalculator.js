import React, { Component } from 'react';
import axios from "axios";
import data from "../data/emissionsData.json";

class EcoScoreCalculator extends Component {
    state = {
        ingredientsList: []
    }

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

    averageCarbon = 105.6;

    range = 4000;

    apiURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"

    apiKey = "95kefuyGhMmsh5fvZ5iUw5IpoleOp1fj6ygjsn2aoaYqg3AJvh"

    hasRun = false

    totalCarbon = 0

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
        var string = this.convert(this.totalCarbon)
        return string;

    }
}

export default EcoScoreCalculator;