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
    const [images, setImages] = useState([]);
    const fileRef = imagesRef.child(`${props.car.id}/${props.car.file_name}`);

    useEffect(() => {
        fetchDocuments();
    },[]);

    async function fetchDocuments() {
        let images = await axiosWithAuth().get(`/cars/${props.car.id}/images`)
        setImages(images.data);
        return images;
    }


    function handleClick(e) {
        e.preventDefault();

        fileRef.getMetadata().then((metadata) => {
          fileRef.getDownloadURL().then(url => {
            let img = document.getElementById('document-image');

            if (metadata.contentType === 'application/pdf') {
              img.src = '';
              // TODO handle PDFs
            } else {
              img.src = url;
            }
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
          <Button id="view-button" onClick={handleClick} variant="outlined" className="my-1">View</Button> {props.car.file_name}

        </>
    )
}

/**
 * Export component
 */

export default CarImgShow;
