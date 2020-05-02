import React, { useState, useEffect } from 'react';
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
import { confirmAlert } from 'react-confirm-alert';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import '../styles/searchOrSubmitButtons.scss'

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
    boxShadow: "0 8px 10px rgba(0,0,0,0.2), 0 7px 7px rgba(0,0,0,0.2)",
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
  paper: {
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: 'none',
    margin: '1%',
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 16px 19px rgba(0,0,0,0.2), 0 15px 15px rgba(0,0,0,0.2)",
    '&:hover': {
      boxShadow: "0 2px 4px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.22)"
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 0, 0),
      width: '100%',
      height: '100%',
    },
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
  const [likesFetch,setLikeFetch] = useState({
        likes:null
  }
  
  )

  // const [likesFetch,setLikeFetch] = useState(null)

  useEffect(() => {

    setCommentFetch(null)

    fetchComments()

    // fetchPostbyId(props.post.id)
    // setLikeFetch(prevState =>({
    //   ...prevState.likes,
    //   likes:props.post.like,
    // }))
  }, [props.post])


  const fetchSpecificPost = () =>{

    axiosWithAuth()
    .get(`/post/fetchPostLikes/${props.post.id}`)
    .then(res => {
      console.log(res.data,"dadsadadasd")

      setLikeFetch(prevState =>({
        ...prevState.likes,
        likes:res.data[0].like,
      }))
      // setLikeFetch(res.data[0].like)

    })
    .catch(err => {
    });
  }

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
    if (localStorage.getItem("token") === null && localStorage.getItem("username") === null) {
      props.history.push('/login')
    }
    if (localStorage.getItem("username") === null && localStorage.getItem("token")) {


      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui' >

              <h3>You need a username to Post. Click the edit icon to create one.</h3>
              <Button className={classes.margin} variant="secondary" onClick={onClose}>Close</Button>

            </div>
          );
        }
      });
      props.history.push('/settings')
    } else {

      axiosWithAuth()
        .post(`/comment/${props.post.id}`, commentState)
        .then(res => {
          fetchComments()
          setCommentState({
            ...commentState,
            user_id: localStorage.getItem("id"),
            comment_text: ''
          });
        })
        .catch(err => {
        });
    }



  };



  function incrementLike() {

    if (localStorage.getItem("token") === null && localStorage.getItem("username") === null) {
      props.history.push('/login')
    }
    if (localStorage.getItem("username") === null && localStorage.getItem("token")) {


      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui' >

              <h3>You need a username to Post. Click the edit icon to create one.</h3>
              <Button className={classes.margin} variant="secondary" onClick={onClose}>Close</Button>

            </div>
          );
        }
      });
      props.history.push('/settings')
    } else {

      axiosWithAuth()
        .patch(`/post/inc/${props.post.id}`)
        .then(res => {
          fetchSpecificPost(props.post.id)
        })
        .catch(err => {
        });
    }

  };


  function decreaseLike() {
    if (localStorage.getItem("token") === null && localStorage.getItem("username") === null) {
      props.history.push('/login')
    }
    if (localStorage.getItem("username") === null && localStorage.getItem("token")) {


      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='custom-ui' >

              <h3>You need a username to Post. Click the edit icon to create one.</h3>
              <Button className={classes.margin} variant="secondary" onClick={onClose}>Close</Button>

            </div>
          );
        }
      });
      props.history.push('/settings')
    } else {
      axiosWithAuth()
        .patch(`/post/dec/${props.post.id}`)
        .then(res => {
          fetchSpecificPost(props.post.id)

        })
        .catch(err => {
        });
    }

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
      {/* <div className="singlePost" style={{ width: "98%", marginBottom: "5px" }}>

        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}> */}

<Card className={classes.paper} style={{ width: "98%"}}>

<CardContent  > 

            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>

          {props.post ?

            <ProfileImageShow style={{ alignSelf: "flex-start", width: "40px", height: "40px", paddingRight: "2px" }} isPost={state.isPost} isPostPic={true} isCirclePic={state.isCirclePic} post={props.post} />

            :
            null

          }


          <p style={{ alignSelf: "flex-end" }}>{props.post.post_date}</p>


        </div>




        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" ,width:'100%'}}>
 
         

             {/* <PostImageUpload post={props.post} /> */}
           
         

             <PostImageUpload post={props.post} isCarouselForPost={true} />
          
    <div>
            <p>{props.post.post_text}</p>
           </div>
        </div>




        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

          <div style={{ margin: "0", display: "flex", flexDirection: "row" }}>
            <CommentIcon className={classes.margin} onClick={toggleComments} /> <p style={{ marginTop: "8px" }}>{commentFetch ?commentFetch.length:null}</p>
          </div>

          <div style={{ marginRight: "0", display: "flex", justifyContent: "space-between", alignItems: "space-between" }}>
            <p style={{ marginTop: "8px" }}>{likesFetch.likes === null ? props.post.like:likesFetch.likes}</p>
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
                  
                  variant="contained"
                  color="primary"
                  id="seSub"
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
              {/* <ExpandMoreIcon style={{ fontSize: "50px" }} /> */}
            </div>
            : null}
        </div>
        </CardContent>

      </Card>

    </>
  );
};




export default withRouter(IndividualPost);