
import React, { useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { green } from '@material-ui/core/colors';
import CarAddModal from './CarAddModal';
import { axiosWithAuth } from '../helpers/index';
import CarCard from './CarCard'
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';



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


function CarShow(props) {
  const classes = useStyles();

  const [cars,setCars] = useState([])
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  /**
   * Modal Methods
   */

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
  
  
  useEffect(() => {
   
    fetchCars()
    
}, []);

async function fetchCars() {
  const res = await axiosWithAuth().get(`/cars`); 
  setCars(res.data);
}

    return (
        <div style={{display:'block'}}>
           <Tooltip title="Add Car" placement="right">
        <Fab color="none" aria-label="add"  style={{color:"darkcyan", outline:'0'}} className={classes.margin}>
          <AddIcon
           onClick={handleOpen}
           />
        </Fab>
        </Tooltip>
       
        <CarAddModal
         fetchCars={fetchCars} 
          open={open}
          onClose={handleClose}
          titleText={"Car Form"}
          bodyText={""}
          redirect={"/mycars"}
          redirectText={"cars"}
          />

   
          {cars.length < 1 ? <div>You have no Cars</div> :
              <Grid 
      
              item xs={12}
              sm={cars.length === 1 ? 12 : 12}
              md={cars.length === 1 ? 12 : 12}
              lg={cars.length === 1 ? 12 : 12} 
              container direction="row" justify="space-evenly">
                  {cars.map(c => {
                      return (
                        <>
                        <CarCard  fetchCarsFunction={fetchCars} car={c}  key={caches.uid} fetchCars={c.fetchCars} />
                        </>
                     );
                  })}
              </Grid>
            }
           
          </div>
      
    );
};



export default CarShow;
