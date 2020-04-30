
// import React, { useState } from "react";
// import Dialog from "@material-ui/core/Dialog";
// import { makeStyles } from '@material-ui/core/styles';
// import FormControl from '@material-ui/core/FormControl';
// import Button from '@material-ui/core/Button';
// import CarImgUpload from './CarImgUpload'
// import CarFixImgUpload from './CarFixImgUpload'

// import '../styles/fullscreenmodal.scss'



// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     width: 270,
//     height: 600
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
//   button: {
//     margin: theme.spacing(1),
//   },

// }));




// function ImageUploadModal(props) {
//   const classes = useStyles();


//   const [open, setOpen] = useState(false);
//   const [errorOpen, setErrorOpen] = useState(false);


//   function handleOpen() {
//     setOpen(true);
//   }
//   function handleErrorOpen() {
//     setErrorOpen(true);
//   }
//   function handleClose() {
//     setOpen(false);
//   }
//   function handleErrorClose() {
//     setErrorOpen(false);
//   }

//   function handleBothClosesForCars() {
//     props.onclose()
//     props.handleClose()
//   }

//   function handleBothClosesForMaintence() {
//     props.onclose()
//     props.handleClose()
//   }

//   return (
//     <>
//       <Dialog open={props.open} onClose={props.handleClose}  >
//         <h2>Upload Image</h2>

//         <FormControl className={classes.formControl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
//           {props.isCar ?
//             <>
//               <CarImgUpload car={props.car} isForm={true} />
//               <Button
//                 className={classes.button}
//                 variant="contained"
//                 color="primary"
//                 size="large"
//                 onClick={handleBothClosesForCars}>

//                 Skip
//      </Button>
//             </>
//             : null}

//           {props.isMaintenence ?
//             <>
//               <CarFixImgUpload carFix={props.currentMaintenence} isForm={true} />
//               <Button
//                 className={classes.button}
//                 variant="contained"
//                 color="primary"
//                 size="large"
//                 onClick={handleBothClosesForMaintence}>

//                 Skip
//      </Button>
//             </>
//             : null}





//         </FormControl>
//       </Dialog>
//     </>
//   )
// }


// export default ImageUploadModal;