
import React, { useEffect, useState } from 'react';
import { imagesRef } from '../helpers/firebase';



function CarImageFixShow(props) {

    const [thisImage,setThisimage]= useState('')

      const fileRef = imagesRef.child(`${props.carFix.id}/${props.image.file_name}`);

    useEffect(() => {
        getImg()
    }, []);

    function getImg() {
        fileRef.getMetadata().then((metadata) => {
          fileRef.getDownloadURL().then(url => {

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
            {/* {(metadata.contentType === 'application/pdf')? <div id="div-pdf" src={`${thisImage}`}></div> :  <img id="reg-image" height="200px" src={`${thisImage}`}></img>} */}
            <img id="reg-image" style={{maxWidth:'100%',maxHeight:'450px',backgroundSize: "cover",backgroundPosition: "center", backgroundRepeat:"no-repeat"}} src={`${thisImage}`}></img>
            {/* {props.image.file_name} */}

        </>
    )
}


export default CarImageFixShow;
