
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CarForm from '../components/CarForm'
import CarMaintenceForm from '../components/CarMaintenenceForm'

import { CarShow } from '../components';


/**
 * Import styles
 */



/**
 * Define component
 */

function UserSettings(props) {

   
    return (
        <>
           
            <div style={{backgroundColor:"grey"}}>
                <CarShow/>
            </div>
            
        
     
       

        </>
       )
}

/**
 * Export component
 */

export default UserSettings;