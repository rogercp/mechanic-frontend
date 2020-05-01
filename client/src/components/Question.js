

import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Add';
import PostAddModal from './PostAddModal';
import PostForm from './PostForm'
import Tooltip from '@material-ui/core/Tooltip';
import { confirmAlert } from 'react-confirm-alert';
import { Button } from 'react-bootstrap';

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




function Question(props) {

  const classes = useStyles();

  const [cars, setCars] = useState([])
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  /**
   * Modal Methods
   */

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


  function handleOpen() {

    if (localStorage.getItem("token") === null && localStorage.getItem("username") === null ) {
      props.history.push('/login')
    }
    if(localStorage.getItem("username") === null && localStorage.getItem("token") ){

      confirmAlert({
        customUI: ({ onClose }) => {
            return (
                <div className='custom-ui' >

                  <h3>You need a username to Post. Click the edit icon to create one.</h3>
                    <Button className={classes.margin} variant="secondary" onClick={onClose}>Close</Button>

                </div>
            );
        }
    });
      props.history.push('/settings')
    }
    setOpen(true);

  }


  





  return (
    <>
   
      <Tooltip title="Ask Question" placement="right">
        <Fab color="none" aria-label="add" style={{ color: "darkcyan", outline: '0' }} className={classes.margin}>
          <EditIcon
          onClick={handleOpen} 
          />

        </Fab>
      </Tooltip>




      <PostForm
        open={open}
        onClose={handleClose}
        titleText={"Post Form"}
        bodyText={""}
        redirect={"/mycars"}
        redirectText={"cars"}
      />


    </>
  );
};



export default withRouter(Question);
