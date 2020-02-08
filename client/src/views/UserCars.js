
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CarForm from '../components/CarForm'
import CarMaintenceForm from '../components/CarMaintenenceForm'

import { CarShow } from '../components';





function UserCars(props) {

   
    return (
        <>
           
            <div style={{backgroundColor:"rgb(210, 210, 211)",maxWidth:"1300px",paddingBottom:"700px"}}>
                <CarShow/>
            </div>
  
        </>
       )
}


export default UserCars;