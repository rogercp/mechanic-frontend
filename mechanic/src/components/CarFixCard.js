/**
 * Dependencies
 */

import React, { useState, useEffect} from "react";

/**
 *  Import styles
 */

import  '../styles/navbar.scss'


/**
 * Define component
 */


function CarFixCard(props) {

   
    return (
      <>
      <div style={{width:"200px",height:"200px"}}>
      {props.carFix.fix_not_maintenence ? <p>fix</p> : <p>maintence</p>}
       <p>{props.carFix.fix}</p> 
       <p>{props.carFix.fix_description}</p>
       <p>{props.carFix.fix_date}</p>
       <p>${props.carFix.fix_price}</p>

       </div>
      </>
    );
};

/**
 * Export component
 */

export default CarFixCard;





