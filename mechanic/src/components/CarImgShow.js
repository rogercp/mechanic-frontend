/**
 * Dependencies
 */

import React, { useEffect, useState } from 'react';
import { mixpanel } from "../helpers/index";
import { imagesRef } from '../helpers/firebase';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axiosWithAuth from '../helpers/axiosWithAuth';


/**
 * Define component
 */

function CarImgShow(props) {

    const [thisImage,setThisimage]= useState('')
    
    const fileRef = imagesRef.child(`${props.car.id}/${props.image.file_name}`);

    useEffect(() => {
        handleClick()
    }, []);

    function handleClick() {
        fileRef.getMetadata().then((metadata) => {
          fileRef.getDownloadURL().then(url => {

            // let img = document.getElementById('reg-image');

            // if (metadata.contentType === 'application/pdf') {
            //   img.src = '';
            //   // TODO handle PDFs
            // } else {
            //   img.src = url;
            // }
            console.log(url,"url")
            setThisimage(url)

          })
          .catch(err => {
            console.error(err);
          })
        }).catch((err) => {
          console.error(err);
        });
    }

    return(
        <>
            <div id="div-pdf"></div>
            <img id="reg-image" height="200px" src={`${thisImage}`}></img>
            
            {props.image.file_name}

        </>
    )
}

/**
 * Export component
 */

export default CarImgShow;
