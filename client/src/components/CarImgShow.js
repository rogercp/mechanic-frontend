
import React, { useEffect, useState } from 'react';
import { imagesRef } from '../helpers/firebase';
import Tooltip from '@material-ui/core/Tooltip';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { axiosWithAuth } from '../helpers/index';


function CarImgShow(props) {

  const [thisImage, setThisimage] = useState('')

  const fileRef = imagesRef.child(`${props.car.id}/${props.image.file_name}`);


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


  function deleteImage() {

    fileRef.delete().then(() => {

      axiosWithAuth().delete(`/car/car_image/${props.image.id}`)
        .then(res => {
          props.fetchCarImages(props.car.id)
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
      }
  return (
    <>
      {/* {(metadata.contentType === 'application/pdf')? <div id="div-pdf" src={`${thisImage}`}></div> :  <img id="reg-image" height="200px" src={`${thisImage}`}></img>} */}

      <img id="reg-image" height="200px" style={{ maxWidth: '100%', maxHeight: '100%' }} src={`${thisImage}`}></img>
      {/* {props.image.file_name} */}

    </>
  )
}


export default CarImgShow;
