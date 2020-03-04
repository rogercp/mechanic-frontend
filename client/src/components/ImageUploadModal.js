
import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CarMaintenceForm from './CarMaintenenceForm';
import CarMaintenceShow from './CarMaintenenceShow';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { green } from '@material-ui/core/colors';
import CarFixAddModal from './CarFixAddModal';
import { axiosWithAuth } from '../helpers/index';
import CarCard from './CarCard'
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CarImgUpload from './CarImgUpload'


import '../styles/fullscreenmodal.scss'



const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        width: 270,
        height:600
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
      button: {
        margin: theme.spacing(1),
      },

}));




function ImageUploadModal(props) {
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




  return (
    <>
      <Dialog   open={props.open} onClose={props.handleClose}  >
      <h2>Upload Image</h2>
      <FormControl className={classes.formControl} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          
      <CarImgUpload/>


      <Button
      className={classes.button} 
      variant="contained"
      color="primary"
      size="large">
            Skip
     </Button>
           

        </FormControl>
        </Dialog>
    </>
  )
}


export default ImageUploadModal;