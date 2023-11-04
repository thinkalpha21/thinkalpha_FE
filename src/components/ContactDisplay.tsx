import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import LocationOnIcon from '@mui/icons-material/LocationOnSharp';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import MailIcon from '@mui/icons-material/Mail';
import PrintIcon from '@mui/icons-material/Print';

import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade';
import { TitleDisplay } from './TitleDisplay';
import { CircularProgress, styled } from '@mui/material';
import { SectionContainer } from './SectionContainer';
import { FormEvent, useState } from 'react';
import axios from 'axios';
import { HOST } from '../globals';

const icon_styles = { m: 1, fontSize: "20px" };

const form = [
    {
        name: "name",
        label: "Your Name",
    },
    {
        label: "Email",
        name: "email",
        type: "email",
    },
    {
        label: "Subject",
        name: "subject",
    },
    {
        label: "Message",
        name: "message",
        isTextArea: true
    },
]

const CustomTextField = styled(TextField)({
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

const contactTextStyle = {
    width: "100%",
    maxWidth: {
        md: "150px",
        width: "100%"
    },
    lineHeight: "30px"
}

export const ContactDisplay = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{
        show: boolean,
        message: string,
        type: 'success' | 'error'
    }>({
        show: false,
        message: "",
        type: "success"
    });

    const sendContactMessage = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        console.log(form);
        setIsLoading(true);
        axios({
            method: "POST",
            url: HOST + "/general/contact-us/",
            data: new FormData(form),
            headers: { "Content-Type": "multipart/form-data"
        }}).then((res) => res.data).then((data) => {
            form.reset();
            setIsLoading(false);
            setMessage({
                show: true,
                message: "Message has been sent.",
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

    const closeSnackBar = () => setMessage({
        show: false,
        message: "",
        type: "success"
    })

    return (
        <SectionContainer id="contact"  >

            <div className='map-bg'>
                <Box className="contact-container">
                    <TitleDisplay title='CONTACT US' description='How you can contact us' />
                    <Stack direction={"row"} flexWrap={"wrap"} sx={{
                        my: 3,
                        mt: 6,
                        mx: "auto",
                        width: "100%",
                        justifyContent: "space-around"
                    }}>
                        <Stack sx={{
                            maxWidth: {xs: "500px", sm: "200px"},
                            width: "100%"
                        }} direction={"column"}>
                            <Flip left cascade>
                                <Typography sx={{ mb: 2 }} variant='h5'>
                                    Our Address
                                </Typography>
                                <Stack direction={"row"}>
                                    <LocationOnIcon sx={icon_styles} />

                                    <Typography sx={contactTextStyle} variant='caption'>
                                    40 Oshilemo street, Ajangbadi Ojo, Lagos, Nigeria
                                    </Typography>
                                </Stack>
                                <Stack direction={"row"}>
                                    <PhoneCallbackIcon sx={icon_styles} />

                                    <Typography component={"a"} href="tel:+2347068448786" sx={contactTextStyle} variant='caption'>
                                        +234 706 844 8786
                                    </Typography>
                                </Stack>

                                <Stack direction={"row"}>
                                    <PrintIcon sx={icon_styles} />

                                    <Typography component={"a"} href="tel:+2347068448786" sx={contactTextStyle} variant='caption'>
                                    +234 706 844 8786

                                    </Typography>

                                </Stack>
                                <Stack direction={"row"}>
                                    <MailIcon sx={icon_styles} />

                                    <Typography component={"a"} href="mailto:info@thinkalpha.com.ng" sx={contactTextStyle} variant='caption'>

                                        info@thinkalpha.com.ng
                                    </Typography>

                                </Stack>
                            </Flip>
                        </Stack>
                        <Stack direction={"column"} sx={{
                            maxWidth: "500px",
                            width: "100%",
                            my:3
                        }}>
                            <Typography sx={{ mb: 2 }} variant='h5'>
                                Write to us
                            </Typography>
                            <form onSubmit={sendContactMessage}>

                                {form.map((item) => (
                                    <Fade key={item.name} left>
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "100%"
                                        }}>
                                            <CustomTextField name={item.name} required key={item.label} className="formInput" id={item.label} label={item.label} variant="outlined" multiline={item.isTextArea} rows={5} type={item.type} sx={{
                                                outlineColor: "white",
                                                color: "white",
                                                mt: 2,
                                                backgroundColor: "rgba(255, 255, 255, 0.06)",
                                            }} />
                                        </div>
                                    </Fade>

                                ))}

                                <Fade left>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "100%"
                                    }}>
                                        <Button type='submit' color='secondary' variant='contained' sx={{
                                            mt: 2,
                                            py: 1,
                                            backgroundColor: "#363940"
                                        }} >
                                            Send <CircularProgress sx={{ ml: 3, color: "white", display: isLoading ? "initial" : "none" }} size={20} />
                                        </Button>
                                    </div>
                                </Fade>

                            </form>


                        </Stack>
                    </Stack>

                </Box>
            </div>

            <Snackbar anchorOrigin={{horizontal: "right", vertical: "bottom"}} open={message.show} autoHideDuration={6000} onClose={closeSnackBar}>
                <Alert onClose={closeSnackBar} severity={message.type} sx={{ width: '100%' }}>
                    {message.message}
                </Alert>
            </Snackbar>
        </SectionContainer >
    );
}