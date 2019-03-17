import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "../styles/smallResultCard.css";


class SmallResultCard extends Component {
    state = {}
    render() {
        return (
            <div class="smallCard">
                <Link to={{
                    pathname: "/recipe",
                    search: "?",
                    state: this.props
                }}>

                    <img className="cardImage" src={this.props.recipeImage} alt="icon"></img>
                    <p className="recipeName">{this.props.recipeTitle}</p>

                    <div class="stats">
                        <div class="stat"><strong>EcoScore | </strong>{this.props.ecoScore}</div>

                        <div class="stat"><strong>Price | </strong>{this.props.price}</div>
                        <div class="stat"><strong>Time | </strong>{this.props.time}</div>
                    </div>
                </Link>
            </div>
        )

    }

}

export default SmallResultCard;