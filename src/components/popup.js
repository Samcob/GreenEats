import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

class Popup extends Component {
    state = {}

    // genList = (newIngredients) => {
    //     return newIngredients.map(ingredient => (
    //         <ListGroup.Item>
    //             {ingredient}
    //         </ ListGroup.Item>
    //     ));
    // }

    render() {
        let ingredient = "1lb of lamb";
        let bIngredient1 = "1 can of black beans";
        let bIngredient2 = "Tofu";
        var newIngredients = [{ bIngredient1 }, { bIngredient2 }];

        // function genList(newIngredients) {
        //     var listItems = []
        //     var i;

        //     for (i = 0; i < newIngredients.length(); i++) {
        //         listItems.push(
        //             <ListGroup.Item>
        //                 {newIngredients[i]}
        //             </ListGroup.Item>
        //         )
        //     }

        //     return listItems;
        // }

        return (

            <Modal
                {...this.props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        EcoScore Substitutes Found!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 className="mb-3">Replace {ingredient} with:</h4>

                    {/* <ListGroup variant="flush">
                        {genList(newIngredients)}
                    </ListGroup> */}

                    <div className="otherOption">
                        <Button variant="success">Save</Button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal >
        );
    }
}

export default Popup;