import React from 'react';
import { NavLink } from 'react-router-dom';
import { DashSideNav } from '../components';
import { Posts, Question, Search } from '../components';



import '../styles/home.scss'


function Home(props) {



  return (

    <div style={{ backgroundColor: "rgb(210, 210, 211)", maxWidth: "1300px", paddingBottom: "700px" }}>

      {!localStorage.getItem("token") ?

        <div className="nav" style={{ backgroundColor: "rgb(210, 210, 211)", maxWidth: "1300px" }}>
          <NavLink id="link" style={{ width: '50px' }} to="/login" activeClassName="active" data-testid="signup-link">
            <i>Login</i>
          </NavLink >
        </div> : null
      }


      <div className="web" style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <div style={{ minWidth: "30%" }}>
          <Question />
          <DashSideNav />
        </div>
        <div style={{ minWidth: "70%" }}>

          <Posts />
        </div>
      </div>

      <div className="mobile" >

        <div >
          <DashSideNav />
        </div>
        <div style={{ margin: "0 auto", marginTop: "10px", display: "block" }} >

          {!localStorage.getItem("token") ?
            <NavLink id="link" style={{ width: '50px' }} to="/login" activeClassName="active" data-testid="signup-link">
              <i>Login</i>
            </NavLink >
            : <Question />
          }

          <Posts />
        </div>

      </div>

    </div>
  )
}


export default Home;