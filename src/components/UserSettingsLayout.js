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
import UserSettingsFormModal from './UserSettingsFormModal'
import Fab from '@material-ui/core/Fab';




const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
      position: 'relative',
      minHeight: 200,
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    
    margin: {
      margin: theme.spacing(1),
      boxShadow: "0 16px 19px rgba(0,0,0,0.2), 0 15px 15px rgba(0,0,0,0.2)",
      '&:hover':{
          boxShadow: "0 2px 4px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.22)"
        },
    },
   
  }));

function UserSettingsLayout(props) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
  
   
  
    function handleOpen() {
        setOpen(true);
    }
    function handleErrorOpen() {
        setErrorOpen(true);
    }
    function handleClose() {
        setOpen(false);
    }
    function handleErrorClose() {
        setErrorOpen(false);
    }
  
    

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
        <div style={{display:"flex",flexWrap:"wrap"}}>

        <div> <p>userName</p><p>exampleusername{}</p>
        <ProfileImageUpload/></div>
    
        <div>
        <UserSettingsFormModal
            open={open}
            onClose={handleClose}
            titleText={"User Info"}
            bodyText={""}
            redirect={"/settings"}
            redirectText={"cars"}
          />
          <p>Edit Info</p>
          <Fab color="none" aria-label="add"  style={{color:"darkcyan",  outline:'0'}} className={classes.margin} >
                <EditIcon
            onClick={handleOpen}
           />
            </Fab>
            <p>Delete Account</p>
            <Button  className={classes.margin} onClick={submit} variant="danger">
            Delete
            </Button>
            </div>
            

        </div>

        <div>



        </div>
      </>
    );
};



export default UserSettingsLayout;
