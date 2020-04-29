import ProfileImageUpload from './ProfileImageUpload';
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { axiosWithAuth } from '../helpers/index';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';



const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        width: 270,
        height: 600
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    },
}))


function UserSettingsFormModal(props) {


    const classes = useStyles();
    const { onClose, open, titleText, bodyText, redirect, redirectText } = props;
    const [state, setState] = React.useState({
        user_name: localStorage.getItem("username"),

    });
    const [toggleView,setToggleView] = React.useState(false)

    function toggleViewHandler(){
  
      if(toggleView){
        setToggleView(false)
      }
     else{
      setToggleView(true)
     }
    
      
    }

    function handleClose() {
        onClose();
    }

    function handleClick() {
        props.history.push(redirect);
    }

    const handleChange = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
        });
    };



    const userId = localStorage.getItem('id');

    const onSubmitHandler = e => {
        console.log(state, "usernamesatte")
        e.preventDefault();
        axiosWithAuth()
            .put(`users/update/${userId}`, state)
            .then(res => {
                localStorage.setItem("username", `${state.user_name}`);
                window.location.reload();
            })
            .catch(err => {
            });
    };


    if(toggleView){
        return(
            <Dialog open={open} onClose={handleClose} className={classes.dialog}>
 <Button
               variant="dark" 
                color="primary"
                size="large"
                className={classes.button}
                onClick={toggleViewHandler}
                >
                Go To Edit Username
            </Button>
                <FormControl className={classes.formControl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
               
                   
                        <h2>Add or Switch Profile Image</h2>
                        <ProfileImageUpload onClose={props.onClose} />
               
                    </FormControl>
                    <Button
              variant="dark" 
              color="primary"
              size="large"
              className={classes.button}
              onClick={handleClose}
            >
             Close Form
        </Button>
            </Dialog>
            
        )
      }else{

    return (
        <>


            <Dialog open={open} onClose={handleClose} className={classes.dialog}>
            <Button
                variant="dark" 
                color="primary"
                size="large"
                className={classes.button}
                onClick={toggleViewHandler}
                >
                Go To Edit Image
            </Button>
                <FormControl className={classes.formControl} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                
                    <div> <TextField
                        id="standard-basic"
                        name="user_name"
                        defaultValue={state.user_name}
                        className={classes.textField}
                        label="username"
                        margin="normal"
                        value={state.user_name}
                        onChange={handleChange('user_name')}
                    />
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={onSubmitHandler}
                        >
                            submit
      </Button>
                    </div>



                </FormControl>
                <Button
              variant="dark" 
              color="primary"
              size="large"
              className={classes.button}
              onClick={handleClose}
            >
             Close Form
        </Button>
            </Dialog>


        </>
    );
}
};

export default UserSettingsFormModal;
