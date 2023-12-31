import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import GroupIcon from '@mui/icons-material/Group';
import DiamondIcon from '@mui/icons-material/Diamond';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Fade from 'react-reveal/Fade';
import { TitleDisplay } from './TitleDisplay';
import { SectionContainer } from './SectionContainer';


const aboutData = [
    {
        icon: <GroupIcon sx={{ fontSize: "50px" }} />,
        title: "Who are we?",
        description: "We are a start-up initiative of young passionate professionals who have the passion and drive for impacting on the coming general with skills in Science, Technology and Engineering. We aim to bridge the gap between traditional formal education and real life workable skill acquisition. We aim to provide school students with practical, experiments and technical designs to help them possess skills to thrive in our ever advancing community."
    },
    {
        icon: <DiamondIcon sx={{ fontSize: "50px" }} />,
        title: "What do we do?",
        description: "One of the many challenges of creative thinking is availability of materials needed for the smooth learning experience . our aim is to abstract the challenges and makes sure that young minds are able to learn, explore, innovate and create seamlessly. We offer sale, instructional materials, coaching and consultation to schools, organisations and individuals."
    },
    {
        icon: <FavoriteIcon sx={{ fontSize: "50px" }} />,
        title: "Why We Do It?",
        description: "We love designing and inventing different things to solve the economic issues and/or just for being innovative. We believe the young students deserve the best the country has to offer to prepare them for the future by equipping them with the right set of skills and technical knowhow to complement their formal education to give them the tools to compete with the best the world. The value we are able to bring in our school-based programs is simply unparalleled, and your students will receive prep that will help them integrate easily into the ever advancing technically oriented society"
    },
    {
        icon: <AccessTimeFilledIcon sx={{ fontSize: "50px" }} />,
        title: "Benefit for Schools??",
        description: "There are several specific benefits of our school-based programs, both for students and for the school itself. Students benefit because they are simply used to learning at school. This makes for a natural environment for learning something different and partial which can be developed and later translated into real life, and students often approach these programs with an enthusiastic attitude. In addition, school is often regarded as conventional to many with a traditional learning routine. Our programs would help to add some excitement to what the students can achieve at school."
    },
]

export const AboutDisplay = () => {

    return (
        <SectionContainer id="about" >
            <Box sx={{
                mx: 3
            }}>
                <TitleDisplay title="About Us" description='Information about what we do.' />
                <TransitionGroup>
                    <Box sx={{
                        maxWidth: "1100px",
                        mx: "auto",
                        mt: 3,

                    }} display={"grid"} gridTemplateColumns={"repeat(12,1fr)"} gap={2}>

                        {aboutData.map((item) => (

                            <Box key={item.title} className={"aboutContainer"} sx={{
                                gridColumn: {
                                    xs: "span 12",
                                    sm: "span 6",
                                },
                                
                            }}>
                                <Fade left>
                                    <Box sx={{
                                        display: "flex",
                                        flexDirection: {
                                            xs: "column",
                                            md: "row"
                                        }
                                    }}>
                                        <div className={"aboutIconContainer"}>
                                            {item.icon}
                                        </div>

                                        <Stack direction={"column"}>
                                            <Typography variant='h6' sx={{
                                                mx: 1, mt: 3, textAlign: {
                                                    xs: "center", md: "left"
                                                }
                                            }} >
                                                {item.title}
                                            </Typography>
                                            <Typography variant="caption" component={"small"} sx={{ mx: 1, mb: 4 }} textAlign={"justify"} >
                                                {item.description}
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </Fade>
                            </Box>
                        ))}


                    </Box>
                </TransitionGroup>
            </Box>

        </SectionContainer >

    );
}