/**
 * Dependencies
 */

import React, { useState, useEffect} from "react";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green, red } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import CarAddModal from './CarAddModal';
import { axiosWithAuth } from '../helpers/index';
import CarCard from './CarCard'
import Grid from '@material-ui/core/Grid';

/**
 *  Import styles
 */


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
/**
 * Define component
 */




function CarShow(props) {
  const classes = useStyles();

  const [cars,setCars] = useState([])
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  /**
   * Dialog Methods
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
  
  const onOpen = async e => {
    e.preventDefault();
    handleOpen();
     
  };

  useEffect(() => {
    async function fetchCars() {
        const res = await axiosWithAuth().get(`${process.env.REACT_APP_API_URL}/cars`); 
        setCars(res.data);
        console.log(res)
    }
    fetchCars()
    
}, []);



    return (
      <>
        
        <h1>My Cars</h1>

        <Fab color="none" aria-label="add"  style={{color:"darkcyan",  outline:'0'}} className={classes.margin}>
          <AddIcon
           onClick={onOpen}
           />
        </Fab>

        <CarAddModal
          open={open}
          onClose={handleClose}
          titleText={"Car Form"}
          bodyText={""}
          redirect={"/mycars"}
          redirectText={"cars"}
          />

        <CarAddModal
          open={errorOpen}
          onClose={handleErrorClose}
          titleText={"Error creating car"}
          bodyText={"Please try again"}
          redirect={""}
          redirectText={""}
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
                        <CarCard  car={c}  key={caches.uid} fetchCars={c.fetchCars} />
                        </>
                     );
                  })}
              </Grid>
            }
          
      </>
    );
};

/**
 * Export component
 */

export default CarShow;
