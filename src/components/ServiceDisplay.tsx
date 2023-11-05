import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import GroupIcon from '@mui/icons-material/Group';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import Bounce from 'react-reveal/Bounce';
import { TitleDisplay } from './TitleDisplay';
import { SectionContainer } from './SectionContainer';
import { TransitionGroup } from 'react-transition-group';

const serviceData = [
    {
        icon: <GroupIcon sx={{ fontSize: "50px" }} />,
        title: "Products",
        description: "We provide amenities and tools needed for creative and innovative ideas to come alive."
    },
    {
        icon: <SchoolIcon sx={{ fontSize: "50px" }} />,
        title: "Course development",
        description: "We collaborate with Educator and Professional to create and recommend courses to make learning accesible to all."
    },
    {
        icon: <BuildIcon sx={{ fontSize: "50px" }} />,
        title: "Who are we?",
        description: "If you have problems on how to integrate S.T.E.A.M in to your curriculum, we are here to make it seamless."
    },
]


export const ServiceDisplay = () => (
    <SectionContainer id="services">
        <TitleDisplay title='Services' description='This are the services we offer' />

        <TransitionGroup>

        <Stack marginTop={"25px"} flexWrap={"wrap"} maxWidth={"1000px"} marginX={"auto"} justifyContent={"center"} direction={"row"}>
            {serviceData.map((item) => (
                <Bounce duration={2000} bottom>
                    <Stack sx={{ mx: 2 }} maxWidth={"300px"} direction={"column"}>
                        <div className={"aboutIconContainer"}>
                            {item.icon}
                        </div>
                        <Typography variant='h6' sx={{ mx: 1, mt: 3 }} textAlign={"center"} >
                            {item.title}
                        </Typography>
                        <Typography variant="caption" component={"small"} sx={{ mx: 1, mb: 4 }} textAlign={"justify"} >
                            {item.description}
                        </Typography>
                    </Stack>

                </Bounce>
            ))}
        </Stack>
        </TransitionGroup>



    </SectionContainer>
);