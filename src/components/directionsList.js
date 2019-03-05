import React, { Component } from 'react';
import ListGroup from "react-bootstrap/ListGroup";

import "../styles/directionsList.css";

class DirectionsList extends Component {
    state = {}
    render() {
        return (
            <div>
                {/*make into a for loop that generates list*/}
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h2>1</h2>
                        <p>Pulse serrano, garlic and ginger in a food processor until minced. Scrape down the sides and pulse again. Add onion; pulse until finely chopped, but not watery.</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>2</h2>
                        <p>Heat oil in a large saucepan over medium-high heat. Add the onion mixture and cook, stirring occasionally, until softened, 3 to 5 minutes. Add coriander, cumin and turmeric and cook, stirring, for 2 minutes.</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>3</h2>
                        <p>Pulse tomatoes in the food processor until finely chopped. Add to the pan along with salt. Reduce heat to maintain a simmer and cook, stirring occasionally, for 4 minutes. Add chickpeas and garam masala, reduce heat to a gentle simmer, cover and cook, stirring occasionally, for 5 minutes more. Serve topped with cilantro, if desired.</p>
                    </ListGroup.Item>
                </ListGroup>;
            </div>
        );
    }
}

export default DirectionsList;