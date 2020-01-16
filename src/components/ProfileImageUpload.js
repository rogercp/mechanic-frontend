/**
 * Dependencies
 */

import React, { useEffect, useState } from 'react';
import { imagesRef } from '../helpers/firebase';
import axiosWithAuth from '../helpers/axiosWithAuth';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ProfileImageShow from './ProfileImageShow';
import DriveEtaIcon from '@material-ui/icons/DriveEta';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
/**
 * Define component
 */

function ProfileImageUpload(props) {

    const classes = useStyles();

    const userId = localStorage.getItem('id');
    
    const [userImage, setUserImage] = useState({});
    const [file, setFile] = useState({});

    useEffect(() => {
    
        fetchProfileImage();
        
    }, [file]);

    async function fetchProfileImage() {
        let userImages = await axiosWithAuth().get(`/users/image/${userId}`)
        setUserImage(userImages.data);
        return userImages;
    }

    function handleInputChanges(e) {
        e.preventDefault();
        const file = e.target.files[0]
        if (!file) {
            return;
        }
        if (file && file.size > 1e8) {
            alert("File is too large. Maximum limit is 100MB.")
            e.target.value = ''
        } else {
            setFile(file);
        }
    }


    function handleSubmitUploaderProfilePicture(e) {
        e.preventDefault()
        // Create file ref (Example: /documents/:car_id/:file_name)
        const fileRef = imagesRef.child(`${userId}/${file.name}`)
        // Upload file
        fileRef.put(file).then((snapshot) => {
            // console.log('Upload success!', snapshot.constructor, snapshot);
            axiosWithAuth().post(`/users/image/${userId}`, { file_name: file.name })
                .then(res => {
                    fetchProfileImage();
                    window.location.reload();               
                 })
                .catch(error => {
                    console.error(error);
                })
        }).catch(err => {
            console.error(err)
        });
    }
    

    // if(userImage.length > 0){
    //     return (
    //     <>
                   
    //      <ProfileImageShow  userId={userId} userImage={userImage}/>
                
    //     </>
    //     )   
    // } 

    if(userImage.length > 0 ){
        return (
        <>
                    {userImage.map((image, index) => {
                        return <ProfileImageShow key={index} userId={userId} image={image}/>
                    })} 
        </>
        )
    }
      
    else{
        return (
            <>
                <div style={{height:"200px"}}>
                {(props.carFix ? <p>no image</p>: null)} 
                <div style={{display:'flex',flexDirection:"column"}}>
                 <form onSubmit={handleSubmitUploaderProfilePicture}> 
                <input required id="uploader" type="file" accept="image/*,.pdf,.doc" onChange={handleInputChanges}></input>
                    <Button
                    variant="contained"
                    name="car_type"
                    color="default"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                    type ="submit"
                    >
                    Upload
                </Button>
                </form>
                </div>
                </div>                
            </>
        )

    }
  
        
    
   
        
    
}

/**
 *  Export component
 */

export default ProfileImageUpload;
