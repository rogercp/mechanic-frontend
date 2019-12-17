/**
 * Dependencies
 */

import React, { useEffect, useState } from 'react';
import { imagesRef } from '../helpers/firebase';


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

            setThisimage(url)

            // let img = document.getElementById('document-image');
            // if (metadata.contentType === 'application/pdf') {
            //     img.src = '';
            //     // TODO handle PDFs
            //   } else {
            //     img.src = url;
            //   }
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
            {/* {(metadata.contentType === 'application/pdf')? <div id="div-pdf" src={`${thisImage}`}></div> :  <img id="reg-image" height="200px" src={`${thisImage}`}></img>} */}
            <img id="reg-image" height="200px" style={{maxHeight:"200px",maxWidth:"318px"}} src={`${thisImage}`}></img>
            {/* {props.image.file_name} */}

        </>
    )
}

/**
 * Export component
 */

export default CarImgShow;
