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
        title: "Product/Sales",
        description: "We take pride in offering a diverse range of high-quality products that cater to the diverse needs and preferences of our valued customers. From cutting-edge technology solutions to stylish and functional lifestyle products, our carefully curated collection is designed to enhance your everyday life. With a commitment to excellence, we ensure that each product is meticulously crafted using premium materials and innovative manufacturing processes, guaranteeing durability and reliability. Our dedicated sales team is passionate about delivering exceptional customer service, providing expert guidance and support to help you make informed purchase decisions."
    },
    {
        icon: <SchoolIcon sx={{ fontSize: "50px" }} />,
        title: "Course development",
        description: "Our dedicated Course Development team is committed to crafting enriching and dynamic learning experiences that cater to the evolving needs of our clients and learners. With a focus on comprehensive research, innovative instructional design, and the integration of cutting-edge technologies, our team strives to create engaging and interactive courses that foster meaningful learning outcomes. Leveraging our expertise in curriculum design, pedagogy, and multimedia content development, we ensure that every course is meticulously tailored to meet industry standards and learner objectives"
    },
    {
        icon: <BuildIcon sx={{ fontSize: "50px" }} />,
        title: "Software Development",
        description: "Our team of dedicated Software Engineers plays a pivotal role in transforming innovative ideas into tangible realities. With a profound understanding of modern technological advancements and a keen eye for detail, our developers are committed to delivering cutting-edge solutions that meet the unique requirements of our clients. Leveraging their expertise in coding, design, and project management, our developers ensure seamless execution and timely delivery of every project. "
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