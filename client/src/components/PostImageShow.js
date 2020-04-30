
import React, { useEffect, useState } from 'react';
import { imagesRef } from '../helpers/firebase';
import { axiosWithAuth } from '../helpers/index';
import Tooltip from '@material-ui/core/Tooltip';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function PostImageShow(props) {

  const [thisImage, setThisimage] = useState(null)

  const fileRef = imagesRef.child(`${props.post.id}/${props.image.file_name}`);

  useEffect(() => {
    // setThisimage(null)
    getImg()
  }, );

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

  function deleteImage() {

    fileRef.delete().then(() => {

      axiosWithAuth().delete(`/post/image/${props.image.id}`)
        .then(res => {
          props.fetchPostImages(props.post.id)
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
  } else {
    return (
      <>
        {/* {(metadata.contentType === 'application/pdf')? <div id="div-pdf" src={`${thisImage}`}></div> :  <img id="reg-image" height="200px" src={`${thisImage}`}></img>} */}

        <img id="reg-image" style={{ maxWidth: '100%', maxHeight: '100%', backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} src={`${thisImage}`}></img>
        {/* {props.image.file_name} */}

      </>
    )
  }

}


export default PostImageShow;
