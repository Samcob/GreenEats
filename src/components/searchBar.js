import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

import "../styles/searchBar.css";

class SearchBar extends Component {
    state = {
        searchPhrase: ""
    }

    render() {
        return (
            <Form className="searchBar">
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <Link to={{
                                pathname: "/results",
                                state: this.state,
                            }}>
                                <Button variant="secondary">
                                    Search
                                </Button>
                            </Link>
                        </InputGroup.Prepend>
                        <Form.Control
                            onChange={(e) => this.setState({ searchPhrase: e.target.value })}
                            type="text"
                            placeHolder="search for a recipe"
                        // onKeyPress={(e) => { if (e.target.charCode === "13") { console.log("yoooooo") } }} 
                        />
                    </InputGroup>
                </FormGroup>
            </Form>
        );
    }
}

export default SearchBar;