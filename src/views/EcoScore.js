import React, { Component } from 'react';
import "../styles/ecoScore.css";
import Button from 'react-bootstrap/Button'
import EcoScoreHeader from "../styles/Images/EcoScoreHeader.png";
import Adding from "../styles/Images/adding.png";
import Percentile from "../styles/Images/percentile.png";
import Percentile2 from "../styles/Images/percentile2.png";
import ecoScore from "../styles/Images/ecoScore.png";



class EcoScore extends Component {
    state = {}
    render() {
        return (
            <div class="ecoscore">
                <img src={EcoScoreHeader} alt="EcoScore Header" height="200px"></img>
                <div class="overview">
                    <h5 className="title">Overview</h5>
                    <p className="text">The EcoScore evaluates the ecological impact of a recipe based on the carbon
                      footprint per serving of its ingredients. The data used to evaluate this score
                      comes from an open source data set called “Carbon Emissions per Serving and per Calorie”
                    published in 2012 and can be found here:</p>

                    <Button className="dataLink" href="https://opendata.socrata.com/dataset/Carbon-Emissions-per-Serving-and-per-Calorie/8nz9-yn2p" target="_blank">Go to DataSet</Button>

                    <p>
                        At the moment, there is little data available about the carbon footprint of individual
                        food items; however this is an active area of research and we expect have access to more
                 comprehensive data sets in the future.</p>
                </div>

                <div class="calculation">
                    <h5 className="title">How its calulated</h5>
                    <p className="text">The carbon footprint of each ingredient in a recipe is added up to find the total
                        carbon footprint of that recipe.</p>
                    <img className="figure" src={Adding} alt="Summation of ingredient carbon footprint" height="291px"></img>
                    <p className="text">The total carbon footprint is then evaluated on an arbitrary scale from 250g of CO2,
                     which represents a recipe with a really low carbon footprint, and 4250g of CO2, which represents a recipe
                    with a really high carbon footprint.</p>
                    <img className="figure" src={Percentile} alt="Percentile Scale" height="126px"></img>
                    <p className="text">The percentiles are inversely mapped to the EcoScore.</p>
                    <img className="figure" src={Percentile2} alt="Scale to EcoScore Conversion" height="190px" ></img>
                    <p className="text">Finally, the recipe’s ecological impact is represented with the EcoScore.</p>
                    <img className="figure" src={ecoScore} alt="EcoScore Scale" height="147px" ></img>
                    <div className="footer"></div>

                </div>
            </div>
        );
    }
}

export default EcoScore;