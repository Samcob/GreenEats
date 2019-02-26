import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import "bootstrap/dist/css/bootstrap.css"
import './App.css';

const styles = {
  root: {
    display: "flex",
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  navBar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
}

class App extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className="App">

        <header className="App-header">
          <a href="homepage.html"><img src="./Images/headerLogo.png" alt="Green Eats" height="45px"></img></a>
        </header>


        <div class="imgbox">
          <img class="fit" src="./Images/PhotoBackground.jpg" alt="Background"></img>
        </div>

        <h2> Our picks of the day</h2>

        <h3> Breakfast </h3>
        <div class='card'></div>
        <h3> Lunch </h3>
        <div class='card'></div>
        <h3> Dinner </h3>
        <div class='card'></div>
        <div class="footer"></div>

        <nav class="navbar navbar-expand-lg bg-text-light">
          <a href="issues.html"> <img src="./Images/issuesIcon.svg" alt="issues" height="45px" /></a>
          <a href="ecotips.html"><img src="./Images/ecoTipsIcon.svg" alt="Eco Tips" height="45px" /></a>
          <a href="search.html"><img src="./Images/searchIcon.svg" alt="Search" height="45px" /></a>
          <a href="#ecoscore.html"><img src="./Images/ecoScoreIcon.svg" alt="Eco Score" height="45px" /></a>
        </nav>
      </div>
    );
  }
}




App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
