

import React, { useEffect, useState } from 'react';
import { imagesRef } from '../helpers/firebase';
import { Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchProfileImage } from "../store/actions/settingsActions";



function ProfileImageShow(props) {

    const [thisImage,setThisimage]= useState('')
    // const [imagine,setImagine] = useState()
    const [fileState,setFileState] = useState()

    const userId = localStorage.getItem('id');


    // let fileRef = null

    // console.log(props.userImage,"image")

    useEffect(() => {

      props.fetchProfileImage(userId)
      console.log(props.userImage,"userimg")
      const fileRef = imagesRef.child(`${userId}/${props.userImage && props.userImage.file_name}`);
      setFileState(fileRef)
      getImg(fileState)
      // console.log(props.userImage,"image") 
 
    }, []);
   

          
      function getImg(fileRef) {
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

    if(fileState){
      getImg()
    }

  
//   props.fetchProfileImage(userId)

// if(props.userImage){
//   setImagine(props.userImage)
// }

//   const fileRef = imagesRef.child(`${userId}/${props.userImage ? props.userImage.file_name : "0"}`);
  
//   if(fileRef){
    
//     getImg(fileRef)    
//   }
   
//     function getImg(fileRef) {
      
//         fileRef.getMetadata().then((metadata) => {
//           fileRef.getDownloadURL().then(url => {
  
//             setThisimage(url)
  
//             // let img = document.getElementById('document-image');
//             // if (metadata.contentType === 'application/pdf') {
//             //     img.src = '';
//             //     // TODO handle PDFs
//             //   } else {
//             //     img.src = url;
//             //   }
//           })
//           .catch(err => {
//             console.error(err);
//           })
//         }).catch((err) => {
//           console.error(err);
//         });
//       }
    
  





    return(
        <>
            {/* {(metadata.contentType === 'application/pdf')? <div id="div-pdf" src={`${thisImage}`}></div> :  <img id="reg-image" height="200px" src={`${thisImage}`}></img>} */}
            <Image src="holder.js/171x180" rounded id="reg-image"  style={{height:"200px"}} src={`${thisImage}`}/>
            {/* {props.image.file_name} */}

        </>
    )
}




const mapStateToProps = state => ({
  userImage : state.setting.userImage
});
export default connect(
  mapStateToProps,
  {fetchProfileImage}
)(ProfileImageShow);
