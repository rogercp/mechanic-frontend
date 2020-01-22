
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Dialog from "@material-ui/core/Dialog";
import { Carousel,Image } from 'react-bootstrap';
import CarImageFixShow from './CarImageFixShow';




// const useStyles = makeStyles(theme => ({
//   root: {
//     maxWidth: 400,
//     flexGrow: 1,
//   },
//   header: {
//     display: 'flex',
//     alignItems: 'center',
//     height: 50,
//     paddingLeft: theme.spacing(4),
//     backgroundColor: theme.palette.background.default,
//   },
//   img: {
//     display: 'block',
//   },
// }));

function ImageCarousel(props) {
  // const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };



  return (
    <Dialog open={props.open} onClose={props.handleClose} >
        <Carousel >
              {props.carFixImages.map((image, index) => {

               return (
                <Carousel.Item style={{overflow:"auto"}} >
                <CarImageFixShow  key={index}  carFix={props.carFix} image={image}/>
                  <Carousel.Caption>
                    {/* <h3>First slide label</h3> */}
                  </Carousel.Caption>
                </Carousel.Item>
                ) 
                
                    })}
        </Carousel>

    </Dialog>
  );
}

export default ImageCarousel;
