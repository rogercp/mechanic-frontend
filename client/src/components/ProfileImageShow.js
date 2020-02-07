

import React, { useEffect, useState } from 'react';
import { imagesRef } from '../helpers/firebase';
import { Image } from 'react-bootstrap';



function ProfileImageShow(props) {

    const [thisImage,setThisimage]= useState('')
  

    const userId = localStorage.getItem('id');

    const fileRef = imagesRef.child(`${userId}/${props.image.file_name}`);

    
    useEffect(() => {
      getImg()
    }, []);
   

          
      function getImg() {
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
            <Image src="holder.js/171x180" rounded id="reg-image"  style={{height:"200px"}} src={`${thisImage}`}/>
            {/* {props.image.file_name} */}

        </>
    )
}




export default ProfileImageShow;
