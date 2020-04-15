
import React, { useState, useEffect } from "react";
import CarMaintenceCard from './CarMaintenenceCard';
import { fetchFixes } from "../store/actions/carMaintenenceActions";
import { connect } from 'react-redux';



function getModalStyle() { }

function CarMaintenceShow(props) {


  const [carFixes, setCarFixes] = useState([])
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
    props.fetchFixes(props.car.id)
  }, []);


  console.log(props.myFixes, "carFixes")


  return (

    <div >
      {props.myFixes.length < 1 ? <div>You have no fixes</div> :
        <>
          {props.myFixes.map(c => {
            return (

              <CarMaintenceCard carFix={c} car={props.car} />

            );
          })}
        </>

      }
    </div>
  );
};



const mapStateToProps = state => ({
  myFixes: state.maintenence.fixes,
});
export default connect(
  mapStateToProps,
  { fetchFixes }
)(CarMaintenceShow);





