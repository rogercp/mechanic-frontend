
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { id } from 'date-fns/esm/locale';




function Pagination(props) {

  const [numberOfPages, setNumberOfPages] = useState(8)

  const [pagesWindow, setPagesWindow] = useState(
    [0, 0, 1, 2, 3]
  )

  const [currentpage, setCurrentPage] = useState(1)



  useEffect(() => {


    
  },[])


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

  })

  const onClickNumber=((num)=>{

    setCurrentPage(num)
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
           <button onClick={goBack}>prev</button>
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
                      <button style={{ color: "#0275d8" }}>{pageNumber}</button> 
                     </span>
                  )
                }else if(pageNumber > 0 && pageNumber === numberOfPages || pageNumber < numberOfPages )
                return(
                  <span>               
                     <button onClick={()=>onClickNumber(pageNumber)}>{pageNumber}</button>
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
          <button onClick={goForward}>next</button>
            :null
          }
          

        </div>
      </div>
    </>
  );
};



export default Pagination;
