
import React, { useState,useEffect } from 'react';
import { imagesRef } from '../helpers/firebase';
import axiosWithAuth from '../helpers/axiosWithAuth';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { connect } from 'react-redux';
import { fetchProfileImage } from "../store/actions/settingsActions";



const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

function ProfileImageUpload(props) {

    const classes = useStyles();

    const [file, setFile] = useState({});

    const userId = localStorage.getItem('id');

    // useEffect(() => {

    //     props.fetchProfileImage(userId);

    // }, [file]);


    // async function fetchProfileImage() {
    //     let userImages = await axiosWithAuth().get(`/users/image/${userId}`)
    //     setUserImage(userImages.data);
    //     return userImages;
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


    function handleSubmitUploaderProfilePicture(e) {
        e.preventDefault()
        // Create file ref (Example: /documents/:car_id/:file_name)
        const fileRef = imagesRef.child(`${userId}/${file.name}`)
        // Upload file
        fileRef.put(file).then((snapshot) => {
            axiosWithAuth().post(`/users/image/${userId}`, { file_name: file.name })
                .then(res => {
                    props.onClose()
                    props.fetchProfileImage(userId);
                    
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
            <div style={{ height: "200px" }}>
                {(props.carFix ? <p>no image</p> : null)}
                <div style={{ display: 'flex', flexDirection: "column" }}>
                    <form onSubmit={handleSubmitUploaderProfilePicture} style={{ display: 'flex', flexDirection: "column", maxWidth: "200px", justifyContent: "Center" }}>
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


const mapStateToProps = state => ({
    userImage: state.setting.userImage
});
export default connect(
    mapStateToProps,
    { fetchProfileImage }
)(ProfileImageUpload);

