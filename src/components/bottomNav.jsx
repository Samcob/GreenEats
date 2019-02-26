import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const styles = {
    root: {
        display: "flex",
    },
}

class bottomNav extends Component {
    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation className="bottom-nav">
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.root}
                >
            <BottomNavigationAction label="Issues" value="issues" icon={<img src='./Images' alt="issues"></img>} />
                <BottomNavigationAction label="EcoTips" value="ecotips" icon={"./Images/ecoTipsIcon.png"} />
                <BottomNavigationAction label="Search" value="search" icon={"./Images/searchIcon.png"} />
                <BottomNavigationAction label="EcoScore" value="ecoscore" icon={"./Images/ecoScoreIcon.png"} />
            </BottomNavigation>
        );
    }
}


bottomNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(bottomNav);