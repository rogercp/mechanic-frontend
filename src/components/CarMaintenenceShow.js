/**
 * Dependencies
 */

import React, { useState, useEffect} from "react";
import { axiosWithAuth } from '../helpers/index';
import { makeStyles } from '@material-ui/core/styles';
import CarMaintenceCard from './CarMaintenenceCard';


/**
 *  Import styles
 */




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
          width:'100%',
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
        fetchCarFixes()
    }, []);

    async function fetchCarFixes() {
        const res = await axiosWithAuth().get(`/car_fix/${props.car.id}`); 
        setCarFixes(res.data);
    }

    return (
    
      <>
      {carFixes.length < 1 ? <div>You have no fixes</div> :
              <>
                  {carFixes.map(c => {
                      return (

                        <CarMaintenceCard carFix={c} car={props.car} fetchCarFixes={fetchCarFixes} />
                        
                        
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





