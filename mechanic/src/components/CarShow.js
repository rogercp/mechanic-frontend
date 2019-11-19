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

        <Fab color="primary" aria-label="add" className={classes.margin}>
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

          {cars.map(car => {
                return (
                    <>
                    <CarCard car={car} numCars={cars.length}  key={car.uid} />
                    </>
                 );
            })}
      </>
    );
};

/**
 * Export component
 */

export default CarShow;
