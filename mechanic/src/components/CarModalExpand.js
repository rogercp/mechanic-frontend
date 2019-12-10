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
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import { borderRight } from "@material-ui/system";

import  '../styles/fullscreenmodal.scss'

/**
 * Define styles
 */


// const PurpleSwitch = withStyles({
//     switchBase: {
//       color: purple[300],
//       '&$checked': {
//         color: purple[500],
//       },
//       '&$checked + $track': {
//         backgroundColor: purple[500],
//       },
//     },
//     checked: {},
//     track: {},
//   })(Switch);

/**
 * Define modal
 */

function CarModalExpand(props) {
   
    const [formNotView,setFormNotView ] = useState({
        toggled:false
    });


    const handleChange2 = name => event => {
        setFormNotView({ ...formNotView, [name]: event.target.checked });
      };
    
      
    return (
        <>
        <Dialog fullScreen open={props.open} onClose={props.handleClose}>
            <div className="toolBar">
                        <Switch
                            id="toggleButton"
                            onChange={handleChange2('toggled')}
                            value="toggled"
                            color="primary"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                        <IconButton
                            id="exitButton"
                            edge="end"
                            onClick={props.handleClose}
                            
                        >
                            <CloseIcon  />
                        </IconButton>
            </div>


           
                
           {formNotView.toggled === false ? <CarMaintenceShow car={props.car}/>: <CarMaintenceForm car={props.car}/>}
            
           
        </Dialog>
           
        </>
    )
}

/**
 * Export modal
 */

 export default CarModalExpand;