
import React, { useEffect, useState } from 'react';
import { imagesRef } from '../helpers/firebase';
import { axiosWithAuth } from '../helpers/index';



function PostImageShow(props) {

  const [thisImage, setThisimage] = useState('')

  const fileRef = imagesRef.child(`${props.post.id}/${props.image.file_name}`);

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

  function deleteImage() {

    fileRef.delete().then(() => {

      axiosWithAuth().delete(`/post/image/${props.image.id}`)
        .then(res => {
          props.fetchPostImage(props.post.id)
        })
        .catch(error => {
          console.error(error);
        })
    })
      .catch(err => {
        console.error(err);
      })
  }
if(props.isDeleteableOnClick){
    return (
        <>
          {/* {(metadata.contentType === 'application/pdf')? <div id="div-pdf" src={`${thisImage}`}></div> :  <img id="reg-image" height="200px" src={`${thisImage}`}></img>} */}
          <img id="reg-image" onClick={deleteImage} style={{ maxWidth: '100%', maxHeight: '450px', backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} src={`${thisImage}`}></img>
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


export default PostImageShow;
