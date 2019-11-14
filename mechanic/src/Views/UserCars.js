
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CarForm from '../components/CarForm'


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
        <div style={{backgroundColor:"black",height:"100vh"}}>
                <CarForm/>
        </div>
        </Grid>
        
        <Grid item xs={12} sm={6} >
        <div style={{backgroundColor:"orange",height:"100vh"}}>
            hello
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