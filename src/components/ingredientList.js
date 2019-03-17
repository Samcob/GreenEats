import React, { Component } from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import alertIcon from "../styles/Images/alertIcon.png";
import axios from "axios";

import Popup from "../components/popup.js";

import "../styles/ingredientList.css";

class IngredientList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            ingredientsList: []
        };
    }

    apiURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"

    apiKey = "95kefuyGhMmsh5fvZ5iUw5IpoleOp1fj6ygjsn2aoaYqg3AJvh"

    hasRun = false

    getIngredients() {

        axios.get(this.apiURL + this.props.id + "/information", {
            headers: {
                "X-RapidAPI-Key": this.apiKey
            }
        })
            .then(response => {
                this.setState({ ingredientsList: response.data.extendedIngredients })
                this.hasRun = true
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    createList() {
        if (this.hasRun === false) {
            this.getIngredients()
        }
        let arr = []
        for (var i = 0; i < this.state.ingredientsList.length; i++) {
            arr.push(<ListGroup.Item key={i}>{this.state.ingredientsList[i]["originalString"]}</ListGroup.Item>)
        }
        return arr
    }

    render() {
        // let modalClose = () => this.setState({ modalShow: false });

        return (
            < div className="ingredients" >
                < ListGroup variant="flush" >
                    {this.createList()}
                </ListGroup >



                {/*  <ListGroup.Item variant="danger" action
                        onClick={() => this.setState({ modalShow: true })}
                    >
                        1lb of Lamb
                    <img src={alertIcon} alt="alert"></img>
                    </ListGroup.Item>

                {/* <Popup
                    show={this.state.modalShow}
                    onHide={modalClose}
                /> */}

            </div >
        );
    }
}

export default IngredientList;