/**
 * Dependencies
 */

import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { imagesRef } from '../helpers/firebase';
import axiosWithAuth from '../helpers/axiosWithAuth';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CarImgShow from './CarImgShow';


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

console.log(images,"images")
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
        console.log(props.car.id,"carid")

        // Create file ref (Example: /documents/:car_id/:file_name)
        const fileRef = imagesRef.child(`${props.car.id}/${file.name}`)

        // Upload file
        fileRef.put(file).then((snapshot) => {
            console.log('Upload success!', snapshot.constructor, snapshot);
            axiosWithAuth().post(`/cars/${props.car.id}/images`, { file_name: file.name })
                .then(res => {
                    fetchDocuments();
                    console.log("success")
                    window.location.reload();               
                 })
                .catch(error => {
                    console.error(error);
                })
        })
    }

    if(images.length > 0 ){
        return (
        <>
                
                    {images.map((image, index) => {
                        return <CarImgShow key={index} car={props.car} image={image}/>
                    })}
               
                
                <div id="div-pdf"></div>
                <img id="reg-image" height="200px"></img>
        </>
        )
    }else{
        return (
            <>

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
                
            </>
        )
    }
   
        
    
}

/**
 *  Export component
 */

export default CarImgUpload;
