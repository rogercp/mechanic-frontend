/**
 * Dependencies
 */

import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";
import { withRouter } from 'react-router-dom';

/**
 * Define styles
 */

const useStyles = makeStyles(theme => ({
    dialog: {
        width: '400px',
        margin: '0 auto',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2),
        outline: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    title: {
        paddingBottom: '10px',
    },
    body: {
        paddingBottom: '20px',
    },
}))

/**
 * Define modal
 */

function CarAddModal(props) {
    const classes = useStyles();
    const { onClose, open, titleText, bodyText, redirect, redirectText } = props;

    function handleClose() {
        onClose();
    }

    function handleClick() {
        props.history.push(redirect);
    }

    if (redirect === '') {
        return (
            <Dialog open={open} onClose={handleClose} className={classes.dialog}>
                <div className={classes.paper}>
                    <Typography className={classes.title} variant="h6">{titleText}</Typography>
                    <Typography className={classes.body} variant ="subtitle2"> {bodyText}</Typography>
                    <Button onClick={handleClose} variant="outlined"> Return to form </Button>
                </div>
            </Dialog>
        )
    } else {
        return (
            <Dialog open={open} onClose={handleClose} className={classes.dialog}>
                <div className={classes.paper}>
                    <Typography className={classes.title} variant="h6">{titleText}</Typography>
                    <Typography className={classes.body} variant ="subtitle2"> {bodyText}</Typography>
                    <Button onClick={handleClick} variant="outlined"> Return to {redirectText} </Button>
                </div>
            </Dialog>
        )
    }
}

/**
 * Export modal
 */

export default withRouter(CarAddModal);