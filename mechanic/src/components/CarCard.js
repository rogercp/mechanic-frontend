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
    padding: theme.spacing(2, 4, 2),
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
        padding: theme.spacing(1,2,2),
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
      }
      
}))

/**
 * Define component
 */

function getModalStyle() {}

const MediatorCard = (props) => {
  const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [modalStyle] = useState(getModalStyle);
    const [fullopen, setFullOpen] = useState(false);
    const [completeopen, setCompleteOpen] = useState(false);
    const [textState, setText] = useState("");
   

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

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handlefullOpen = () => {
        setFullOpen(true);
    };
    const handlefullClose = () => {
        setFullOpen(false);
    };

    const handlecompleteClose = () => {
        setCompleteOpen(false);
    };

    const handlecompleteOpen = () => {
        setCompleteOpen(true);
    };
    
    

  return (
    <>
        
        <Card className={classes.paper}  style={{border:"black",maxWidth:"400px"}}>
            
          <CardContent>
            <div className={classes.top}>
            <h5 className='card-name'> {props.car.car_nickname}</h5> 
            <IconButton aria-label="delete" className={classes.margin} onClick={handleDelete}>
                    <DeleteIcon style={{outline:0}} />
            </IconButton> 
            </div>
              <img style={{height:"50%",width:"90%"}} src='https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=blue-bmw-sedan-near-green-lawn-grass-170811.jpg&fm=jpg' />
              <p className="case-label">Car Type: {props.car.car_type}</p> 
              <p className="case-label">Car Make: {props.car.car_make}</p> 
              <p className="case-label">Car Model: {props.car.car_model}</p>
              <p className="case-label">Nick Name: {props.car.car_nickname}</p>
              <p className="case-label">Year: {props.car.car_year}</p>   
          </CardContent>

          <CarModalExpand
                open={completeopen}
                handleClose={handlefullClose}
                onClose={handlecompleteClose}
                carId={props.car.id}
            />

          <EditIcon style={{marginRight:"10px"}} />

          <AllOutIcon  style={{marginLeft:"10px"}} onClick={handlecompleteOpen} />

        </Card>
      
    </>
  );
};

/**
 * Export component
 */

export default MediatorCard;
