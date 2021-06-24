import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    video: {
        width: "550px",
        [theme.breakpoints.down("xs")]: {
            width: "300px",
        },
    },
    gridContainer: {
        justifyContent: "center",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
        },
    },
    paper: {
        padding: "25px",
        border: "2px solid black",
        margin: "25px",
        background: "#5c9ead",
        color: "white",
        border: "4px #243b4a",
    },
}));
