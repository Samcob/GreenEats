import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import SearchIcon from '@material-ui/icons/Search';
//import IconButton from '@material-ui/core/IconButton';

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
}

class searchBar extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.searchBar}>
                <InputBase className={classes.input} placeholder="Search for a recipe " />
                {/* <IconButton className={classes.iconButton} aria-label="Search">
              <SearchIcon />
            </IconButton> */}
            </Paper>
        );
    }
}

searchBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(searchBar);