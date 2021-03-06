

import React, { useEffect, useState } from 'react';
import { imagesRef } from '../helpers/firebase';
import axiosWithAuth from '../helpers/axiosWithAuth';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ImageCarousel from './ImageCarousel';


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

function CarFixImgUpload(props) {


    const classes = useStyles();
    const [carFixImages, setCarFixImages] = useState([]);
    const [file, setFile] = useState({});

    const [fullopen, setFullOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    const [isLoading,setIsLoading] = useState(false)

    // modal methods
    const handlefullOpen = () => {
        setFullOpen(true);
    };
    const handlefullClose = () => {
        setFullOpen(false);
    };

    function handleErrorClose() {
        setErrorOpen(false);
    }

    function handleErrorOpen() {
        setErrorOpen(true);
    }
    // 

    // React.useCallback (()=>{

    //     async function fetchFixDocuments() {
    //            let fixImages = await axiosWithAuth().get(`/car_fix/${props.carFix.id}/car_fix_images`)
    //             setCarFixImages(fixImages.data);
    //             return fixImages;
    //          }

    // },[])



    useEffect(() => {


        fetchFixDocuments()

    }, []);

    async function fetchFixDocuments() {
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


    function handleSubmitUploaderFixDocuments(e) {
        setIsLoading(true)
        e.preventDefault()
        // Create file ref for firebase
        const fileRef = imagesRef.child(`${props.carFix.id}/${file.name}`)
        // Upload file to google
        fileRef.put(file).then((snapshot) => {
            // send reference to the backend
            axiosWithAuth().post(`/car_fix/${props.carFix.id}/car_fix_images`, { file_name: file.name })
                .then(res => {
                    setIsLoading(false)
                    fetchFixDocuments();
                })
                .catch(error => {
                    console.error(error);
                })
        }).catch(err => {
            console.error(err)
        });
    }


    // data coming from CardMaintenceForm for this first statement
    if (props.isCarousel) {
        return (
            <>
            {carFixImages.length > 0 ?
            <>
                <Button
                style={{ color: "darkcyan", outline: '0' }}
                onClick={handlefullOpen}
                 >
                Images
                 </Button>

            <ImageCarousel
                isCarFixImages={true}
                open={fullopen}
                handleClose={handlefullClose}
                onClose={handlefullClose}
                carFixImages={carFixImages}
                carFix={props.carFix}
            />
            </>
        :null}
                
            </>
        )
    }

else{
        return (
            <>
                

                    <ImageCarousel
                    style={{ backgroundColor: "red", maxWidth: "100px" }}
                    isImageDelShowForFixes={true}
                    carFixImages={carFixImages}
                    carFix={props.carFix}
                    fetchFixDocuments={fetchFixDocuments}
                />
                <div style={{ height: "200px" }}>
                <h4>Add Image</h4>
                    <div style={{ display: 'flex', flexDirection: "column" }}>
                        <form onSubmit={handleSubmitUploaderFixDocuments} style={{display: 'flex', flexDirection: "column", maxWidth: "200px", justifyContent: "Center" }}>
                            
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
                    </div>
                </div>


            </>
        )
    }




}



export default CarFixImgUpload;
