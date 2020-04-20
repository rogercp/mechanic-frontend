
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


function CarImgUpload(props) {

    const classes = useStyles();
    const [carImages, setCarImages] = useState({});
    const [carFixImages, setCarFixImages] = useState([]);
    const [file, setFile] = useState({});

    useEffect(() => {
        if (props.car) {
            fetchCarImages();
        }

    }, []);


    async function fetchCarImages() {
        let images = await axiosWithAuth().get(`/cars/${props.car.id}/images`)
        setCarImages(images.data);
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
                    fetchCarImages();
                    window.location.reload();
                })
                .catch(error => {
                    console.error(error);
                })
        }).catch(err => {
            console.error(err)
        });
    }




    if (props.isForFrontCardView) {
        return (
            <>
            {carImages.length > 0 ?
                <>
                {carImages.map((image, index) => {
                    return <CarImgShow key={index} car={props.car} image={image} />
                })}
                </>
                :
                <>
                
                <DriveEtaIcon style={{ fontSize: "200px" }} />

                </>
            }
            
                
         </>   
        )
    }

    else {
        return (
            <>
                <div style={{ height: "200px" }}>
                    

                    {props.isForm ? <div>
                        <form onSubmit={(handleSubmitUploader)} style={{ display: 'flex', flexDirection: "column", maxWidth: "200px", justifyContent: "Center" }}>
                            <input required id="uploader" type="file" accept="image/*,.pdf,.doc" onChange={handleInputChanges}></input>
                            <Button
                                variant="contained"
                                name="car_type"
                                color="default"
                                className={classes.button}
                                startIcon={<CloudUploadIcon />}
                                type="submit"
                            >
                                Upload
            </Button>
                        </form>
                    </div> : null}


                </div>





            </>
        )
    }



}



export default CarImgUpload;
