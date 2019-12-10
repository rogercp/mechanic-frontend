/**
 * Dependencies
 */

import React, { useState, useEffect} from "react";
import { axiosWithAuth } from '../helpers/index';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CarFixCard from './CarFixCard'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AllOutIcon from '@material-ui/icons/AllOut';
import InfoIcon from '@material-ui/icons/Info';
import CarModalExpand from './CarModalExpand'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import CarImgUpload from './CarImgUpload';



/**
 *  Import styles
 */

import  '../styles/navbar.scss'


// const useStyles = makeStyles(theme => ({
//     button: {
//         margin: theme.spacing(1)
//     },
//     submitbutton: {
//         justifyContent: 'center',
//     },
//     modal: {
//         position: 'absolute',
//         margin: '0 auto',
//     },
//     paper: {
//       height: '50px',
//       backgroundColor: theme.palette.background.paper,
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(0, 0, 0),
//       outline: 'none',
//       margin:'1%',
//       flexDirection: "column",
//       justifyContent: "space-between",
//       alignItems: "center",
//       boxShadow: "0 16px 19px rgba(0,0,0,0.2), 0 15px 15px rgba(0,0,0,0.2)",
//       '&:hover':{
//           boxShadow: "0 2px 4px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.22)"
//         },
//       [theme.breakpoints.down('md')]: {
//           width: '100%',
//           height: '100%',
//       },
//       [theme.breakpoints.down('sm')]: {
//           padding: theme.spacing(0,0,0),
//           width:'90%',
//           height: '100%',
//       },
//     },
//         expand: {
//           transform: 'rotate(0deg)',
//           marginLeft: 'auto',
//           transition: theme.transitions.create('transform', {
//             duration: theme.transitions.duration.shortest,
//           }),
//         },
//         expandOpen: {
//           transform: 'rotate(180deg)',
//         },
//         top:{
//           display:'flex',
//           flexDirection:'row',
//           alignItems:'center',
//         },
//         margin:{
//             color:'red',
//               outline:'0',
//         },
//         root: {
//           width: '100%',
//         },
        
//   }))
  






/**
 * Define component
 */
function getModalStyle() {}

function CarMaintenceShow(props) {


    const [carFixes,setCarFixes] = useState([])
    const [modalStyle] = useState(getModalStyle);
    const [fullopen, setFullOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);

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



    useEffect(() => {
        async function fetchCars() {
            const res = await axiosWithAuth().get(`/car_fix/${props.car.id}`); 
            setCarFixes(res.data);
        }
        fetchCars()
    }, []);
    return (
    
      <>
      {carFixes.length < 1 ? <div>You have no fixes</div> :
              <>
                  {carFixes.map(c => {
                      return (
                        <div style={{display:"block",textAlign:"center",width:'80%',maxWidth:"1300px"}}>

                        <ExpansionPanel style={{width:"100%",margin:"1rem"}}>
            
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <h4>Details</h4>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                       
                        <div style={{display:"flex",flexDirection:"column"}}>
                        <CarFixCard carFix={c} key={caches.uid}  />

                            <Toolbar style={{display:"flex",flexDirection:"row",alignItems:"spaceBetween",justifyContent:"spaceBetween"}} >

                                <Button
                                    id="edit"
                                >
                                    <EditIcon />
                                </Button>
                                
                                
                            <IconButton id="del"  aria-label="delete"   >
                                    <DeleteIcon  />    
                                </IconButton> 
                            
                            </Toolbar>
                        </div>
                        </ExpansionPanelDetails>
                        </ExpansionPanel>
                      



                       
                        </div>
                        
                     );
                  })}
                  </>
              
            }
      </>
    );
};

/**
 * Export component
 */

export default CarMaintenceShow;





