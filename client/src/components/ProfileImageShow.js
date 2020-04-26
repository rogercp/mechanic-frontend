

import React, { useEffect, useState } from 'react';
import { imagesRef } from '../helpers/firebase';
import { Image } from 'react-bootstrap';
import { fetchProfileImage } from "../store/actions/settingsActions";
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import ImageIcon from '@material-ui/icons/Image';



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

  const [thisImage, setThisimage] = useState(null)

  const userId = localStorage.getItem('id');


  var fileRef = null

  if (props.isPost === true) {
    fileRef = imagesRef.child(`${props.post.user_id}/${props.post.file_name_profile}`);
  } else {
    fileRef = imagesRef.child(`${userId}/${props.image.file_name_profile}`);
  }


  useEffect(() => {
    setThisimage(null)
    getImg()
  }, [props.post]);

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


  // function deleteImage() {

  //   fileRef.delete().then(() => {

  //     axiosWithAuth().delete(`/users/imagee/${props.image.file_name_profile}`)
  //       .then(res => {
  //         props.fetchProfileImage(userId)
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       })
  //   })
  //     .catch(err => {
  //       console.error(err);
  //     })
  // }

  const username = localStorage.getItem("username");

  if (props.isCirclePic && props.isPostPic) {
    return (

      <>
        {thisImage ?
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div><Avatar alt="Remy Sharp" src={`${thisImage}`} /></div>
            <div style={{ marginTop: "8px" }}><p style={{ marginLeft: "5px" ,color:"#0275d8"}}>{props.isPost ? props.post.user_name : username}</p>
            </div>
          </div>

          :
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ImageIcon style={{ fontSize: "50px" }} />
            {props.post.user_name} 
          </div>}
      </>




    )
  }if(props.isCirclePic) {
    
    return (

      <>
        {thisImage ?
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div><Avatar alt="Remy Sharp" src={`${thisImage}`} /></div>
            <div style={{ marginTop: "8px" }}><p style={{ marginLeft: "5px" ,color:"#0275d8" }}>{props.isPost ? props.post.user_name : username}</p>
            </div>
          </div>

          :
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ImageIcon style={{ fontSize: "50px" }} />
            {username} 
          </div>}
      </>




    )

  }else {
    return (
      <>


        {thisImage ?
          <div>
            {/* {(metadata.contentType === 'application/pdf')? <div id="div-pdf" src={`${thisImage}`}></div> :  <img id="reg-image" height="200px" src={`${thisImage}`}></img>} */}

            {/* <button onClick={deleteImage}>del</button> */}

            <Image src="holder.js/171x180" rounded id="reg-image" style={{ maxWidth: "100%" }} src={`${thisImage}`} />
            {/* {props.image.file_name} */}
          </div>
          : <div>
            <ImageIcon style={{ fontSize: "200px" }} />
          </div>}

      </>
    )
  }


}




const mapStateToProps = state => ({
});
export default connect(
  mapStateToProps,
  { fetchProfileImage }
)(ProfileImageShow);