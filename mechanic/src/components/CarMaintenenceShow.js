/**
 * Dependencies
 */

import React, { useState, useEffect} from "react";
import { axiosWithAuth } from '../helpers/index';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CarFixCard from './CarFixCard'

/**
 *  Import styles
 */

import  '../styles/navbar.scss'


/**
 * Define component
 */


function CarMaintenceShow(props) {
    const [carFixes,setCarFixes] = useState([])

    useEffect(() => {
        async function fetchCars() {
            const res = await axiosWithAuth().get(`/car_fix/${props.car.id}`); 
            setCarFixes(res.data);
            console.log(res.data)
        }
        fetchCars()
    }, []);
    return (
      <>
      
      {carFixes.length < 1 ? <div>You have no fixes</div> :
              <Grid 
      
              item xs={12}
              sm={carFixes.length === 1 ? 12 : 12}
              md={carFixes.length === 1 ? 12 : 12}
              lg={carFixes.length === 1 ? 12 : 12} 
              container direction="row" justify="space-evenly">
                  {carFixes.map(c => {
                      return (
                        <>
                        <CarFixCard carFix={c} key={caches.uid}  />
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

export default CarMaintenceShow;





