/**
 * Dependencies
 */

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { axiosWithAuth } from '../helpers/index';
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


/**
 * Define styles
 */
import  '../styles/carshow.scss'




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
    height: '100%',
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
        width:'100%',
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

function getModalStyle() {}

const MediatorCard = (props) => {
  const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [fullopen, setFullOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);

  function handleDelete() {
    axiosWithAuth()
        .delete(`${process.env.REACT_APP_API_URL}/cars/${props.car.id}`)
        .then(res => {
            window.location.reload();
            props.fetchCars();
        })
        .catch(error => {
            console.error(error);
        });
}



/**
     * Modal functions
     */

    
    const handlefullOpen = () => {
        setFullOpen(true);
    };
    const handlefullClose = () => {
        setFullOpen(false);
    };

    function handleErrorClose() {
        setErrorOpen(false);
    }
    
    function handleErrorOpen() {
        setErrorOpen(true);
    }

  return (
    <>
        
        <Card className={classes.paper}  style={{border:"black",maxWidth:"400px"}}>
            
          <CardContent>

            <div className={classes.top}>
            <h3 className='card-name'> {props.car.car_nickname}</h3> 
            <Button
            style={{color:"darkcyan",  outline:'0'}}
                    onClick={handlefullOpen}
                    >
            <AllOutIcon/>
            </Button>
            </div>

              {/* <img style={{height:"50%",width:"100%",margin:"0 auto"}} src='https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=blue-bmw-sedan-near-green-lawn-grass-170811.jpg&fm=jpg' /> */}
              <CarImgUpload car={props.car}/>

              <div className={classes.root} style={{width:"100%"}}>
              <ExpansionPanel>

                  
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <h4>Details</h4>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                
                <div style={{display:"flex",flexDirection:"column"}}>
                    <div>
                        <p className="case-label">Car Type: {props.car.car_type}</p> 
                        <p className="case-label">{props.car.car_year} {props.car.car_make} {props.car.car_model} </p> 
                    </div>
                    <Toolbar style={{display:"flex",flexDirection:"row",alignItems:"spaceBetween",justifyContent:"spaceBetween"}} >
                        <Button
                            id="edit"
                        >
                            <EditIcon />
                        </Button>
                        
                        
                    <IconButton id="del"  aria-label="delete"  className={classes.margin} onClick={handleDelete}>
                            <DeleteIcon  />    
                        </IconButton> 
                    
                    </Toolbar>
               </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
                </div>
          </CardContent>

        </Card>
        <CarModalExpand
                open={fullopen}
                handleClose={handlefullClose}
                onClose={handlefullClose}
                car={props.car}
            />
      
    </>
  );
};


/**
 * Export component
 */

export default MediatorCard;
