/**
 * Dependencies
 */

import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import CarMaintenenceForm from './CarMaintenenceForm';

/**
 * Define styles
 */

const useStyles = makeStyles(theme => ({
    dialog: {
        width: '500px',
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

function CarFixAddModal(props) {
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
                    <Typography className={classes.body} variant ="subtitle2"> {bodyText}</Typography>
                    <CarMaintenenceForm car={props.car}/>
                    
                </div>
            </Dialog>
        )
    } else {
        return (
            <Dialog open={open} onClose={handleClose} className={classes.dialog}>
                <div className={classes.paper}>
                    <Typography className={classes.body} variant ="subtitle2"> {bodyText}</Typography>
                    <CarMaintenenceForm car={props.car}/>
                </div>
            </Dialog>
        )
    }
}

/**
 * Export modal
 */

export default withRouter(CarFixAddModal);