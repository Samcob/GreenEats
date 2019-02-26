import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from "material-ui/core/SvgIcon"
//import "./icon.css";


const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    icon: {
        margin: theme.spacing.unit * 2,
    },
    iconHover: {
        margin: theme.spacing.unit * 2,
        '&:hover': {
            color: red[800],
        },
    },
});

function issuesIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M114.55 138.872C100.858 155.851 121.668 186.672 121.668 186.672C155.494 154.96 159.885 133.953 159.722 91.5368C159.722 91.5368 154.259 108.306 149.151 114.792C137.81 129.194 126.058 124.602 114.55 138.872Z" fill="white" />
        </SvgIcon>
    );
}

function SvgIcons(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <HomeIcon className={classes.icon} />
            <HomeIcon className={classes.icon} color="primary" />
            <HomeIcon className={classes.icon} color="secondary" />
            <HomeIcon className={classes.icon} color="action" />
            <HomeIcon className={classes.iconHover} color="error" style={{ fontSize: 30 }} />
            <HomeIcon color="disabled" className={classes.icon} fontSize="large" />
            <HomeIcon
                className={classes.icon}
                color="primary"
                fontSize="large"
                component={svgProps => (
                    <svg {...svgProps}>
                        <defs>
                            <linearGradient id="gradient1">
                                <stop offset="30%" stopColor={blue[400]} />
                                <stop offset="70%" stopColor={red[400]} />
                            </linearGradient>
                        </defs>
                        {React.cloneElement(svgProps.children[0], { fill: 'url(#gradient1)' })}
                    </svg>
                )}
            />
        </div>
    );
}

SvgIcons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SvgIcons);

export default Icons;