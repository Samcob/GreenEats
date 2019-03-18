// Large Result Card Component
import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

import "../styles/largeResultCard.css";

class LargeResultCard extends Component {
    state = {}

    render() {
        return (
            <div className="LargeResultCard">
                <Link to={{
                    pathname: "/recipe",
                    search: "?",
                    state: this.props
                }}>
                    <Card bg="#F7F1F1">
                        <Card.Title className="p-2">
                            {this.props.recipeTitle}
                        </Card.Title>
                        <div class="stats">
                            <div class="stat"><strong>EcoScore | </strong>{this.props.ecoScore}</div>
                            <div class="spacing"></div>
                            <div class="stat"><strong>Price | </strong>{this.props.price}</div>
                            <div class="spacing"></div>
                            <div class="stat"><strong>Time | </strong>{this.props.time}</div>
                        </div>
                        <Card.Body>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Img className="cardImage" variant="bottom" src={this.props.recipeImage} />
                    </Card>
                </Link>
            </div >
        );
    }
}

export default LargeResultCard;