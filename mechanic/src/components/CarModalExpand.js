/**
 * Dependencies
 */

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

import { axiosWithAuth } from '../helpers/index';

/**
 * Define styles
 */

const useStyles = makeStyles(theme => ({
    primarybutton: {
        margin: theme.spacing(1),
        color: "#5C90C1",
        borderColor: "#5C90C1",
        "&:hover": {
            borderColor: "#517EA8",
            color: "#517EA8"
        },
        "&:active": {
            borderColor: "#476e91",
            color: "#517EA8"
        }
    },
    secondarybutton: {
        margin: theme.spacing(1),
        [theme.breakpoints.up("lg")]: {
            margin: theme.spacing(1)
        }
    },
    submitbutton: {
        margin: theme.spacing(1),
        justifyContent: "center"
    },
    deletebutton: {
        margin: theme.spacing(1),
        color: '#E55557',
        borderColor: '#E55557',
        alignSelf: 'flexEnd',
    },
    modal: {
        margin: "0 auto",
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            width: "90%"
        }
    },
    card: {
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "200px",
        margin: "0 auto",
        padding: "30px",
        flexDirection: "column"
    },
    divider: {
        border: ".5px solid lightgrey",
        width: "100%",
        margin: "0px",
        marginTop: "10px"
    },
    cardTitle: {
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        margin: "0",
        flexDirection: "column"
    },
    listItem: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        height: "100%",
        alignItems: "center"
    },
    listItemGrey: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        backgroundColor: "whitesmoke"
    },
    cardContainer: {
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        overflowX: "hidden",
        overflowY: "hidden"
    },
    cardContent: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        margin: "30px 0px",
        color: "grey",
        minHeight: "80px",
        height: "100%",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column"
        }
    },
    tags: {
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    tag: {
        backgroundColor: "#5C90C1",
        color: "white",
        textAlign: "center",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px 10px",
        fontSize: "14px",
        fontWeight: "normal"
    },
    timeStamp: {
        fontSize: "14px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "5px 10px"
    },
    description: {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
        width: "60%",
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        }
    },
    cardSection: {
        display: "flex",
        flexDirection: "column",
        width: "40%",
        justifyContent: "center",
        alignItems: "flex-start",
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        }
    },
    listItemDescription: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0px 20px",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            padding: 0,
            margin: "0 20px"
        }
    }
}));

/**
 * Define modal
 */

function CarModalExpand(props) {
    const [sureOpen, setSureOpen] = useState(false);
    const classes = useStyles();
    
    //These are for the delete confirmation modal
    const handleSureOpen = () => {
        setSureOpen(true);
    };

    const handleSureClose = value => {
        setSureOpen(false);
    };

    

    return (
        <>
        <Dialog fullScreen open={props.open} onClose={props.handleClose}>
        <Toolbar>
                
                    <IconButton
                        id="exitButton"
                        edge="end"
                        onClick={props.handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
            </Toolbar>
                <p>Hello</p>
            </Dialog>
           
        </>
    )
}

/**
 * Export modal
 */

 export default CarModalExpand;