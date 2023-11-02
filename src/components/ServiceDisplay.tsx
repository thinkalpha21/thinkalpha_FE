import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import GroupIcon from '@mui/icons-material/Group';
import DiamondIcon from '@mui/icons-material/Diamond';
import { TitleDisplay } from './TitleDisplay';

const serviceData = [
    {
        icon: <GroupIcon sx={{ fontSize: "80px" }} />,
        title: "We sale all kinds of Robotics and Hobbyist materals.",
        description: "Sale Of Robotics and Hobbyist Materials"
    },
    {
        icon: <DiamondIcon sx={{ fontSize: "80px" }} />,
        title: "Course development",
        description: "We collaborate with Educator and Professional to create and recommend courses to make learning accesible to all."
    },
    {
        icon: <GroupIcon sx={{ fontSize: "80px" }} />,
        title: "Who are we?",
        description: "If you have problems on how to integrate S.T.E.A.M in to your curriculum, we are here to make it seamless."
    },
]


export const ServiceDisplay = () => (
    <Box sx={{
        my: 3
    }}>
        <TitleDisplay title='Services' description='This are the services we offer' />

        <Stack marginTop={"25px"} flexWrap={"wrap"} maxWidth={"1000px"} marginX={"auto"} justifyContent={"center"} direction={"row"}>
            {serviceData.map((item) => (
                <Stack sx={{mx:2}} maxWidth={"300px"} direction={"column"}>
                    <div className={"aboutIconContainer"}>
                        {item.icon}
                    </div>
                    <Typography variant='h6' sx={{ mx: 1, mt: 3 }}  textAlign={"center"} >
                        {item.title}
                    </Typography>
                    <Typography variant="caption" component={"small"} sx={{ mx: 1, mb: 4 }} textAlign={"justify"} >
                        {item.description}
                    </Typography>
                </Stack>))}
        </Stack>


    </Box>
);