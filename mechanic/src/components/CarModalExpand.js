/**
 * Dependencies
 */

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import CarMaintenceForm from './CarMaintenenceForm';
import CarMaintenceShow from './CarMaintenenceShow';
import { axiosWithAuth } from '../helpers/index';

/**
 * Define styles
 */

const useStyles = makeStyles(theme => ({
    
}));

/**
 * Define modal
 */

function CarModalExpand(props) {
   
    

    return (
        <>
        <Dialog fullScreen open={props.open} onClose={props.handleClose}>
        <Toolbar>
                
                    <IconButton
                        id="exitButton"
                        edge="end"
                        onClick={props.handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
            </Toolbar>
            
            <CarMaintenceShow car={props.car}/>
            <CarMaintenceForm car={props.car}/>
            </Dialog>
           
        </>
    )
}

/**
 * Export modal
 */

 export default CarModalExpand;