
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../helpers/index';
import axios from 'axios'
import { fetchFixes } from "../store/actions/carMaintenenceActions";
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import '../styles/fullscreenmodal.scss'


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    backgroundColor: "white",
    borderRadius: "10%",
    boxShadow: "0 16px 19px rgba(0,0,0,0.2), 0 15px 15px rgba(0,0,0,0.2)",
    '&:hover': {
      boxShadow: "0 2px 4px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.22)"
    },
  },

}))



function Comment(props) {

  const classes = useStyles();
  const [usernameforpost, setUsernameforpost] = useState()


  useEffect(() => {
    fetchCommentUserName()
  }, [])

// fetches indivial username per posts 
  const fetchCommentUserName = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/username/${props.comment.user_id}`)
      .then(res => {
        setUsernameforpost(res.data)
      })
      .catch(err => {
      });
  };

  
  function incrementLike() {
    axiosWithAuth()
      .patch(`/comment/inc/${props.comment.id}`)
      .then(res => {
        props.fetchComments()
      })
      .catch(err => {
      });
  };


  function decreaseLike() {
    axiosWithAuth()
      .patch(`/comment/dec/${props.comment.id}`)
      .then(res => {
        props.fetchComments()
      })
      .catch(err => {
      });
  };



  return (

    <>

      <div style={{ display: "block", marginBottom: "40px" }}>
        <p style={{ textAlign: "left", color: "#0275d8" }}>{usernameforpost}</p>
        <p style={{ textAlign: "left", }}>{props.comment.comment_text}</p>
        <div style={{ display: "block", backgroundColor: "orange" }}>


          <div style={{ float: "right", display: "flex", justifyContent: "space-between", alignItems: "space-between" }}>
            <p style={{ marginTop: "8px" }}>{props.comment.like}</p>
            <ThumbUpIcon onClick={incrementLike} style={{ borderRadius: "50%" }} className={classes.margin} />
            <ThumbDownIcon onClick={decreaseLike} style={{ borderRadius: "50%" }} className={classes.margin} />
          </div>

        </div>
      </div>

    </>

  )
}


const mapStateToProps = state => ({
});
export default connect(
  mapStateToProps,
  { fetchFixes }
)(Comment);