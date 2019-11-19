/**
 * Dependencies
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia'

/**
 * Define styles
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
    height: '101%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 2),
    outline: 'none',
    borderColor:'red',
    border:'10px',
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down('md')]: {
        width: '100%',
        height: '100%',
    },
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1,2,2),
        width:'100%',
        height: '100%',
    },
  },
  
    card: {
        maxWidth: 345,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
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
      
}))

/**
 * Define component
 */

const MediatorCard = (props) => {
  const classes = useStyles();

  return (
    <>
        <Grid
          item xs={12}
          sm={props.numCars === 1 ? 12 : 6}
          md={props.numCars === 1 ? 12 : 6}
          lg={props.numCars === 1 ? 12 : 6}
          >
        <Card className={classes.paper} style={{border:"black",maxWidth:"400px"}}>
          <CardContent>
              <h5 className='card-name'> {props.car.car_nickname}</h5>
              <img style={{maxWidth:"300px"}} src='https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=blue-bmw-sedan-near-green-lawn-grass-170811.jpg&fm=jpg' />
              <p className="case-label">Car Type: {props.car.car_type}</p> 
              <p className="case-label">Car Make: {props.car.car_make}</p> 
              <p className="case-label">Car Model: {props.car.car_model}</p>
              <p className="case-label">Nick Name: {props.car.car_nickname}</p>
              <p className="case-label">Year: {props.car.car_year}</p>   
          </CardContent>

        </Card>
      </Grid>
    </>
  );
};

/**
 * Export component
 */

export default MediatorCard;
