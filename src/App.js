import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//Bottom Navigation Bar imports.
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

//import Icon from "@material-ui/core/Icon"
//Search Field imports.
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
//import SearchIcon from '@material-ui/icons/Search';
//import IconButton from '@material-ui/core/IconButton';
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
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <a href="homepage.html"><img src="./Images/headerLogo.png" alt="Green Eats" height="45px"></img></a>
        </header>


        {/* <div class="imgbox">
          <img class="fit" src="./Images/PhotoBackground.jpg" alt="Background"></img>
        </div>

        <h2> Our picks of the day</h2>

        <h3> Breakfast </h3>
        <div class='card'></div>
        <h3> Lunch </h3>
        <div class='card'></div>
        <h3> Dinner </h3>
        <div class='card'></div>
        <div class="footer"></div> */}

        <Paper className={classes.searchBar}>
          <InputBase className={classes.input} placeholder="Search for a recipe " />
          {/* <IconButton className={classes.iconButton} aria-label="Search">
            <SearchIcon />
          </IconButton> */}
        </Paper>

        <BottomNavigation className="bottom-nav" color="green">
          value={value}
          onChange={this.handleChange}
          showLabels = {true}
          className={classes.navBar}
          >
          <BottomNavigationAction label="Issues" value="issues" icon={<img src='/public/Images/issuesIcon.png' alt="issues"></img>} />
          <BottomNavigationAction label="EcoTips" value="ecotips" icon={"./Images/ecoTipsIcon.png"} />
          <BottomNavigationAction label="Search" value="search" icon={"./Images/searchIcon.png"} />
          <BottomNavigationAction label="EcoScore" value="ecoscore" icon={"./Images/ecoScoreIcon.png"} />
        </BottomNavigation>
      </div >
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
