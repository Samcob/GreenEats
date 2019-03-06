import React, { Component } from 'react';

import "../styles/results.css"

import SmallResultCard from "../components/smallResultCard";

class Results extends Component {
    state = {}

    render() {
        return (
            <div class="results">
                <div class="searchbar">Search Bar</div>
                <div class="filters">Filters</div>

                <div class="resultList">

                    {/* Replace with for loop! */}

                    <SmallResultCard />

                    <SmallResultCard />

                    <SmallResultCard />

                    <SmallResultCard />

                    <SmallResultCard />

                    <SmallResultCard />

                    <SmallResultCard />

                    {/* Replace with for loop! */}


                </div>

            </div>


        );
    }
}

export default Results;