import ProfileImageUpload from './ProfileImageUpload';
import React, { useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { axiosWithAuth } from '../helpers/index';
import { Button } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import EditIcon from '@material-ui/icons/Edit';


function UserSettingsLayout(props) {
  

    const submit = (e) => {
        e.preventDefault();
            confirmAlert({
                customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui'>
                    <h1>Are you sure?</h1>
                    <Button variant="secondary" onClick={onClose}>No</Button>
                    <Button
                     variant="danger"
                        onClick={() => {
                            axiosWithAuth()
                            .post(`/users/deactivate`)
                            .then(res => {  
                                onClose();
                            })
                            .catch(err => {  
                                onClose();    
                            });  
                        
                        }}
                    >
                        Yes
                    </Button>
                    </div>
                );
                }
            });
        
      };
    

     
    
   

    return (
      <>
        <div >
        <EditIcon/>
        <ProfileImageUpload/>
     
        <div><p>Delete Account</p><Button onClick={submit} variant="danger">Delete</Button></div>

        </div>

        <div>



        </div>
      </>
    );
};



export default UserSettingsLayout;
