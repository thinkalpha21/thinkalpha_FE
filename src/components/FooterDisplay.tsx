import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const linksData = [
    {
        title: "About",
        link: "#",
    },
    {
        title: "Services",
        link: "#",
    },
    {
        title: "Press",
        link: "#",
    },
    {
        title: "CopyRight",
        link: "#",
    },
    {
        title: "Advertise",
        link: "#",
    },
    {
        title: "Legal",
        link: "#",
    },

]

export const FooterDisplay = () => (
    <>
        <Stack sx={{
            backgroundColor: "#363940",
            color: "white",
            px: {
                md: "15%",
                xs: 2
            },
            py: 5,
            flexWrap: "wrap",
            justifyContent: { xs: "center", sm: "space-around", md: "flex-start" }
        }} direction={"row"} >
            <Stack>
                <Typography sx={{ mb: 2 }} variant='h5'>
                    Useful Links
                </Typography>

                {linksData.map((item) => <Typography key={item.title} variant='body2' sx={{
                    textAlign: {
                        xs: "center",
                        sm: "left"
                    },
                    mt: 1
                }} component={"a"} href={item.link}>
                    {item.title}
                </Typography>)}

            </Stack>
            <Stack sx={{
                ml: { md: "20%", xs: 3 },
                mt: 3
            }}>
                <Typography sx={{ mb: 2 }} variant='h5'>
                    Subscribe
                </Typography>

                <div>
                    <input type="text" placeholder='Enter email address' className='subscribe-input' />
                    <button className='subscribe-button'>Submit</button>
                </div>

                <Typography sx={{ mt: 2, maxWidth: "300px" }} variant='subtitle2'>
                    Subscribe with your email address to recieve weekly or monthly information directly from us
                </Typography>

            </Stack>


        </Stack>
        <Stack sx={{
            py: 3,
            backgroundColor: "#2d3035",
            color: "white",
            textAlign: "center", wordSpacing: "5px"
        }}>
            <Typography>
                Copyright © 2023 - Designed By Odeyemi Increase & <a style={{color: "#676D75"}} href='https://davoboss1.github.io' >David Akinfenwa</a>
            </Typography>
        </Stack>
    </>
);