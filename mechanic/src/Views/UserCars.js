
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CarForm from '../components/CarForm'
import CarMaintenceForm from '../components/CarMaintenenceForm'

import { CarShow } from '../components';


/**
 * Import styles
 */



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    
  }));


/**
 * Define component
 */

function UserSettings(props) {

    const classes = useStyles();
    return (
        <>
        <Grid container spacing={0}>

            <Grid item xs={12} sm={6} >
                <div style={{backgroundColor:"",height:"100vh"}}>
                    <CarForm/>
                    <CarMaintenceForm/>
                </div>
            </Grid>
        
            <Grid item xs={12} sm={6} >
                <div style={{backgroundColor:"orange",height:"100vh"}}>
                    <CarShow/>
                </div>
            </Grid>
        
      </Grid>
        
       

        </>
       )
}

/**
 * Export component
 */

export default UserSettings;