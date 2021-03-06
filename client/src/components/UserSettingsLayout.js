
import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { axiosWithAuth } from '../helpers/index';
import { Button } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import EditIcon from '@material-ui/icons/Edit';
import UserSettingsFormModal from './UserSettingsFormModal'
import Fab from '@material-ui/core/Fab';
import ImageIcon from '@material-ui/icons/Image';
import { connect } from 'react-redux';
import ProfileImageShow from './ProfileImageShow';
import { fetchProfileImage } from "../store/actions/settingsActions";
import Tooltip from '@material-ui/core/Tooltip';


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
        '&:hover': {
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
                        <Button className={classes.margin} variant="secondary" onClick={onClose}>No</Button>
                        <Button
                            className={classes.margin}
                            variant="danger"
                            onClick={() => {
                                const body = localStorage.getItem('id');
                                axiosWithAuth()
                                    .put(`/users/deactivate`, { id: body })
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

    const userId = localStorage.getItem('id');
    const username = localStorage.getItem("username");

    useEffect(() => {

        props.fetchProfileImage(userId)

    }, []);


    return (

        <div style={{ display: "flex",flexDirection:"column"}}>

            <div>
              
            <p>username:{username}</p>
                {props.userImage && props.userImage.length > 0 ?
                    (
                        <div style={{ width: "200px" }}>
                            {props.userImage.map((image, index) => {
                                return <ProfileImageShow image={image} key={index} />
                            })}
                        </div>
                    )
                    : 
                   null
                    }


               </div>

            <div style={{ marginTop: "15px" }}>
                <UserSettingsFormModal
                    open={open}
                    onClose={handleClose}
                    titleText={"User Info"}
                    bodyText={""}
                    redirect={"/settings"}
                    redirectText={"cars"}
                />


                <Tooltip title="Edit Info" placement="left">
                <Fab color="none" aria-label="add" style={{ color: "darkcyan", outline: '0' }} className={classes.margin} >
                    <EditIcon

                        onClick={handleOpen}
                    />
                </Fab>
                </Tooltip>
                <Tooltip title="Delete Account" placement="right">
                <Button className={classes.margin} onClick={submit} variant="danger">
                    Delete Account
            </Button>
            </Tooltip>
            
            </div>


        </div>


    );

};




const mapStateToProps = state => ({
    userImage: state.setting.userImage
});
export default connect(
    mapStateToProps,
    { fetchProfileImage }
)(UserSettingsLayout);
