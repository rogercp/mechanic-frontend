/**
 * Dependencies
 */

import React from 'react';
import { imagesRef } from '../helpers/firebase';


/**
 *  Import styles
 */



/**
 * Define component
 */

function UserImages(props) {
    const fileRef = documentsRef.child(`images/${props.document.file_name}`);

    return (
      <>
        
        

      </>
    );
};

/**
 * Export component
 */

export default UserImages;