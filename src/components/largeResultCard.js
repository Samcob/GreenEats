// Large Result Card Component
import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import "../styles/largeResultCard.css"

class LargeResultCard extends Component {
    state = {}
    render() {
        return (
            <div className="App">

                <Card bg="#F7F1F1">
                    <Card.Title className="p-2">
                        Recipe
                    </Card.Title>
                    <Card.Subtitle className="stats mb-4">
                        <div class="ecoScore"><strong>EcoScore:</strong> 51g CO2</div>
                        <div class="price"><strong>Price:</strong> $$</div>
                        <div class="time"><strong>Time:</strong> 32 mins</div>
                    </Card.Subtitle>
                    <Card.Body>
                        <Card.Text>
                            This is where the text will go that describes each recipe.  Above will be the price, time, and ecoscore associated with each recipe.
                        </Card.Text>
                    </Card.Body>
                    <Card.Img className="cardImage" variant="bottom" src="./Images/PhotoBackgroundHorizontal.jpg" />
                </Card>
            </div >
        );
    }
}

export default LargeResultCard;