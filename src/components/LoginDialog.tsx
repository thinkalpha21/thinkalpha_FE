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
import { useEffect, useRef, useState } from 'react';
import makePostRequest from '../requests/makePostRequest';
import { useNavigate } from 'react-router-dom';

const CustomDialog = styled(Dialog)(() => ({
    "& .MuiPaper-root": {
        backgroundColor: "#1c1c1c",
        color: "white"
    }
}));

const form_data = [
    {
        label: "Email",
        name: "email",
        type: "email"
    },
    {
        label: "Password",
        name: "password",
        type: "password"
    },
]


export default function LoginDialog({ openDialog, closeDialog }: { openDialog: boolean, closeDialog: Function }) {
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const [formrequestData, setformrequestData] = useState<any>();
    const [message, setMessage] = useState<{
        show: boolean,
        message: string,
        type: 'success' | 'error'
    }>({
        show: false,
        message: "",
        type: "success"
    });

    const navigate = useNavigate();


    const closeSnackBar = () => setMessage({
        show: false,
        message: "",
        type: "success"
    })

    const handleClose = () => closeDialog();

    const login = () => {
        if (formRef.current) {
            setIsLoading(true);
            makePostRequest("/user/login/", formRef.current, setformrequestData);
        }
    }

    useEffect(() => {
        setIsLoading(false);
        if (formrequestData) {
            if (formrequestData.isError) {
                setMessage({
                    show: true,
                    message: formrequestData?.error,
                    type: "error"
                });
            } else {
                setMessage({
                    show: true,
                    message: "Authentication successful. You will be redirected shortly.",
                    type: "success"
                });
                window.sessionStorage.setItem("access", formrequestData?.access);
                window.sessionStorage.setItem("refresh", formrequestData?.refresh);
                window.sessionStorage.setItem("user", JSON.stringify(formrequestData?.user));
                closeDialog();
                navigate("/dashboard");
            }

        } else if (formrequestData === null) {
            setMessage({
                show: true,
                message: "An error occured.",
                type: "error"
            });
            setformrequestData(undefined);
        }

    }, [formrequestData])


    return (
        <>
            <CustomDialog maxWidth={"xs"} open={openDialog} onClose={handleClose} >
                <DialogTitle>ThinkAlpha Registration</DialogTitle>
                <DialogContent>
                    <Typography sx={{
                        my: 2
                    }}>
                        Login in to your ThinkAlpha Account
                    </Typography>
                    <form ref={formRef}>
                        {form_data.map((item) => (
                            <CustomTextField name={item.name} required key={item.label} className="formInput" id={item.label} label={item.label} variant="filled" size="small" fullWidth type={item.type || 'text'} sx={{
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
                        if (formRef?.current?.checkValidity()) {
                            login();
                        } else {
                            formRef?.current?.reportValidity();
                        }

                    }}>Login <CircularProgress sx={{ ml: 3, color: "white", display: isLoading ? "initial" : "none" }} size={20} /></Button>
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