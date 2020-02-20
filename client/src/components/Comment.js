
import React, {useState} from 'react';
import { axiosWithAuth } from '../helpers/index';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import BuildIcon from '@material-ui/icons/Build';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import ImageCarousel from './ImageCarousel';
import DescriptionIcon from '@material-ui/icons/Description';
import CarFixImgUpload from './CarFixImgUpload';
import { fetchFixes } from "../store/actions/carMaintenenceActions";
import { connect } from 'react-redux';
import {Image,roundedCircle} from 'react-bootstrap';
import  '../styles/postsIndividual.scss'
import { HTML5_FMT } from 'moment';
import ProfileImageShow from './ProfileImageShow';
import { makeStyles } from '@material-ui/core/styles';
import { Route, withRouter} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import PostAddModal from './PostAddModal';
import { browserHistory } from 'react-router';
import { Form } from 'react-bootstrap';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CommentIcon from '@material-ui/icons/Comment';
import SendIcon from '@material-ui/icons/Send';

import  '../styles/fullscreenmodal.scss'


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    },
    submitbutton: {
        justifyContent: 'center',
    },
    modal: {
        position: 'absolute',
        margin: '0 auto',
    },
    paper: {
      height: '20px',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(0, 0, 0),
      outline: 'none',
      margin:'1%',
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 16px 19px rgba(0,0,0,0.2), 0 15px 15px rgba(0,0,0,0.2)",
      '&:hover':{
          boxShadow: "0 2px 4px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.22)"
        },
      [theme.breakpoints.down('md')]: {
          width: '100%',
          height: '100%',
      },
      [theme.breakpoints.down('sm')]: {
          padding: theme.spacing(0,0,0),
          width:'90%',
          height: '100%',
      },
    },
        expand: {
          transform: 'rotate(0deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
        },
        expandOpen: {
          transform: 'rotate(180deg)',
        },
        top:{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
        },
        margin:{
              outline:'0',
        },
        root: {
          width: '100%',
        },
        margin: {
          margin: theme.spacing(1),
          backgroundColor:"white",
          borderRadius:"10%",
          boxShadow: "0 16px 19px rgba(0,0,0,0.2), 0 15px 15px rgba(0,0,0,0.2)",
          '&:hover':{
              boxShadow: "0 2px 4px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.22)"
            },
        },
        
  }))
  


function Comment(props) {

    const classes = useStyles();

    

    function incrementLike() {
      axiosWithAuth()
          .patch(`/comment/inc/${props.comment.id}`)
          .then(res => {  
              props.fetchComments()
          })
          .catch(err => {      
          });
  };
  
  
  function decreaseLike () {
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
         
            <div style={{display:"block",marginBottom:"40px"}}>
                    <p style={{textAlign:"left"}}>carlos</p>
                    <p  style={{textAlign:"left"}}>{props.comment.comment_text}</p>
                    <div style={{display:"block",backgroundColor:"orange"}}>
  

                    <div style={{float:"right",display:"flex",justifyContent:"space-between",alignItems:"space-between"}}> 
                  <p style={{marginTop:"8px"}}>{props.comment.like}</p>
                  <ThumbUpIcon onClick={incrementLike} style={{borderRadius:"50%"}} className={classes.margin}/> 
                <ThumbDownIcon onClick={decreaseLike} style={{borderRadius:"50%"}} className={classes.margin} />
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
    {fetchFixes}
  )(Comment);