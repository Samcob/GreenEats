import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import "../styles/smallResultCard.css";


class SmallResultCard extends Component {
    state = {
        id: this.props.id
    }
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
                    <div className="ecoScore"><strong>EcoScore: </strong> {this.props.ecoScore}</div>
                    <div className="price"><strong>Price: </strong>{this.props.price}</div>
                    <div className="time"><strong>Time: </strong>{this.props.time}</div>
                </Link>
            </div>
        )

    }

}

export default SmallResultCard;