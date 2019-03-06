import React, { Component } from 'react';
import photo from "../styles/Images/BackgroundPhotoHorizontal.jpg";

import "../styles/recipe.css";

class Recipe extends Component {
    state = {}
    render() {
        return (
            <div className="App">
                <img className="headerImage" src={photo} alt="Recipe Header"></img>
            </div>
        );
    }
}

export default Recipe;