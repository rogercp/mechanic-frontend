
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
import PostImageShow from './PostImageShow';


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

function PostImageUpload(props) {
     
    

    const classes = useStyles();
    const [postImages, setPostImages] = useState([]);
    const [file, setFile] = useState({});
    const [isPostImageCarousel, setIsPostImageCarousel] = useState(true)
    const [fullopen, setFullOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    const [isLoading,setIsLoading] = useState(false)


    const handlefullOpen = () => {
        setIsPostImageCarousel(false)
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

        fetchPostImages(props.post.id);

     // on post change re render this component with the correct images
    }, [file,props.post]);

    // useEffect(() => {
    
    //         fetchPostImagesAfterSubmit(props.post.id);
    
    // }, []);




    async function fetchPostImages(id) {
        let postImages = await axiosWithAuth().get(`/post/${id}/post_images`)
        console.log(postImages,"fixIMages")
        setPostImages(postImages.data);
    }


    // async function fetchPostImagesAfterSubmit(id) {
    //     // 
    //     axiosWithAuth().get(`/post/${id}/post_images`)
    //     .then(res =>{
    //         console.log(res.data,"this is the data")
    //         setPostImages(res.data);
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
        
    // }

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

    // console.log(props.post.id,"psotsssss")

    function handleSubmitUploaderFixDocuments(e) {
        setIsLoading(true)
        e.preventDefault()
        // Create file ref for firebase
        const fileRef = imagesRef.child(`${props.post.id}/${file.name}`)
        // Upload file to googke
        fileRef.put(file).then((snapshot) => {
            // send reference to backend
            axiosWithAuth().post(`/post/${props.post.id}/post_images`, { file_name: file.name })
                .then(res => {
                    setIsLoading(false)
                    fetchPostImages(props.post.id);
                    
                     
                })
                .catch(error => {
                    console.error(error);
                })
        }).catch(err => {
            console.error(err)
        });
    }



    if (props.isCarousel) {
        return (
            <>

                <ImageCarousel
                    style={{ backgroundColor: "red", maxWidth: "100px" }}
                    isImageDelShow={true}
                    postImages={postImages}
                    post={props.post}
                    fetchPostImages={fetchPostImages}

                />
                 <div style={{ height: "200px" }}>
                    <h4>Add Image</h4>
                    <div style={{ display: 'flex', flexDirection: "column" }}>
                        <form onSubmit={handleSubmitUploaderFixDocuments} style={{ display: 'flex', flexDirection: "column", maxWidth: "200px", justifyContent: "Center" }}>
                            
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
    else if (props.isCarouselForPost) {
        
            
            return (
                <>

                    <ImageCarousel
                        isPostImageCarousel={isPostImageCarousel}
                        postImages={postImages}
                        post={props.post}
                        fetchPostImage={fetchPostImages}

                    />

                </>
            )
        

    } 

   
    else {
        return (
            <>
                <Button
                    style={{ color: "darkcyan", outline: '0' }}
                    onClick={handlefullOpen}
                >
                    Expand Images
                    </Button>

                <ImageCarousel
                    open={fullopen}
                    handleClose={handlefullClose}
                    onClose={handlefullClose}
                    postImages={postImages}
                    post={props.post}
                    fetchPostImage={fetchPostImages}

                />

            </>
        )

    }




}



export default PostImageUpload;
