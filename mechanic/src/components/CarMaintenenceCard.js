/**
 * Dependencies
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { axiosWithAuth } from '../helpers/index';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AllOutIcon from '@material-ui/icons/AllOut';
import InfoIcon from '@material-ui/icons/Info';
import CarModalExpand from './CarModalExpand'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import CarImgUpload from './CarImgUpload';
import { makeStyles } from '@material-ui/core/styles';


import  '../styles/fullscreenmodal.scss'
/**
 * Import styles
 */


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    },
    submitbutton: {
        justifyContent: 'center',
    },
    modal: {
        position: 'absolute',
        margin: '0 auto',
    },
    paper: {
      height: '50px',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(0, 0, 0),
      outline: 'none',
      margin:'1%',
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 16px 19px rgba(0,0,0,0.2), 0 15px 15px rgba(0,0,0,0.2)",
      '&:hover':{
          boxShadow: "0 2px 4px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.22)"
        },
      [theme.breakpoints.down('md')]: {
          width: '100%',
          height: '100%',
      },
      [theme.breakpoints.down('sm')]: {
          padding: theme.spacing(0,0,0),
          width:'90%',
          height: '100%',
      },
    },
        expand: {
          transform: 'rotate(0deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
        },
        expandOpen: {
          transform: 'rotate(180deg)',
        },
        top:{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
        },
        margin:{
            color:'red',
              outline:'0',
        },
        root: {
          width: '100%',
        },
        
  }))
  



/**
 * Define component
 */

function CarMaintenceCard(props) {

    const classes = useStyles();


    function handleDelete2() {
        axiosWithAuth()
            .delete(`${process.env.REACT_APP_API_URL}/car_fix/${props.carFix.id}`)
            .then(res => {
                props.fetchCarFixes()
            })
            .catch(error => {
                console.error(error);
            });
    }
    


    return (
        <>
        <div style={{display:"block",textAlign:"center",width:'80%',maxWidth:"1300px"}}>

            <ExpansionPanel style={{width:"100%",margin:"1rem"}}>

            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <p>{props.carFix.fix}</p> 
            <p>{props.carFix.fix_date}</p>
            {props.carFix.fix_not_maintenence ? <p>fix</p> : <p>maintence</p>}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails id="panelbody">

            <div style={{display:"flex",flexDirection:"column"}}>
            <div style={{width:"200px",height:"200px"}}>
                <p>{props.carFix.fix_description}</p>
                <p>${props.carFix.fix_price}</p>
            </div>

                <Toolbar style={{display:"flex",flexDirection:"row",alignItems:"spaceBetween",justifyContent:"spaceBetween"}} >

                    <Button
                        id="edit"
                    >
                        <EditIcon />
                    </Button>
                    
                    
            <IconButton id="del"  aria-label="delete"  className={classes.margin} onClick={handleDelete2}>
                <DeleteIcon  />    
            </IconButton> 

                
                </Toolbar>
            </div>
            </ExpansionPanelDetails>
            </ExpansionPanel>

        </div>
        </>
       )
}

/**
 * Export component
 */

export default CarMaintenceCard;
