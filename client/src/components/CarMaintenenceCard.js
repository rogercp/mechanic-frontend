
import React, { useState } from 'react';
import { axiosWithAuth } from '../helpers/index';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import BuildIcon from '@material-ui/icons/Build';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import ImageCarousel from './ImageCarousel';
import DescriptionIcon from '@material-ui/icons/Description';
import { fetchFixes } from "../store/actions/carMaintenenceActions";
import { connect } from 'react-redux';
import { Button as Button2 } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { withStyles } from '@material-ui/core/styles';
import MaintenceCardEditModal from './MaintenceCardEditModal'

import '../styles/fullscreenmodal.scss'


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
    height: '50px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 0),
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
      width: '90%',
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
  top: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  margin: {
    color: 'red',
    outline: '0',
  },
  root: {
    width: '100%',
  },
  areUSure: {
    margin: theme.spacing(1),
    boxShadow: "0 16px 19px rgba(0,0,0,0.2), 0 15px 15px rgba(0,0,0,0.2)",
    '&:hover': {
      boxShadow: "0 2px 4px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.22)"
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },

}))




const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);



const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);



function CarMaintenceCard(props) {

  const classes = useStyles();
  const [fullopen, setFullOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const [expanded, setExpanded] = React.useState('panel1');
  const [open, setOpen] = useState(false);
 



  function handleOpen() {
      setOpen(true);
  }
  function handleErrorOpen() {
      setErrorOpen(true);
  }
  function handleClose() {
      setOpen(false);
  }
  function handleErrorClose() {
      setErrorOpen(false);
  }


  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };



  // const  handleDelete2 = () => {
  //    confirmAlert({
  //     customUI: ({ onClose }) => {
  //       return (
  //         <div className='custom-ui'>
  //           <h1>Are you sure?</h1>
  //           <Button2 className={classes.areUSure} variant="secondary" onClick={onClose}>No</Button2>
  //           <Button2
  //             className={classes.areUSure}
  //             variant="danger"
  //             onClick={() => {
  //               axiosWithAuth()
  //                 .delete(`${process.env.REACT_APP_API_URL}/car_fix/${props.carFix.id}`)
  //                 .then(res => {
  //                   onClose();
  //                   props.fetchFixes(props.car.id)

  //                 })
  //                 .catch(err => {
  //                   onClose();
  //                 });
  //             }}
  //           >
  //             Yes
  //                 </Button2>
  //         </div>
  //       );
  //     }
  //   });
  // };



  function handleDelete2() {
      axiosWithAuth()
          .delete(`${process.env.REACT_APP_API_URL}/car_fix/${props.carFix.id}`)
          .then(res => {
              props.fetchFixes(props.car.id)
          })
          .catch(error => {
              console.error(error);
          });
  }


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

    

<div>
      <ExpansionPanel round onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
        <p>{props.carFix.fix_date}</p>
        <p>{props.carFix.fix}</p>
        {props.carFix.fix_not_maintenence ? <BuildIcon /> : <AlarmOnIcon />}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "spaceBetween" }}>
          <div style={{ width: "70%", textAlign: "left !important" }}>
            <p style={{ textAlign: "left!important" }}>${props.carFix.fix_price}</p>
            <p>{props.carFix.fix_description}</p>

          </div>


         

          <Toolbar style={{ display: "flex", flexDirection: "row", alignItems: "spaceBetween", justifyContent: "spaceBetween" }} >

            <Button
              id="edit"
            >
              <EditIcon
              onClick={handleOpen}
              />
            </Button>


            <IconButton id="del" aria-label="delete" className={classes.margin} onClick={handleDelete2}>
              <DeleteIcon />
            </IconButton>

          </Toolbar>
        </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>


      <MaintenceCardEditModal
                    carFix={props.carFix}
                    open={open}
                    onClose={handleClose}
                    titleText={"User Info"}
                    bodyText={""}
                    redirect={"/cars"}
                    redirectText={"cars"}
                />
    </div>





    // <ExpansionPanel >

    //   <ExpansionPanelSummary
    //     expandIcon={<ExpandMoreIcon />}
    //     aria-controls="panel1a-content"
    //     id="panel1a-header"
    //   >
        
    //     <p>{props.carFix.fix_date}</p>
    //     <p>{props.carFix.fix}</p>
    //     {props.carFix.fix_not_maintenence ? <BuildIcon /> : <AlarmOnIcon />}
    //   </ExpansionPanelSummary>

    //   <ExpansionPanelDetails >
    //   <Typography>
    //     <div style={{ display: "flex", flexDirection: "column", justifyContent: "spaceBetween" }}>
    //       <div style={{ width: "70%", textAlign: "left !important" }}>
    //         <p style={{ textAlign: "left!important" }}>${props.carFix.fix_price}</p>
    //         <p>{props.carFix.fix_description}</p>

    //       </div>


    //       <CarFixImgUpload carFix={props.carFix} />

    //       <Toolbar style={{ display: "flex", flexDirection: "row", alignItems: "spaceBetween", justifyContent: "spaceBetween" }} >

    //         <Button
    //           id="edit"
    //         >
    //           <EditIcon />
    //         </Button>


    //         <IconButton id="del" aria-label="delete" className={classes.margin} onClick={handleDelete2}>
    //           <DeleteIcon />
    //         </IconButton>

    //       </Toolbar>
    //     </div>
    //     </Typography>
    //   </ExpansionPanelDetails>

    // </ExpansionPanel>





  )
}


const mapStateToProps = state => ({
});
export default connect(
  mapStateToProps,
  { fetchFixes }
)(CarMaintenceCard);

