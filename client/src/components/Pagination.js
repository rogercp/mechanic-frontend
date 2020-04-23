
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { id } from 'date-fns/esm/locale';
import { Button  } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updatePageNumber } from "../store/actions/postActions";


function Pagination(props) {

  const [numberOfPages, setNumberOfPages] = useState()

  const [pagesWindow, setPagesWindow] = useState(
    [0, 0, 1, 2, 3]
  )

  const [currentpage, setCurrentPage] = useState(props.currentpage)


  useEffect(() => {

    setNumberOfPages(props.numPages)
    // setCurrentPage(props.currentpage)
  },)

console.log(props.currentPage)
  const  goForward = (() => {

    let lastNum = pagesWindow[pagesWindow.length-1]
    let newLastNum = lastNum + 1

    setPagesWindow(
      prevState => (  pagesWindow.slice(1))
    )
    setPagesWindow(
      prevState => (  prevState.concat([newLastNum]))
    )
   
    setCurrentPage(currentpage + 1)
    props.updatePageNumber(currentpage + 1)

  })


  const goBack = (() => {

    let firstNum = pagesWindow[0]
    let newfirstNum = [firstNum - 1]

    setPagesWindow(
      prevState => ( pagesWindow.slice(0,-1))
    )

    setPagesWindow(
      prevState => (  newfirstNum.concat(prevState))
    )
   
    setCurrentPage(currentpage - 1)
    props.updatePageNumber(currentpage - 1)
  })

  const onClickNumber=((num)=>{

    setCurrentPage(num)
    props.updatePageNumber(num)
    const indexOfInComing = pagesWindow.indexOf(num)

    if(indexOfInComing >2){

      let lastNum = pagesWindow[pagesWindow.length-1]
      let newLastNum = lastNum + 1
  
      setPagesWindow(
        prevState => (  pagesWindow.slice(1))
      )
      setPagesWindow(
        prevState => (  prevState.concat([newLastNum]))
      )
     

    }
    else if(indexOfInComing <2){

      let firstNum = pagesWindow[0]
    let newfirstNum = [firstNum - 1]

    setPagesWindow(
      prevState => ( pagesWindow.slice(0,-1))
    )

    setPagesWindow(
      prevState => (  newfirstNum.concat(prevState))
    )
      
    }

  })



  return (
    <>

      <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: "15.65px" }}>
        <div>
          {  currentpage >= 2 ?
           <Button variant="dark" onClick={goBack}>prev</Button>
            :
            null
          }
          
        </div>

        {pagesWindow.map((pageNumber) => {
          return (
            <div>
             {
               (()=>{
                if(pageNumber === 0 || pageNumber < 0){
                  return (
                      null
                  )
                }else if(currentpage === pageNumber ){
                  return (
                   <span>  
                      <Button  variant="primary" >{pageNumber}</Button> 
                     </span>
                  )
                }else if(pageNumber > 0 && pageNumber === numberOfPages || pageNumber < numberOfPages )
                return(
                  <span>               
                     <Button variant="secondary" onClick={()=>onClickNumber(pageNumber)}>{pageNumber}</Button>
                  </span>
                )
             })()
              
             }                      
            </div>
          )

        })


        }

        <div>
          { currentpage < numberOfPages ?
          <Button variant="dark" onClick={goForward}>next</Button>
            :null
          }
          

        </div>
      </div>
    </>
  );
};



const mapStateToProps = state => ({
  currentpage : state.post.currentpage
});
export default connect(
  mapStateToProps,
  { updatePageNumber }
)(Pagination);
