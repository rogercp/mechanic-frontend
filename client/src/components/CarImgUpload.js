
import React, { useEffect, useState } from 'react';
import { imagesRef } from '../helpers/firebase';
import axiosWithAuth from '../helpers/axiosWithAuth';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import ImageCarousel from './ImageCarousel'

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));


function CarImgUpload(props) {

    const classes = useStyles();
    const [carImages, setCarImages] = useState([]);
    const [file, setFile] = useState({});
    // loading wheel
    const [isLoading,setIsLoading] = useState(false)

    useEffect(() => {

        fetchCarImages();
 
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
        setIsLoading(true)
        e.preventDefault()
        // Create file ref for firebase
        const fileRef = imagesRef.child(`${props.car.id}/${file.name}`)
        // Upload file to google
        fileRef.put(file).then((snapshot) => {
            // send reference to backend
            axiosWithAuth().post(`/cars/${props.car.id}/images`, { file_name: file.name })
                .then(res => { 
                    setIsLoading(false) 
                    fetchCarImages();
                })
                .catch(error => {
                    console.error(error);
                })
        }).catch(err => {
            console.error(err)
        });
    }



    // data for this next statement is coming from CarCard Compo9nent
    if ( props.isCarCardCarousel) {
        return (


            <>
            {carImages.length > 0 ?
                <ImageCarousel  car={props.car} carImages={carImages}  isCarImage={true}/>
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

            <ImageCarousel
                    style={{ backgroundColor: "red", maxWidth: "100px" }}
                    isImageDelShowForCars={true}
                    carImages={carImages}
                    car={props.car}
                    fetchCarImages={fetchCarImages}
                />

                <div style={{ height: "200px" }}>
                    

                    {props.isForm ? <div>
                        <form onSubmit={(handleSubmitUploader)} style={{ display: 'flex', flexDirection: "column", maxWidth: "200px", justifyContent: "Center" }}>
                    
                        {isLoading ? 
                         <div class="spinner-border" role="status">
                         <span class="sr-only">Loading...</span>
                         </div>
                            :null}
                       
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
