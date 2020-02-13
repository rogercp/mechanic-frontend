
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
import { makeStyles } from '@material-ui/core/styles';
import BuildIcon from '@material-ui/icons/Build';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import ImageCarousel from './ImageCarousel';
import DescriptionIcon from '@material-ui/icons/Description';
import CarFixImgUpload from './CarFixImgUpload';
import { fetchFixes } from "../store/actions/carMaintenenceActions";
import { connect } from 'react-redux';


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
            color:'red',
              outline:'0',
        },
        root: {
          width: '100%',
        },
        
  }))
  


function Comment(props) {

    const classes = useStyles();
    const [fullopen, setFullOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);


    // function handleDelete2() {
    //     axiosWithAuth()
    //         .delete(`${process.env.REACT_APP_API_URL}/car_fix/${props.carFix.id}`)
    //         .then(res => {
    //             props.fetchFixes(props.car.id)
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }
    

    const handlefullOpen = () => {
        setFullOpen(true);
    };
    const handlefullClose = () => {
        setFullOpen(false);
    };

    function handleErrorClose() {
        setErrorOpen(false);
    }
    
    function handleErrorOpen() {
        setErrorOpen(true);
    }



    return (

            // <ExpansionPanel >

            // <ExpansionPanelSummary
            // expandIcon={<ExpandMoreIcon />}
            // aria-controls="panel1a-content"
            // id="panel1a-header"
            // >
             
            // </ExpansionPanelSummary>

            // <ExpansionPanelDetails id="panelbody">

            // {/* <div style={{display:"flex",flexDirection:"column",justifyContent:"spaceBetween"}}>
            // <div style={{width:"70%",textAlign:"left !important"}}>
                
            // </div>

            // </div> */}

            // </ExpansionPanelDetails>
            
            // </ExpansionPanel>

            <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
      
        
        
       )
}


const mapStateToProps = state => ({
  });
  export default connect(
    mapStateToProps,
    {fetchFixes}
  )(Comment);