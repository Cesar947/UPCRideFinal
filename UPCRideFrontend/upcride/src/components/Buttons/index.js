
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const LoginButton = withStyles(theme => ({
    root: {
        color: "white",
        backgroundColor: "#03A6A6",
        '&:hover': {
            backgroundColor: "#39BFA7",
        },
        '&:active': {
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {

        },
    },
}))(Button);

const RegisterButton = withStyles(theme => ({
    root: {
        color: "white",
        backgroundColor: "#96D9A6",
        '&:hover': {
            backgroundColor: "#39BFA7",
        },
        '&:active': {
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {

        },
    },
}))(Button);

const PostButton = withStyles(theme =>({
    root: {
        color: "white",
        backgroundColor: "#0388a6;",
        '&:hover': {
            backgroundColor: "#39BFA7",
        },
        '&:active': {
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        }
    }
}))(Button)

const RequestButton = withStyles(theme => ({
    root:{
        color: "white",
        backgroundColor: "#4FAB20;",
        '&:hover': {
            backgroundColor: "#5FCF27",
        }
        
    }
}))(Button)



export {LoginButton, RegisterButton, PostButton, RequestButton};
