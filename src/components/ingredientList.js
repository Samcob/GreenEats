import React, { Component } from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import alertIcon from "../styles/Images/alertIcon.png";

import Popup from "../components/popup.js";

import "../styles/ingredientList.css";

class IngredientList extends Component {
    constructor(props) {
        super(props);

        this.state = { modalShow: false };
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <div className="ingredientsGroup">
                {/*make into a for loop that generates list*/}
                <h5 className="title">Ingredients</h5>
                <ListGroup variant="flush">
                    <ListGroup.Item>2 cans of chickpeas</ListGroup.Item>
                    <ListGroup.Item>2 cups of basmati rice</ListGroup.Item>
                    <ListGroup.Item>1 large onion
                    </ListGroup.Item>
                    <ListGroup.Item>Kosher salt and freshly ground black pepper</ListGroup.Item>
                    <ListGroup.Item>2 cloves garlic, chopped</ListGroup.Item>
                    <ListGroup.Item>1 cup vegetable stock</ListGroup.Item>

                    <ListGroup.Item variant="danger" action
                        onClick={() => this.setState({ modalShow: true })}
                    >
                        1lb of Lamb
                    <img src={alertIcon} alt="alert"></img>
                    </ListGroup.Item>

                    <ListGroup.Item>One cup of coconut milk</ListGroup.Item>
                    <ListGroup.Item>4 tablespoons curry spice</ListGroup.Item>
                </ListGroup>

                <Popup
                    show={this.state.modalShow}
                    onHide={modalClose}
                />

            </div >
        );
    }
}

export default IngredientList;