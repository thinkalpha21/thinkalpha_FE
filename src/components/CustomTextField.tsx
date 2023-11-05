import TextField from '@mui/material/TextField';
import { styled } from "@mui/material";

export const CustomTextField = styled(TextField)({
    borderRadius: "2px",
    '& label': {
        color: '#939393',
    },
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& input': {
        color: 'white',
    },
    '& textarea': {
        color: 'white',
    },
    '& .MuiOutlinedInput-root': {
        py: "20px",
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
            color: "white"
        },
    },
});
