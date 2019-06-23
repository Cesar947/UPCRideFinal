import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const LoginTextField = withStyles({
    root: {
        InputLabelProps: {
            color: "white",
        },

        '& label.Mui-focused': {
            color: '#96D9A6',
        },
        '& label': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#96D9A6',
        },

        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: '#03A6A6',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#96D9A6',
            },
        },
    },
})(TextField);

export {LoginTextField}
