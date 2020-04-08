import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Image, roundedCircle } from 'react-bootstrap';
import '../styles/postsIndividual.scss'
import { HTML5_FMT } from 'moment';
import ProfileImageShow from './ProfileImageShow';
import Comment from './Comment';
import { makeStyles } from '@material-ui/core/styles';
import { Route, withRouter } from 'react-router-dom';
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
import PostImageUpload from './PostImageUpload'

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
    backgroundColor: "white",
    borderRadius: "10%",
    boxShadow: "0 16px 19px rgba(0,0,0,0.2), 0 15px 15px rgba(0,0,0,0.2)",
    '&:hover': {
      boxShadow: "0 2px 4px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.22)"
    },
  },
  buttons: {
    margin: '5px 10px'
  },
  button: {
    margin: theme.spacing(1),
  },


}));

const IndividualPost = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    isCirclePic: true,
    isPost: true,
  });
  const [commentsAreOpen, setCommentsAreOpen] = useState(false)
  const [commentState, setCommentState] = useState({
    user_id: localStorage.getItem("id"),
    comment_text: ''
  });
  const [commentFetch, setCommentFetch] = useState([])
  // const [currentPost,setCurrentPost] = useState({})

  useEffect(() => {
    fetchComments()
    // fetchPostbyId(props.post.id)
  }, [])


// const fetchPostbyId = (id) =>{

//   axiosWithAuth()
//   .get(`/post/postProfileImg/${id}`)
//   .then(res => {
//     setCurrentPost(res.data)
//   })
//   .catch(err => {
//   });
  
// }

// console.log(currentPost,"currentPost")

  const fetchComments = () => {
    axiosWithAuth()
      .get(`/comment/${props.post.id}`)
      .then(res => {
        setCommentFetch(res.data)
      })
      .catch(err => {
      });
  };



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



  function incrementLike() {
    axiosWithAuth()
      .patch(`/post/inc/${props.post.id}`)
      .then(res => {
        props.fetchPosts()
      })
      .catch(err => {
      });
  };


  function decreaseLike() {
    axiosWithAuth()
      .patch(`/post/dec/${props.post.id}`)
      .then(res => {
        props.fetchPosts()
      })
      .catch(err => {
      });
  };


  


  const toggleComments = (e) => {

    e.preventDefault();

    if (commentsAreOpen === true) {
      setCommentsAreOpen(false)
    } else {
      setCommentsAreOpen(true)
    }

  }
  return (
    <>
      <div className="singlePost" style={{ width: "98%", marginBottom: "5px"}}>

        <div style={{ display: "block", backgroundColor: "orange" }}>
          <section style={{ display: "flex", flexDirection: "row", float: "left" }}>

            {props.post ?
              <ProfileImageShow style={{ width: "40px", height: "40px", paddingRight: "2px" }} isPost={state.isPost} isPostPic={true} isCirclePic={state.isCirclePic} post={props.post} />
              :
              null
              
            }

          </section>

          <div style={{ float: "right" }}>
            <p>{props.post.post_date}</p>
          </div>



        </div>

       

            <div style={{ display: "block", marginTop: "45px",marginBottom:"45px", textAlign:"center" }}>
            <div style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center"}}><PostImageUpload post={props.post}  />
            <PostImageUpload post={props.post} isCarouselForPost={true} />
            <p>{props.post.post_text}</p>
            </div>
           
           
            </div>
        
        <div style={{ display: "block", backgroundColor: "orange" }}>

          <div style={{ float: "left", display: "flex", flexDirection: "row" }}>
            <CommentIcon className={classes.margin} onClick={toggleComments} /> <p style={{ marginTop: "8px" }}>{commentFetch.length}</p>
          </div>

          <div style={{ float: "right", display: "flex", justifyContent: "space-between", alignItems: "space-between" }}>
            <p style={{ marginTop: "8px" }}>{props.post.like}</p>
            <ThumbUpIcon onClick={incrementLike} style={{ borderRadius: "50%" }} className={classes.margin} />
            <ThumbDownIcon onClick={decreaseLike} style={{ borderRadius: "50%" }} className={classes.margin} />
          </div>

        </div>

        <div style={{ border: "2px !important" }}>

          {commentsAreOpen ?
            <div style={{ width: "100%" }}>
              <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
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
                  endIcon={<SendIcon />}
                  onClick={onSubmitHandler}
                >
                  Enter
            </Button>
              </div>
              <div style={{ display: "block" }}>

                {
                  commentFetch.map((comment) => {
                    return (<>
                      <Comment comment={comment} fetchComments={fetchComments} />
                    </>
                    )
                  })}




              </div>
              <ExpandMoreIcon style={{ fontSize: "50px" }} />
            </div>
            : null}
        </div>

      </div>

    </>
  );
};




export default IndividualPost;