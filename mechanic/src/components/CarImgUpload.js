/**
 * Dependencies
 */

import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { imagesRef } from '../helpers/firebase';
import axiosWithAuth from '../helpers/axiosWithAuth';

/**
 * Define component
 */

function CarImgUpload(props) {
    const [file, setFile] = useState({});

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
        const fileRef = imagesRef.child(`${props.case.id}/${file.name}`)

        // Upload file
        fileRef.put(file).then((snapshot) => {
            console.log('Upload success!', snapshot.constructor, snapshot);
            axiosWithAuth().post(`/cars/${props.car.id}`, { file_name: file.name })
                .then(res => {
                    console.log("success")
                })
                .catch(error => {
                    console.error(error);
                })
        })
    }

   
        return (
            <>

                <form onSubmit={handleSubmitUploader}>
                    <input required id="uploader" type="file" accept="image/*,.pdf,.doc" onChange={handleInputChanges}></input>
                    <button type="submit">Upload</button>
                </form>
            </>
        )
    
}

/**
 *  Export component
 */

export default CarImgUpload;
