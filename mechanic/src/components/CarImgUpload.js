// /**
//  * Dependencies
//  */

// import React, { useEffect, useState } from 'react';
// import Typography from '@material-ui/core/Typography';
// import { documentsRef } from '../helpers/firebase';
// import axioswithAuth from '../helpers/axioswithAuth';
// import mixpanel from '../helpers/mixpanel';
// import CaseDocument from './CaseDocument';

// /**
//  * Define component
//  */

// function CaseDocumentsList(props) {
//     const [file, setFile] = useState({});

//     function handleInputChanges(e) {
//         e.preventDefault();
//         const file = e.target.files[0]
//         if (!file) {
//             return;
//         }
//         if (file && file.size > 1e8) {
//             alert("File is too large. Maximum limit is 100MB.")
//             e.target.value = ''
//         } else {
//             setFile(file);
//         }
//     }

//     // function handleSubmitUploader(e) {
//     //     e.preventDefault()

//     //     // Create file ref (Example: /documents/:car_id/:file_name)
//     //     const fileRef = documentsRef.child(`${props.case.id}/${file.name}`)

//     //     // Upload file
//     //     fileRef.put(file).then((snapshot) => {
//     //         console.log('Upload success!', snapshot.constructor, snapshot);
//     //         axioswithAuth().post(``, { file_name: file.name })
//     //             .then(res => {
        
//     //             })
//     //             .catch(error => {
//     //                 console.error(error);
//     //             })
//     //     })
//     // }

   
//         return (
//             <>
//                 <Typography>There are no documents currently uploaded. Upload relevant case documents by clicking the button below.</Typography>

//                 <form onSubmit={handleSubmitUploader}>
//                     <input required id="uploader" type="file" accept="image/*,.pdf,.doc" onChange={handleInputChanges}></input>
//                     <button type="submit">Upload</button>
//                 </form>
//             </>
//         )
    
// }

// /**
//  *  Export component
//  */

// export default CaseDocumentsList;
