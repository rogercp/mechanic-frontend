/**
 * Dependencies
 */

import React, { useState, useEffect} from "react";
import { axiosWithAuth } from '../helpers/index';
import { makeStyles } from '@material-ui/core/styles';

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
        
      <h1>MaintenenceShow</h1>
      <p>{carFixes.fix_description} </p>
      </>
    );
};

/**
 * Export component
 */

export default CarMaintenceShow;





