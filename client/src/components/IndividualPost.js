import React, { useState,useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import {Image,roundedCircle} from 'react-bootstrap';
import  '../styles/postsIndividual.scss'
import { HTML5_FMT } from 'moment';
import ProfileImageShow from './ProfileImageShow';
import Comment from './Comment';
import { makeStyles } from '@material-ui/core/styles';
import { Route, withRouter} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Add';
import PostAddModal from './PostAddModal';
import { browserHistory } from 'react-router';
import { Form } from 'react-bootstrap';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CommentIcon from '@material-ui/icons/Comment';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { axiosWithAuth } from '../helpers/index';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        position: 'relative',
        minHeight: 200,
      },
      fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
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
      buttons: {
       margin:'5px 10px'
      },
      button: {
        margin: theme.spacing(1),
      },
  
     
  }));

const IndividualPost = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
      isCirclePic : true,
      isPost:true,  
    });
    const [commentsAreOpen, setCommentsAreOpen]=useState(false)
    const [commentState, setCommentState] = useState({
      user_id: localStorage.getItem("id"),
      comment_text:''
     });
     const[commentFetch,setCommentFetch]= useState([])
   

     useEffect(() => {
      const fetchComments = () => {
        axiosWithAuth()
            .get(`/comment/${props.post.id}`)
            .then(res => {  
                console.log("comment fetch success")

            })
            .catch(err => {      
            });
    }; 

     }, [])
     
     const handleChange = name => event => {
      setCommentState({
         ...commentState,
         [name]: event.target.value,
       });
     };


     const onSubmitHandler = e => {
      e.preventDefault();
      axiosWithAuth()
          .post(`/comment/${props.post.id}`, commentState)
          .then(res => {  
              console.log("comment success")
          })
          .catch(err => {      
          });
  };
  
     
     
console.log(commentsAreOpen,"commetns")
const toggleComments = (e) =>{

    e.preventDefault();

 if(commentsAreOpen === true){
  setCommentsAreOpen(false)
 }else{
   setCommentsAreOpen(true)
 }
    
}
    return (
      <>
        <div className ="singlePost" style={{ width:"98%",marginBottom:"5px"}}>

        <div style={{display:"block",backgroundColor:"orange"}}>
        <section style={{display:"flex", flexDirection:"row",float:"left"}}>
      {props.post.file_name ?
        <ProfileImageShow  style={{width:"40px",height:"40px",paddingRight:"2px"}} isPost={state.isPost} userId={props.post.userId} isCirclePic={state.isCirclePic} image={props.post.file_name} post={props.post} />
          :
          <p>{props.post.user_name}</p>
        }

        </section>

          <div  style={{float:"right"}}>
          <p>{props.post.post_date}</p>
          </div>
          
            
           
          </div>

            <div style={{display:"block",marginTop:"45px"}}><p style={{textAlign:"left"}}>{props.post.post_text}</p></div>
            
{/* 
            <a href="https://www.w3schools.com/html/" target="_blank">links</a> */}
            <img style={{width:"30%",height:"30%"}} src="https://source.unsplash.com/random"/>


            <div style={{display:"block",backgroundColor:"orange"}}>
  
            <div style={{float:"left",display:"flex",flexDirection:"row"}}>
            <CommentIcon className={classes.margin} onClick={toggleComments} /> <p style={{marginTop:"8px"}}>23</p>
            </div>

            <div style={{float:"right",display:"flex",justifyContent:"space-between",alignItems:"space-between"}}> 
            <ThumbUpIcon style={{borderRadius:"50%"}} className={classes.margin}/> <p style={{marginTop:"8px"}}>63</p>
             <ThumbDownIcon style={{borderRadius:"50%"}} className={classes.margin} /><p style={{marginTop:"8px"}}>2</p>
            </div>
            
            </div>

           <div style={{border:"2px !important"}}>

          {commentsAreOpen ? 
          <div style={{width:"100%"}}>
          <div style={{width:"100%",display:"flex", flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
          <Form.Control 
          onSubmit={onSubmitHandler}
          size="md" 
          type="text" 
          placeholder="Comment" 
          id="standard-basic"
          name="comment_text"
          value={commentState.comment_text}
          onChange={handleChange('comment_text')}
          />
            <Button
          style={{}}
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon/>}
          onClick={onSubmitHandler}
        >
          Enter
            </Button>
          </div>
          <div style={{display:"block"}}>

         {
          commentFetch.map((comment)=>{
           return ( <>
                    <Comment comment={comment} />
                  </>
              )
          })} 
          



          </div>
          <ExpandMoreIcon style={{fontSize:"50px"}} />
            </div>
          :null}
          </div>
            
        </div> 
            
      </>
    );
  };
  
  
 
  
  export default IndividualPost;