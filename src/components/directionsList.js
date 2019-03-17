import React, { Component } from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";

import "../styles/directionsList.css";


class DirectionsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            directionsList: []
        };
    }

    apiURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids="

    apiKey = "95kefuyGhMmsh5fvZ5iUw5IpoleOp1fj6ygjsn2aoaYqg3AJvh"

    hasRun = false

    getDirections() {

        axios.get(this.apiURL + this.props.id, {
            headers: {
                "X-RapidAPI-Key": this.apiKey
            }
        })
            .then(response => {
                // console.log(response.data[0].analyzedInstructions[0].steps)
                this.setState({ directionsList: response.data[0].analyzedInstructions[0].steps })
                this.hasRun = true
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    createList() {
        if (this.hasRun === false) {
            this.getDirections()
            console.log(this.state.directionsList)
        }
        let arr = []
        for (var i = 0; i < this.state.directionsList.length; i++) {
            arr.push(<ListGroup.Item key={i}>
                <h2>{i + 1}</h2>
                {this.state.directionsList[i]["step"]}
            </ListGroup.Item>)
        }
        return arr
    }

    state = {}
    render() {
        return (
            <div className="directions" >
                < ListGroup variant="flush" >
                    {this.createList()}
                </ListGroup >
            </div>

            // <ListGroup variant="flush">
            //     <ListGroup.Item>
            //         <h2>1</h2>
            //         <p>Pulse serrano, garlic and ginger in a food processor until minced. Scrape down the sides and pulse again. Add onion; pulse until finely chopped, but not watery.</p>
            //     </ListGroup.Item>
            //     <ListGroup.Item>
            //         <h2>2</h2>
            //         <p>Heat oil in a large saucepan over medium-high heat. Add the onion mixture and cook, stirring occasionally, until softened, 3 to 5 minutes. Add coriander, cumin and turmeric and cook, stirring, for 2 minutes.</p>
            //     </ListGroup.Item>
            //     <ListGroup.Item>
            //         <h2>3</h2>
            //         <p>Pulse tomatoes in the food processor until finely chopped. Add to the pan along with salt. Reduce heat to maintain a simmer and cook, stirring occasionally, for 4 minutes. Add chickpeas and garam masala, reduce heat to a gentle simmer, cover and cook, stirring occasionally, for 5 minutes more. Serve topped with cilantro, if desired.</p>
            //     </ListGroup.Item>
            // </ListGroup>
        );
    }
}

export default DirectionsList;