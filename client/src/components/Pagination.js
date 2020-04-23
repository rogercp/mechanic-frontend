
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';




function Pagination(props) {

  const [numberOfPages, setNumberOfPages] = useState(8)

  // const [pagesWindow, setPagesWindow] = useState({

  //   window: [1, 2, 3, 4, 78]

  // })

  const [pagesWindow, setPagesWindow] = useState(

    [1, 2, 3, 4, 78]

  )

  const [currentpage, setCurrentPage] = useState(1)



  // useEffect(() => {

  // },[])


  const  goForward = (() => {

    let lastNum = pagesWindow[pagesWindow.length-1]
    let newLastNum = lastNum + 1

    console.log(newLastNum,"nwefwefwef")
    //  setPagesWindow(
    //   prevState => ({
    //     ...prevState,
    //     window:  prevState.window.shift()
    //   })
    // )

    setPagesWindow(
      prevState => (  pagesWindow.slice(1))
    )

    setPagesWindow(
      prevState => (  prevState.concat([newLastNum]))
    )
    // setPagesWindow(
    //   prevState => ( [...prevState, prevState.push(prevState.pop())])
    // )

    //  setPagesWindow(
    //    prevState => ({
    //   ...prevState,
    //   window: prevState.window.push()
    // })
    // )

    console.log(pagesWindow, "this ")

    // pagesWindow.window.slice(1)
    // pagesWindow.window.push(lastNum++)


    setCurrentPage(currentpage + 1)

  })

  console.log(pagesWindow, "this ")

  const goBack = (() => {


    setCurrentPage(currentpage - 1)

  })



  return (
    <>

      <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: "15.65px" }}>
        <div>
          <button onClick={goBack}>prev</button>
        </div>

        {pagesWindow.map((pageNumber) => {
          return (
            <>
              {currentpage === pageNumber ? <p style={{ color: "#0275d8" }}>{pageNumber}</p> : <p>{pageNumber}</p>}
            </>
          )

        })


        }

        <div>
          <button onClick={goForward}>next</button>

        </div>
      </div>
    </>
  );
};



export default Pagination;
