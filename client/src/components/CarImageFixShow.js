
import React, { useEffect, useState } from 'react';
import { imagesRef } from '../helpers/firebase';
import { axiosWithAuth } from '../helpers/index';
import Tooltip from '@material-ui/core/Tooltip';


function CarImageFixShow(props) {

  const [thisImage, setThisimage] = useState('')


  const fileRef = imagesRef.child(`${props.carFix.id}/${props.image.file_name}`);

  useEffect(() => {
    getImg()
  }, []);

  function getImg() {
    // send fileref to firebase then recieves the images
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


  // delete for images from firebase and the reference on the backend
  function deleteImage() {

    fileRef.delete().then(() => {

      axiosWithAuth().delete(`/car_fix/carFix_image/${props.image.id}`)
        .then(res => {
          props.fetchFixDocuments(props.carFix.id)
        })
        .catch(error => {
          console.error(error);
        })
    })
      .catch(err => {
        console.error(err);
      })
  }



  if (props.isDeleteableOnClick) {
    return (
      <>
        {/* {(metadata.contentType === 'application/pdf')? <div id="div-pdf" src={`${thisImage}`}></div> :  <img id="reg-image" height="200px" src={`${thisImage}`}></img>} */}
        <Tooltip title="delete" placement="left">
        {/* <div style={{}}>
        <HighlightOffIcon  style ={{position: 'absolute',bottom: "80%",color: 'red',outline: '0',}}/> */}
         <img id="reg-image" onClick={deleteImage} style={{ maxWidth: '100%', maxHeight: '450px', backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} src={`${thisImage}`}></img>
          {/* </div> */}
        </Tooltip>
        {/* {props.image.file_name} */}

      </>

    )
      }else{
        return (
          <>
            {/* {(metadata.contentType === 'application/pdf')? <div id="div-pdf" src={`${thisImage}`}></div> :  <img id="reg-image" height="200px" src={`${thisImage}`}></img>} */}
            <img id="reg-image" style={{ maxWidth: '100%', maxHeight: '450px', backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} src={`${thisImage}`}></img>
            {/* {props.image.file_name} */}
      
          </>
        )
      }

  
}


export default CarImageFixShow;
