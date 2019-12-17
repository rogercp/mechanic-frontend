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
import DriveEtaIcon from '@material-ui/icons/DriveEta';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
/**
 * Define component
 */

function CarImgUpload(props) {

    const classes = useStyles();
    const [images, setImages] = useState([]);
    const [file, setFile] = useState({});

    useEffect(() => {
        fetchDocuments();
    }, [file]);

    async function fetchDocuments() {
        let images = await axiosWithAuth().get(`/cars/${props.car.id}/images`)
        setImages(images.data);
        return images;
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

    function handleSubmitUploader(e) {
        e.preventDefault()

        // Create file ref (Example: /documents/:car_id/:file_name)
        const fileRef = imagesRef.child(`${props.car.id}/${file.name}`)

        // Upload file
        fileRef.put(file).then((snapshot) => {
            // console.log('Upload success!', snapshot.constructor, snapshot);
            axiosWithAuth().post(`/cars/${props.car.id}/images`, { file_name: file.name })
                .then(res => {
                    fetchDocuments();
                    window.location.reload();               
                 })
                .catch(error => {
                    console.error(error);
                })
        }).catch(err => {
            console.error(err)
        });
    }
    

    if(images.length > 0 ){
        return (
        <>
                
                    {images.map((image, index) => {
                        return <CarImgShow key={index} car={props.car} image={image}/>
                    })}
               
                
               
        </>
        )
    }else{
        return (
            <>
                <div style={{height:"200px"}}>
                

                <DriveEtaIcon style={{fontSize:"100px"}}/>

               
                
                <div style={{display:'flex',flexDirection:"column"}}>
                <form onSubmit={handleSubmitUploader}>
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

export default CarImgUpload;
