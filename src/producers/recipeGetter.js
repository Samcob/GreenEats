import React, { Component } from 'react';
import axios from "axios";


class RecipeGetter extends Component {
    state = {
        searchPhrase: "burger"
    }

    // apiURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
    // apiKey = "95kefuyGhMmsh5fvZ5iUw5IpoleOp1fj6ygjsn2aoaYqg3AJvh"
    // number = "number=15"
    // query = "query=" + this.state.searchPhrase
    // //make this this.props.call once we implement that
    // call = "/recipes/search?"
    // results = {}

    // recipes() {
    //     axios.get(this.apiURL + this.call + this.number + "&" + this.query, {
    //         headers: {
    //             "X-RapidAPI-Key": this.apiKey
    //         }
    //     })
    //         // being called twice, have to fix
    //         .then(function (response) {
    //             this.results = response.data.results
    //             console.log(this.results)
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //         })
    // }

    render() {
        let apiURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        let apiKey = "95kefuyGhMmsh5fvZ5iUw5IpoleOp1fj6ygjsn2aoaYqg3AJvh"
        let number = "number=15"
        let call = "/recipes/search?"
        let query = "query=" + this.state.searchPhrase
        let results = {}

        return (
            axios.get(apiURL + call + number + "&" + query, {
                headers: {
                    "X-RapidAPI-Key": apiKey
                }
            })
                // being called twice, have to fix
                .then(function (response) {
                    results = response.data.results
                    console.log(results)
                })
                .catch(function (error) {
                    console.log(error)
                })
        );

    }
}

export default RecipeGetter;