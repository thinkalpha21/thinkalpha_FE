import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import { TitleDisplay } from './TitleDisplay';

const socialData = [
    {
        icon: <FacebookIcon sx={{ fontSize: "30px" }} />,
        link: "#",
    },
    {
        icon: <TwitterIcon sx={{ fontSize: "30px" }} />,
        link: "#",
    },
    {
        icon: <GoogleIcon sx={{ fontSize: "30px" }} />,
        link: "#",
    },
    {
        icon: <PinterestIcon sx={{ fontSize: "30px" }} />,
        link: "#",
    },
    {
        icon: <InstagramIcon sx={{ fontSize: "30px" }} />,
        link: "#",
    },
    {
        icon: <RedditIcon sx={{ fontSize: "30px" }} />,
        link: "#",
    },
]


export const SocialDisplay = () => (
    <Box sx={{
        my: 3
    }}>
        <TitleDisplay title='JOIN US' description='Follow us on' />

        <Stack marginTop={"25px"} flexWrap={"wrap"} maxWidth={"1000px"} marginX={"auto"} justifyContent={"center"} direction={"row"}>
            {socialData.map((item) => (
                <a href={item.link} className={"socialIconContainer"}>
                    {item.icon}
                </a>))}
        </Stack>


    </Box>
);