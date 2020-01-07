
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

function UserCars(props) {

   
    return (
        <>
           
            <div style={{backgroundColor:"rgb(210, 210, 211)",maxWidth:"1300px",paddingBottom:"300px"}}>
                <CarShow/>
            </div>
            
        
     
       

        </>
       )
}

/**
 * Export component
 */

export default UserCars;