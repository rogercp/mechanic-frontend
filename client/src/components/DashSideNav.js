
import React from 'react';
import { connect } from 'react-redux';
import { fetchFilteredPosts } from "../store/actions/postActions";
import { toggleSearchToFalse } from "../store/actions/postActions";

import '../styles/dashsidenav.scss'




function DashSideNav(props) {

  async function filterPostHandler(term) {

    props.fetchFilteredPosts(term)
    props.toggleSearchToFalse()

  };

  return (
    <>
      <div className="mobile2" style={{ width: '100%', zIndex: "100", position: "relative" }}>
        <div className="wrapper" >

          <section className="horizontal-scroll">
            <button id="linkMobile" onClick={() => filterPostHandler('AllPosts')} >All Posts</button>
            <button id="linkMobile" onClick={() => filterPostHandler('Maintence')} >Maintence</button>
            <button id="linkMobile" onClick={() => filterPostHandler('Mods')} >Mods</button>
            <button id="linkMobile" onClick={() => filterPostHandler('Repairs')} >Repairs</button>
            <button id="linkMobile" onClick={() => filterPostHandler('Tips')} >Tips/Tricks</button>
            <button id="linkMobile" onClick={() => filterPostHandler('Exotics')} >Exotics</button>
            <button id="linkMobile" onClick={() => filterPostHandler('German')} >German</button>

          </section>

        </div>

      </div>



      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="sideNav" style={{ width: "200px", height: "500px", }}>
          <section style={{ display: "flex", flexDirection: "column" }}>
            <button id="link" onClick={() => filterPostHandler('AllPosts')} >All Posts</button>
            <button id="link" onClick={() => filterPostHandler('Maintence')} >Maintence</button>
            <button id="link" onClick={() => filterPostHandler('Mods')} >Mods</button>
            <button id="link" onClick={() => filterPostHandler('Repairs')} >Repairs</button>
            <button id="link" onClick={() => filterPostHandler('Tips')} >Tips/Tricks</button>
            <button id="link" onClick={() => filterPostHandler('Exotics')} >Exotics</button>
            <button id="link" onClick={() => filterPostHandler('German')} >German</button>

          </section>

        </div>

      </div>


    </>
  );
};



const mapStateToProps = state => ({

});
export default connect(
  mapStateToProps,
  { fetchFilteredPosts, toggleSearchToFalse }
)(DashSideNav);

