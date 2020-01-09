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


function Search(props) {
  
    const classes = useStyles();
    return (
      <>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Search" variant="filled" />
        </form>
 
      </>
    );
};

/**
 * Export component
 */

export default Search;
