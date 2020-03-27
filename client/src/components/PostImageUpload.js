
import React, { useEffect, useState } from 'react';
import { imagesRef } from '../helpers/firebase';
import axiosWithAuth from '../helpers/axiosWithAuth';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CarImgShow from './CarImgShow';
import CarImageFixShow from './CarImageFixShow';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import ImageCarousel from './ImageCarousel';
import DescriptionIcon from '@material-ui/icons/Description';


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

function PostImageUpload(props) {


    const classes = useStyles();
    const [postImages, setPostImages] = useState([]);
    const [file, setFile] = useState({});

    const [fullopen, setFullOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);


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


    useEffect(() => {

        fetchFixDocuments();

    }, [file]);

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
        e.preventDefault()
        // Create file ref (Example: /documents/:car_id/:file_name)
        const fileRef = imagesRef.child(`${props.carFix.id}/${file.name}`)
        // Upload file
        fileRef.put(file).then((snapshot) => {
            // console.log('Upload success!', snapshot.constructor, snapshot);
            axiosWithAuth().post(`/car_fix/${props.carFix.id}/car_fix_images`, { file_name: file.name })
                .then(res => {
                    fetchFixDocuments();
                    window.location.reload();
                })
                .catch(error => {
                    console.error(error);
                })
        }).catch(err => {
            console.error(err)
        });
    }



  if(props.isCarousel){
        return (
<>

            <Button
            style={{ color: "darkcyan", outline: '0' }}
            onClick={handlefullOpen}
        >
        Images
        </Button>
   
        <ImageCarousel
            open={fullopen}
            handleClose={handlefullClose}
            onClose={handlefullClose}
            carFixImages={carFixImages}
            carFix={props.carFix}
        />
    
</>
        )
    }
    

    else {
        return (
            <>
            <div style={{ height: "200px" }}>
                <h4>Add Image</h4>
                <div style={{ display: 'flex', flexDirection: "column" }}>
                    <form onSubmit={handleSubmitUploaderFixDocuments} style={{ display: 'flex', flexDirection: "column",maxWidth:"200px",justifyContent:"Center"}}>
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



export default PostImageUpload;