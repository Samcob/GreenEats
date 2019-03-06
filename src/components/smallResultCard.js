import React, { Component } from 'react';
import "../styles/smallResultCard.css";


class SmallResultCard extends Component {
    state = {}
    render() {
        return (
            <div class="smallCard">

                <img class="cardImage" src="./Images/smallcard.png" alt="icon"></img>
                <p>Recipe Name </p>
                <div class="ecoScore"><strong>EcoScore:</strong> 51g CO2</div>
                <div class="price"><strong>Price:</strong> $$</div>
                <div class="time"><strong>Time:</strong> 32 mins</div>

            </div>
        )

    }

}

export default SmallResultCard;