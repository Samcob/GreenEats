import React, { Component } from 'react';
import IngredientList from "../components/ingredientList";
import DirectionsList from "../components/directionsList";

import RecipeGetter from "../producers/recipeGetter";

import "../styles/recipe.css";

class Recipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentProps: props.location.state,
        }
        console.log(props)
    }

    render() {

        return (
            <div className="Recipe">
                <br />
                <br />
                <img className="headerImage" src={this.props.location.state.recipeImage} alt="Recipe Header"></img>
                <div className="recipeContent">
                    <h2 className="recipeTitle">{this.props.location.state.recipeTitle}</h2>

                    <div className="recipeInfo">

                        <div className="ecoScore"><strong>EcoScore: </strong> {this.props.location.state.ecoScore}</div>

                        <div className="price"><strong>Price: </strong>{this.props.location.state.price}</div>

                        <div className="time"><strong>Time: </strong>{this.props.location.state.time}}</div>

                        <div className="calories"><strong>Calories: </strong> 200 <i>(per serving)</i></div>

                    </div>

                    <p className="description">{this.props.location.state.description}</p>

                    <h5 className="title">Ingredients</h5>

                    <IngredientList />

                    <h5 className="title">Directions</h5>

                    <DirectionsList />
                </div>

                <div className="footer"></div>
            </div>
        );
    }
}

export default Recipe;