
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog";
import { Carousel, Image } from 'react-bootstrap';
import CarImageFixShow from './CarImageFixShow';
import PostImageShow from './PostImageShow';
import CarImageShow from './CarImgShow'

// Component soley responsible for organizing images into a carousel or order in a certain manner
// Data coming from multiple components
function ImageCarousel(props) {


  if (props.isImageDelShow) {
    return (
      <>
        <div>
          {props.postImages.map((image, index) => {

            return (

              <div style={{ overflow: "auto", width: "75px", margin: "1px", overflow: "hidden" }} >
                <PostImageShow style={{ backgroundColor: "black" }} key={index} post={props.post} isDeleteableOnClick={true}  postImages={props.postImages}    fetchPostImages={props.fetchPostImages} image={image} />

              </div>

            )

          })}
        </div>
      </>

    );
  } 


  else if(props.isImageDelShowForFixes){

    return (
      <>
        <div>
          {props.carFixImages.map((image, index) => {

            return (

              <div style={{ overflow: "auto", width: "75px", margin: "1px", overflow: "hidden" }} >
                <CarImageFixShow style={{ backgroundColor: "black" }} carFix={props.carFix} key={index} image={image} isDeleteableOnClick={true} fetchFixDocuments={props.fetchFixDocuments}/>

              </div>

            )

          })}
        </div>
      </>

    );
  }


  else if(props.isImageDelShowForCars){

    return (
      <>
        <div>
          {props.carImages.map((image, index) => {

            return (

              <div style={{ overflow: "auto", width: "75px", margin: "1px", overflow: "hidden" }} >
                <CarImageShow style={{ backgroundColor: "black" }} carFix={props.carFix} key={index} image={image} isDeleteableOnClick={true} car={props.car} fetchCarImages={props.fetchCarImages}/>

              </div>

            )

          })}
        </div>
      </>

    );
  }

  else if (props.isPostImageCarousel) {
    return (
      <div style={{ width: "100%" }}  >
        <Carousel interval={50000000000000000} style={{ backgroundColor: "black" }}>
          {props.postImages.map((image, index) => {
            return (

              <Carousel.Item style={{ overflow: "auto" }} >
                <PostImageShow style={{ backgroundColor: "black" }} onClick={props.open} key={index} postImages={props.postImages}  post={props.post} image={image} />
              </Carousel.Item>

            )
          })}
        </Carousel>
      </div>

    )
  } 
  
  else if (props.isCarFixImages) {
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


  else if (props.isCarImage) {
    return (
      <div style={{ width: "300px" }}  >
      <Carousel interval={50000000000000000} style={{ backgroundColor: "black" }}>
          {props.carImages.map((image, index) => {
            return (
              <Carousel.Item style={{ overflow: "auto" }} >
                <CarImageShow style={{ backgroundColor: "black" }} car={props.car} key={index} image={image} />
                <Carousel.Caption>
                  {/* <h3>First slide label</h3> */}
                </Carousel.Caption>
              </Carousel.Item>
            )

          })}
        </Carousel>
      </div>
    );

  }


  else {
    return (
      <Dialog style={{ backgroundColor: "black" }} open={props.open} onClose={props.handleClose} >
        <Carousel style={{ backgroundColor: "black" }}>
          {props.postImages.map((image, index) => {
            return (
              <Carousel.Item style={{ overflow: "auto" }} >
                <PostImageShow style={{ backgroundColor: "black" }} key={index} post={props.post}  postImages={props.postImages}  image={image} />
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
