/**
 * Dependencies
 */

import React, { useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Add';

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


function Question(props) {
  
    const classes = useStyles();
    return (
      <>
        <Fab color="none" aria-label="add" style={{color:"darkcyan",  outline:'0'}} className={classes.margin}>
          <EditIcon />
           
        </Fab>


      </>
    );
};

/**
 * Export component
 */

export default Question;
