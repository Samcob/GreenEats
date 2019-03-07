import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

class Popup extends Component {
    state = {}

    render() {
        let ingredient = "1lb of lamb";
        let bIngredient1 = "1 can of black beans";
        let bIngredient2 = "Tofu";
        var newIngredients = [{ bIngredient1 }, { bIngredient2 }];

        // function genList(ingredient) {
        //     return (
        //         <ListGroup.Item>
        //             {ingredient}
        //         </ListGroup.Item>
        //     )
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

                    <ListGroup variant="flush">
                        {/* <ListGroup.Item>
                            {bIngredient1}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {bIngredient2}
                        </ListGroup.Item> */}

                        {newIngredients.forEach(function genList(ingredient) {
                            return genList(ingredient)
                        })
                        }
                    </ListGroup>

                    {/* <div className="clearOption">
                        <Button variant="danger">Clear</Button>
                        <p>-3 EcoScore</p>
                    </div>
                    <div className="divider">
                        <h6>Other options:</h6>

                    </div>
                    <div className="otherOption">
                        <Button variant="success">Save</Button>
                    </div> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default Popup;