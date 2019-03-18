import React, { Component } from 'react';
import IngredientList from "../components/ingredientList";
import DirectionsList from "../components/directionsList";


import "../styles/recipe.css";

class Recipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentProps: props.location.state,
        }
    }

    render() {

        return (
            <div className="recipe">

                <div className="intro">
                    <img className="headerImage" src={this.props.location.state.recipeImage} alt="Recipe Header"></img>
                    <h2 className="recipeTitle">{this.props.location.state.recipeTitle}</h2>
                    {/* <p className="description">{this.props.location.state.description}</p> */}
                </div>

                <div className="recipeInfo">

                    <div className="ecoScore"><strong>EcoScore: </strong> {this.props.location.ecoScore}</div>

                    <div className="price"><strong>Price: </strong>{this.props.location.state.price}</div>

                    <div className="time"><strong>Time: </strong>{this.props.location.state.time}</div>

                    <div className="calories"><strong>Calories: </strong> 200 <i>(per serving)</i></div>

                </div>

                <div className="recipeContent">

                    <IngredientList id={this.props.location.state.id} />

                    <DirectionsList id={this.props.location.state.id} />

                </div>

                <div className="footer"></div>
            </div>
        );
    }
}

export default Recipe;