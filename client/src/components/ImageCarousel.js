
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog";
import { Carousel, Image } from 'react-bootstrap';
import CarImageFixShow from './CarImageFixShow';
import PostImageShow from './PostImageShow';



function ImageCarousel(props) {

  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };


  if (props.isImageDelShow) {
    return (
      <>
        <div>
          {props.postImages.map((image, index) => {

            return (

              <div style={{ overflow: "auto", width: "75px", margin: "1px", overflow: "hidden" }} >
                <PostImageShow style={{ backgroundColor: "black" }} key={index} post={props.post} isDeleteableOnClick={true} fetchPostImage={props.fetchPostImage} image={image} />

              </div>

            )

          })}
        </div>
      </>

    );
  } else if (props.isPostImageCarousel) {
    return (
      <div style={{ width: "300px" }}  >
        <Carousel interval={50000000000000000} style={{ backgroundColor: "black" }}>
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
  } else if (props.isCarFixImages) {
    return (
      <Dialog style={{ backgroundColor: "black" }} open={props.open} onClose={props.handleClose} >
        <Carousel style={{ backgroundColor: "black" }}>
          {props.carFixImages.map((image, index) => {
            return (
              <Carousel.Item style={{ overflow: "auto" }} >
                <CarImageFixShow style={{ backgroundColor: "black" }} carFix={props.carFix} key={index} image={image} />
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
