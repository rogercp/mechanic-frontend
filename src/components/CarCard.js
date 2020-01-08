/**
 * Dependencies
 */

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { axiosWithAuth } from '../helpers/index';
import EditIcon from '@material-ui/icons/Edit';
import AllOutIcon from '@material-ui/icons/AllOut';
import CarModalExpand from './CarModalExpand'
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import CarImgUpload from './CarImgUpload';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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

    const [flip,setFlip ] = useState({
      toggled:false
  });


  // 
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(prev => !prev);
  };
// 

  const handleChange2 = name => event => {
      setFlip({ ...flip, [name]: event.target.checked });
    };
  

  function handleDelete() {
    axiosWithAuth()
        .delete(`${process.env.REACT_APP_API_URL}/cars/${props.car.id}`)
        .then(res => {
            props.fetchCarsFunction();
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
        
        <Card className={classes.paper}  style={{border:"black",minWidth:"350px",minHeight:"325px",maxWidth:"350px"}}>
            
       

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
             <CarImgUpload car={props.car}/>
            
             
          
          </CardContent>
          <div style={{display:"block",width:"100%"}}>
        
           </div>

    <FormControlLabel
        control={<Switch checked={checked}  color="primary" onChange={handleChange} />}
        label="Details"
      />
      <div className={classes.container}>
        <Collapse in={checked}>
          <Paper elevation={4} className={classes.paper}>
          <div className={classes.top}>
                <div style={{display:"flex",flexDirection:"column",minHeight:'150px'}}>
                
               
                        <p className="case-label">Car Type: {props.car.car_type}</p> 
                        <p className="case-label">{props.car.car_year} {props.car.car_make} {props.car.car_model} </p> 
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
                    
               </div>
          </Paper>
        </Collapse>

</div>

          
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
