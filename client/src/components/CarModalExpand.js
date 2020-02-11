
import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CarMaintenceForm from './CarMaintenenceForm';
import CarMaintenceShow from './CarMaintenenceShow';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { green } from '@material-ui/core/colors';
import CarFixAddModal from './CarFixAddModal';
import { axiosWithAuth } from '../helpers/index';
import CarCard from './CarCard'
import Grid from '@material-ui/core/Grid';

import  '../styles/fullscreenmodal.scss'




const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
      position: 'relative',
      minHeight: 200,
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    fabGreen: {
      color: theme.palette.common.white,
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[600],
      },
    }, 
    margin: {
      margin: theme.spacing(1),
      boxShadow: "0 16px 19px rgba(0,0,0,0.2), 0 15px 15px rgba(0,0,0,0.2)",
      '&:hover':{
          boxShadow: "0 2px 4px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.22)"
        },
    },
   
  }));




function CarModalExpand(props) {
    const classes = useStyles();

    // const [formNotView,setFormNotView ] = useState({
    //     toggled:false
    // });

    const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

 

  function handleOpen() {
      setOpen(true);
  }
  function handleErrorOpen() {
      setErrorOpen(true);
  }
  function handleClose() {
      setOpen(false);
  }
  function handleErrorClose() {
      setErrorOpen(false);
  }
  


    // const handleChange2 = name => event => {
    //     setFormNotView({ ...formNotView, [name]: event.target.checked });
    //   };
    
      
    return (
        <>
        <Dialog fullScreen open={props.open} onClose={props.handleClose}  >
            <div className="toolBar" style={{backgroundColor:"rgb(210, 210, 211)"}}>
                        
                        <IconButton
                            id="exitButton"
                            edge="end"
                            onClick={props.handleClose}
                            
                        >
                            <CloseIcon  />
                        </IconButton>
            </div>
            
            <div style={{backgroundColor:"rgb(210, 210, 211)",margin:"0",paddingBottom:"300px"}}>
            <CarFixAddModal
            open={open}
            car={props.car}
            onClose={handleClose}
            titleText={"Maintence Form"}
            bodyText={""}
            redirect={"/mycars"}
            redirectText={"cars"}
          />
            <Fab color="none" aria-label="add"  style={{color:"darkcyan",  outline:'0'}} className={classes.margin}>
                <AddIcon
            onClick={handleOpen}
           />
            </Fab> 
           
              <div style={{maxWidth:"800px"}} >
              <CarMaintenceShow car={props.car}/>
              </div>
            
              
            </div>    
          
            
           
        </Dialog>
           
        </>
    )
}


 export default CarModalExpand;