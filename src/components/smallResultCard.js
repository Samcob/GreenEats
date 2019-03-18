import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "../styles/smallResultCard.css";


class SmallResultCard extends Component {
    state = {
        id: this.props.id
    }

    componentDidMount() {
        console.log(this.props.ecoScore)
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

                    <div className="stats">
                        <div className="stat"><strong>EcoScore | </strong>{this.props.ecoScore}</div>

                        <div className="stat"><strong>Price | </strong>{this.props.price}</div>
                        <div className="stat"><strong>Time | </strong>{this.props.time}</div>
                    </div>
                </Link>
            </div>
        )

    }

}

export default SmallResultCard;