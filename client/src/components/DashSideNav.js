
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, Link } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import SettingsIcon from '@material-ui/icons/Settings';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import Posts from './Posts';
import { axiosWithAuth } from '../helpers/index';


import  '../styles/dashsidenav.scss'




function DashSideNav(props) {
  const [state, setState] = React.useState({
    right: false,
  });
  
  const [filterTerm, setFilterTerm] = React.useState('')


  async function filterPostHandler (term) {
    console.log(term)
    axiosWithAuth()
        .post('/post/filterCategory', {category:term})
        .then(res => {  
          console.log("success")
        })
        .catch(err => { 
          console.log("sucess ")  
        });
  };
  



    return (
      <>
        <div className="mobile2" style={{width: '100%'}}>
            <div className="wrapper" >
            
            <section className="horizontal-scroll">
            <button id="link"  onClick={() => filterPostHandler('Maintence')} >Maintence</button>
            <button  id="link"  onClick={() => filterPostHandler('Mods')} >Mods</button>
            <button  id="link"  onClick={() => filterPostHandler('Repairs')} >Repairs</button>
            <button  id="link"  onClick={() => filterPostHandler('Tips')} >Tips</button>
            <button  id="link"  onClick={() => filterPostHandler('Exotics')} >Exotics</button>
            <button  id="link"  onClick={() => filterPostHandler('German')} >German</button>



            </section>




            </div>

        </div>
           


<div style={{display:"flex", flexDirection:"row"}}>
            <div className="sideNav" style={{width:"200px",height:"500px",}}>
           <section style={{display:"flex", flexDirection:"column"}}>
           <button id="link"  onClick={() => filterPostHandler('Maintence')} >Maintence</button>
            <button  id="link"  onClick={() => filterPostHandler('Mods')} >Mods</button>
            <button  id="link"  onClick={() => filterPostHandler('Repairs')} >Repairs</button>
            <button  id="link"  onClick={() => filterPostHandler('Tips')} >Tips</button>
            <button  id="link"  onClick={() => filterPostHandler('Exotics')} >Exotics</button>
            <button  id="link"  onClick={() => filterPostHandler('German')} >German</button>


   
           </section>

         
   
   
   
   
           </div>

           

    </div>
          

      </>
    );
};



export default DashSideNav;
