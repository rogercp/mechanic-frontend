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


/**
 * Define styles
 */


const PurpleSwitch = withStyles({
    switchBase: {
      color: purple[300],
      '&$checked': {
        color: purple[500],
      },
      '&$checked + $track': {
        backgroundColor: purple[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

/**
 * Define modal
 */

function CarModalExpand(props) {
   
    const [formNotView,setFormNotView ] = useState({
        formNotView:false
    });


    const handleChange2 = name => event => {
        setFormNotView({ ...formNotView, [name]: event.target.checked });
      };
    
      
    return (
        <>
        <Dialog fullScreen open={props.open} onClose={props.handleClose}>
            <Toolbar>
                    
                        <IconButton
                            id="exitButton"
                            edge="end"
                            onClick={props.handleClose}
                            style={{float: 'right !important'}}
                        >
                            <CloseIcon />
                        </IconButton>
            </Toolbar>

            <PurpleSwitch
                onChange={handleChange2('formNotView')}
                value="formNotView"
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
                
           {formNotView.formNotView === false ? <CarMaintenceShow car={props.car}/>: <CarMaintenceForm car={props.car}/>}
            
           
        </Dialog>
           
        </>
    )
}

/**
 * Export modal
 */

 export default CarModalExpand;