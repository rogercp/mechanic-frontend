
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Dialog from "@material-ui/core/Dialog";
import { Carousel, Image } from 'react-bootstrap';
import CarImageFixShow from './CarImageFixShow';
import PostImageShow from './PostImageShow';




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
//  const [fullScreenActive,setFullScreenActive] = React.useState(false)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  // function triggerFullScreen(e){
  // e.preventDefault()
  //   setFullScreenActive(false)
  // }

if(props.isImageDelShow){
  return (
    <>
      <div>
        {props.postImages.map((image, index) => {

          return (
       
            <div style={{ overflow: "auto",width:"75px",margin:"1px",overflow:"hidden"}} >
              <PostImageShow style={{ backgroundColor: "black" }} key={index} post={props.post} isDeleteableOnClick={true} fetchPostImage={props.fetchPostImage} image={image} />
             
            </div>
         
          )

        })}
      </div>
</>

  );
}else if(props.isPostImageCarousel){
  return (
    <div style={{width:"300px"}}  >
  <Carousel interval={50000000000000000} style={{ backgroundColor: "black"}}>
  {props.postImages.map((image, index) => {
    return (
      
      <Carousel.Item style={{ overflow: "auto" }} >
        <PostImageShow style={{ backgroundColor: "black" }} onClick={props.open} key={index} post={props.post} image={image} />
      </Carousel.Item>
    
    )
  })}
</Carousel>
</div>

  )
}
else {
  return (
    <Dialog style={{ backgroundColor: "black" }} open={props.open} onClose={props.handleClose} >
      <Carousel style={{ backgroundColor: "black" }}>
        {props.postImages.map((image, index) => {
          return (
            <Carousel.Item style={{ overflow: "auto" }} >
              <PostImageShow style={{ backgroundColor: "black" }} key={index} post={props.post} image={image} />
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
  
}

export default ImageCarousel;
