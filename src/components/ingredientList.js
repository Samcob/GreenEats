import React, { Component } from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import alertIcon from "../styles/Images/alertIcon.png";

import "../styles/ingredientList.css";

class IngredientList extends Component {
    render() {
        return (
            <div>
                {/*make into a for loop that generates list*/}
                <ListGroup variant="flush">
                    <ListGroup.Item>2 cans of chickpeas</ListGroup.Item>
                    <ListGroup.Item>2 cups of basmati rice</ListGroup.Item>
                    <ListGroup.Item>1 large onion
                    </ListGroup.Item>
                    <ListGroup.Item>Kosher salt and freshly ground black pepper</ListGroup.Item>
                    <ListGroup.Item>2 cloves garlic, chopped</ListGroup.Item>
                    <ListGroup.Item>1 cup vegetable stock</ListGroup.Item>
                    <ListGroup.Item variant="danger" action>1lb of Lamb
                    <img src={alertIcon} alt="alert"></img></ListGroup.Item>
                    <ListGroup.Item>One cup of coconut milk</ListGroup.Item>
                    <ListGroup.Item>4 tablespoons curry spice</ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}

export default IngredientList;