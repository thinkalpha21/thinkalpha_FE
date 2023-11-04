import Stack from '@mui/material/Stack';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { TitleDisplay } from './TitleDisplay';
import { SectionContainer } from './SectionContainer';

const socialData = [
    {
        icon: <WhatsAppIcon sx={{ fontSize: "30px" }} />,
        link: "https://wa.me/+2347068448786",
    },
    {
        icon: <TwitterIcon sx={{ fontSize: "30px" }} />,
        link: "https://www.linkedin.com/in/think-alpha-356930299/",
    },
    {
        icon: <LinkedInIcon sx={{ fontSize: "30px" }} />,
        link: "https://www.linkedin.com/in/think-alpha-356930299/",
    },
    {
        icon: <YouTubeIcon sx={{ fontSize: "30px" }} />,
        link: "https://www.youtube.com/channel/UCtFl-l-uZsy1epR4Pf9hFMw",
    },
    {
        icon: <InstagramIcon sx={{ fontSize: "30px" }} />,
        link: "https://www.instagram.com/_thinkalpha/",
    },
]


export const SocialDisplay = () => (
    <SectionContainer id="social" > 
        <TitleDisplay title='JOIN US' description='Follow us on' />

        <Stack marginTop={"25px"} flexWrap={"wrap"} maxWidth={"1000px"} marginX={"auto"} justifyContent={"center"} direction={"row"}>
            {socialData.map((item) => (
                <a key={item.link} href={item.link} target='_blank' className={"socialIconContainer"}>
                    {item.icon}
                </a>))}
        </Stack>


    </SectionContainer>
);