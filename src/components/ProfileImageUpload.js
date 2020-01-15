/**
 * Dependencies
 */

import React, { useEffect, useState } from 'react';
import { imagesRef } from '../helpers/firebase';
import axiosWithAuth from '../helpers/axiosWithAuth';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CarImgShow from './CarImgShow';
import CarImageFixShow from './CarImageFixShow';
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
    const [carFixImages, setCarFixImages] = useState([]);
    const [file, setFile] = useState({});

    useEffect(() => {
    
        fetchFixDocuments();
        
    }, [file]);

    async function fetchProfileImage() {
        let fixImages = await axiosWithAuth().get(`/car_fix/${props.carFix.id}/car_fix_images`)
        setCarFixImages(fixImages.data);
        return fixImages;
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
        const fileRef = imagesRef.child(`${props.carFix.id}/${file.name}`)
        // Upload file
        fileRef.put(file).then((snapshot) => {
            // console.log('Upload success!', snapshot.constructor, snapshot);
            axiosWithAuth().post(`/car_fix/${props.carFix.id}/car_fix_images`, { file_name: file.name })
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

export default CarFixImgUpload;
