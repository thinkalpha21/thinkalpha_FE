import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { CircularProgress, styled } from '@mui/material';
import { CustomTextField } from './CustomTextField';
import { FormEvent, useRef, useState } from 'react';
import axios from 'axios';
import { HOST } from '../globals';

const CustomDialog = styled(Dialog)(() => ({
    "& .MuiPaper-root": {
        backgroundColor: "#1c1c1c",
        color: "white"
    }
}));

const form_data = [
    {
        label: "School Name",
        name: "school_name",
    },
    {
        label: "School Address",
        name: "school_address",
    },
    {
        label: "Contact Information",
        name: "contact_info",
        type: "tel"
    },
    {
        label: "Email",
        name: "email",
        type: "email"
    },
]


export default function FormDialog({ openDialog, closeDialog }: { openDialog: boolean, closeDialog: Function }) {
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const [message, setMessage] = useState<{
        show: boolean,
        message: string,
        type: 'success' | 'error'
    }>({
        show: false,
        message: "",
        type: "success"
    });

    const register = () => {
        const form = formRef.current;
        if (form) {
            setIsLoading(true);
            axios({
                method: "POST",
                url: HOST + "/user/school/register/",
                data: new FormData(form),
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then((res) => res.data).then((data) => {
                form.reset();
                setIsLoading(false);
                setMessage({
                    show: true,
                    message: "You have successfully registered. We'll contact you shortly.",
                    type: "success"
                });
            }).catch((err) => {
                setIsLoading(false);
                setMessage({
                    show: true,
                    message: "An error occured.",
                    type: "error"
                });
            });
        }
    }

    const closeSnackBar = () => setMessage({
        show: false,
        message: "",
        type: "success"
    })

    const handleClose = () => closeDialog();

    return (
        <>
            <CustomDialog maxWidth={"xs"} open={openDialog} onClose={handleClose} >
                <DialogTitle>ThinkAlpha Registration</DialogTitle>
                <DialogContent>
                    <Typography>
                        Thank you for your interest in ThinkAlpha. Fill form below to proceed with your registration
                    </Typography>
                    <form ref={formRef}>
                        {form_data.map((item) => (
                            <CustomTextField name={item.name} required key={item.label} className="formInput" id={item.label} label={item.label} variant="outlined" fullWidth type={item.type} sx={{
                                outlineColor: "white",
                                color: "white",
                                mt: 2,
                                backgroundColor: "rgba(255, 255, 255, 0.06)",
                            }} />
                        ))}

                    </form>

                </DialogContent>
                <DialogActions>
                    <Button color='secondary' onClick={handleClose}>Cancel</Button>
                    <Button sx={{ backgroundColor: "grey.900", borderRadius: "5px", px: 3, color: "white" }} onClick={() => {
                        if (formRef?.current?.checkValidity()){
                            register();
                        }else{
                            formRef?.current?.reportValidity();
                        }

                    }}>Register <CircularProgress sx={{ ml: 3, color: "white", display: isLoading ? "initial" : "none" }} size={20} /></Button>
                </DialogActions>
            </CustomDialog>
            <Snackbar anchorOrigin={{ horizontal: "right", vertical: "bottom" }} open={message.show} autoHideDuration={6000} onClose={closeSnackBar}>
                <Alert onClose={closeSnackBar} severity={message.type} sx={{ width: '100%' }}>
                    {message.message}
                </Alert>
            </Snackbar>
        </>
    );
}