import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

class Popup extends Component {
    state = {
        listItems: ["1 can of black beans", "Tofu"],
        ingredient: "1lb of lamb",
        newIngredient: ""
    }

    render() {

        // function saveAndReplace(newIngredient, props) {
        //     this.setState({ ingredient: newIngredient });

        // }

        let hide = "this.state.onHide"

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
                    <h3 className="mb-3">Replace {this.state.ingredient} with:</h3>

                    <ListGroup variant="flush">
                        {this.state.listItems.length > 0 &&
                            this.state.listItems.map((item, i) => (
                                <ListGroup.Item key={i} action onClick={() => this.setState({ newIngredient: item })}>
                                    {item}
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>

                    {console.log(this.state.ingredient)}
                    {console.log(this.state.newIngredient)}

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.onHide}>Close</Button>

                        <Button variant="success" onClick={() => { this.setState({ ingredient: this.state.newIngredient }) }}>Replace</Button>
                    </Modal.Footer>
                </Modal.Body>

            </Modal >
        );
    }
}

export default Popup;