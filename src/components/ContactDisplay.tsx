import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOnSharp';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import MailIcon from '@mui/icons-material/Mail';
import PrintIcon from '@mui/icons-material/Print';

import { TitleDisplay } from './TitleDisplay';
import { styled } from '@mui/material';

const icon_styles = { m: 1, fontSize: "20px" };

const form = [
    {
        label: "Your Name",
    },
    {
        label: "Email",
        type: "email",
    },
    {
        label: "Subject",
    },
    {
        label: "Message",
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

export const ContactDisplay = () => (
    <Box sx={{
        mt: 4,
    }}>

        <div className='map-bg'>
            <Box sx={{
                position: "absolute",
                backgroundColor: "rgba(5, 8, 11, 0.93)",
                width: "100%",
                minHeight: "750px",
                color: "white",
                py: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                <TitleDisplay title='CONTACT US' description='How you can contact us' />
                <Stack direction={"row"} flexWrap={"wrap"} sx={{
                    my: 3,
                    mt: 6,
                    mx: "auto",
                    px: 3,
                    width: "100%",
                    justifyContent: "space-around"
                }}>
                    <Stack direction={"column"}>
                        <Typography sx={{ mb: 2 }} variant='h5'>
                            Our Address
                        </Typography>
                        <Stack direction={"row"}>
                            <LocationOnIcon sx={icon_styles} />

                            <Typography sx={{
                                maxWidth: "150px",
                                lineHeight: "30px"
                            }} variant='caption'>
                                40 Akinwummi Street ,
                                Alagomeji Yaba ,
                                Lagos, Nigeria, 33148
                            </Typography>
                        </Stack>
                        <Stack direction={"row"}>
                            <PhoneCallbackIcon sx={icon_styles} />

                            <Typography sx={{
                                maxWidth: "150px",
                                lineHeight: "30px"
                            }} variant='caption'>
                                +234 676 865 8754
                            </Typography>
                        </Stack>

                        <Stack direction={"row"}>
                            <PrintIcon sx={icon_styles} />

                            <Typography sx={{
                                maxWidth: "150px",
                                lineHeight: "30px"
                            }} variant='caption'>
                                +234 676 865 8754
                            </Typography>

                        </Stack>
                        <Stack direction={"row"}>
                            <MailIcon sx={icon_styles} />

                            <Typography sx={{
                                maxWidth: "150px",
                                lineHeight: "30px"
                            }} variant='caption'>

                                thinkalpha21o@gmail.com
                            </Typography>

                        </Stack>
                    </Stack>
                    <Stack direction={"column"} sx={{
                        maxWidth: "500px",
                        width: "100%"
                    }}>
                        <Typography sx={{ mb: 2 }} variant='h5'>
                            Write to us
                        </Typography>
                        <form style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%"
                        }}>
                            {form.map((item) => (
                                <CustomTextField key={item.label} className="formInput" id={item.label} label={item.label} variant="outlined" multiline={item.isTextArea} rows={5} type={item.type} sx={{
                                    outlineColor: "white",
                                    color: "white",
                                    mt: 2,
                                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                                }} />
                            ))}
                            <Button color='secondary' variant='contained' sx={{
                                mt: 2,
                                py: 1,
                                backgroundColor: "#363940"
                            }}>
                                Send
                            </Button>
                        </form>


                    </Stack>
                </Stack>

            </Box>
        </div>
    </Box>
);