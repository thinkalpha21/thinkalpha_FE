import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import GroupIcon from '@mui/icons-material/Group';
import DiamondIcon from '@mui/icons-material/Diamond';
import { TitleDisplay } from './TitleDisplay';

const aboutData = [
    {
        icon: <GroupIcon sx={{ fontSize: "80px" }} />,
        title: "Who are we?",
        description: "We are a start-up initiative of young passionate professionals who have the passion and drive for impacting on the coming general with skills in Science, Technology and Engineering. We aim to bridge the gap between traditional formal education and real life workable skill acquisition. We aim to provide school students with practical, experiments and technical designs to help them possess skills to thrive in our ever advancing community."
    },
    {
        icon: <DiamondIcon sx={{ fontSize: "80px" }} />,
        title: "What do we do?",
        description: "One of the many challenges of creative thinking is availability of materials needed for the smooth learning experience . our aim is to abstract the challenges and makes sure that young minds are able to learn, explore, innovate and create seamlessly. We offer sale, instructional materials, coaching and consultation to schools, organisations and individuals."
    },
    {
        icon: <GroupIcon sx={{ fontSize: "80px" }} />,
        title: "Why We Do It?",
        description: "We love designing and inventing different things to solve the economic issues and/or just for being innovative. We believe the young students deserve the best the country has to offer to prepare them for the future by equipping them with the right set of skills and technical knowhow to complement their formal education to give them the tools to compete with the best the world. The value we are able to bring in our school-based programs is simply unparalleled, and your students will receive prep that will help them integrate easily into the ever advancing technically oriented society"
    },
    {
        icon: <DiamondIcon sx={{ fontSize: "80px" }} />,
        title: "Benefit for Schools??",
        description: "There are several specific benefits of our school-based programs, both for students and for the school itself. Students benefit because they are simply used to learning at school. This makes for a natural environment for learning something different and partial which can be developed and later translated into real life, and students often approach these programs with an enthusiastic attitude. In addition, school is often regarded as conventional to many with a traditional learning routine. Our programs would help to add some excitement to what the students can achieve at school."
    },
]

export const AboutDisplay = () => {

    return (
        <Box sx={{
            mt: 5,
            mx: 3
        }}>
            <TitleDisplay title="About Us" description='Information about what we do.'/>            

            <Box sx={{
                maxWidth: "1000px",
                mx: "auto",
                mt: 3,

            }} display={"grid"} gridTemplateColumns={"repeat(12,1fr)"} >
                {aboutData.map((item) => (
                    <Box className={"aboutContainer"} sx={{
                        gridColumn: {
                            xs: "span 12",
                            sm: "span 6",
                        },
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
                            <Typography variant='h6' sx={{ mx: 1, mt:3 }} >
                                {item.title}
                            </Typography>
                            <Typography variant="caption" component={"small"}  sx={{ mx: 1, mb: 4 }} textAlign={"justify"} >
                                {item.description}
                            </Typography>
                        </Stack>


                    </Box>
                ))}
            </Box>

        </Box >

    );
}