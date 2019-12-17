/**
 * Dependencies
 */

import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CarMaintenceForm from './CarMaintenenceForm';
import CarMaintenceShow from './CarMaintenenceShow';
import Switch from '@material-ui/core/Switch';


import  '../styles/fullscreenmodal.scss'

/**
 * Define styles
 */




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
        <Dialog fullScreen open={props.open} onClose={props.handleClose}   >
            <div className="toolBar" style={{backgroundColor:"rgb(210, 210, 211)"}}>
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

            <div style={{backgroundColor:"rgb(210, 210, 211)",margin:"0",paddingBottom:"300px"}}> 
            {formNotView.toggled === false ? <CarMaintenceShow  car={props.car}/>: <CarMaintenceForm car={props.car}/>}
            </div>    
          
            
           
        </Dialog>
           
        </>
    )
}

/**
 * Export modal
 */

 export default CarModalExpand;