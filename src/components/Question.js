/**
 * Dependencies
 */

import React, { useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

/**
 *  Import styles
 */
const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        height:"20px"
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
        <h1>button for Question</h1>
      </>
    );
};

/**
 * Export component
 */

export default Question;
