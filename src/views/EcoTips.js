import React, { Component } from 'react';
import photo from "../styles/Images/RecipeHeaderPhoto.jpg";
import IngredientList from "../components/ingredientList";
import DirectionsList from "../components/directionsList";

import "../styles/recipe.css";

class Recipe extends Component {
    state = {}
    render() {
        return (
            <div className="App">
                <br />
                <br />
                <h3>Individual Recipe Page (as results is currently not working)</h3>

                <img className="headerImage" src={photo} alt="Recipe Header"></img>

                <div className="recipeContent">
                    <h2 className="recipeTitle">Chickpea Curry</h2>

                    <div className="recipeInfo">

                        <div className="ecoScore"><strong>EcoScore:</strong> 51g CO2</div>

                        <div className="price"><strong>Price:</strong> $$</div>

                        <div className="time"><strong>Time:</strong> 32 mins</div>

                        <div className="calories"><strong>Calories:</strong> 200 <i>(per serving)</i></div>

                    </div>

                    <p className="description">Made with convenient canned beans, this quick and healthy Indian recipe is an authentic chickpea curry that you can make in minutes. If you want an additional vegetable, stir in some roasted cauliflower florets. Serve with brown basmati rice or warm naan.</p>

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