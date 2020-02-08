

import React, { useEffect, useState } from 'react';
import { imagesRef } from '../helpers/firebase';
import { Image } from 'react-bootstrap';
import { fetchProfileImage } from "../store/actions/settingsActions";
import { connect } from 'react-redux';
import { axiosWithAuth } from '../helpers/index';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function ProfileImageShow(props) {

    const classes = useStyles();

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

  function deleteImage(){

    fileRef.delete().then(()=>{
     console.log("hitting")
     console.log(props.image.id,"422")
      axiosWithAuth().delete(`/users/imagee/${props.image.id}`)
      .then(res => {
        props.fetchProfileImage(userId)       
       })
      .catch(error => {
          console.error(error);
      })
    })
    .catch(err => {
            console.error(err);
    })
}

const username = localStorage.getItem("username");
  if(props.isCirclePic){
    return (
      
      <div style={{display:"flex", alignItems:"center"}}>
      <Avatar alt="Remy Sharp" src={`${thisImage}`} />
        <h5 style={{marginLeft:"5px"}}>{username}</h5>
        </div>
    )
  }else{
    return(
      <>
          
          {/* {(metadata.contentType === 'application/pdf')? <div id="div-pdf" src={`${thisImage}`}></div> :  <img id="reg-image" height="200px" src={`${thisImage}`}></img>} */}
          
         

        <button onClick={deleteImage}>del</button>
          <Image src="holder.js/171x180" rounded id="reg-image"  style={{maxWidth: "100%"}} src={`${thisImage}`}/>
          {/* {props.image.file_name} */}

      </>
  )
  }

    
}




const mapStateToProps = state => ({
});
export default connect(
  mapStateToProps,
  {fetchProfileImage}
)(ProfileImageShow);