import { Box, Grid, Modal, Stack } from "@mui/material";
import { InfoCard } from "../components/InfoCard";
import Person from '@mui/icons-material/Person';
import School from '@mui/icons-material/School';
import Book from '@mui/icons-material/Book';
import Bookmark from '@mui/icons-material/Bookmark';
import { CourseCard } from "../components/CourseCard";
import { ReactElement, useState } from "react";
import { TopicCard } from "../components/Topics";
import useGetRequest from "../requests/useGetRequest";



const courses: {
    title: string,
    description: string,
    timeFrame: string,

}[] = [
        {
            title: "Welcome to  robotics 101",
            description: "Introduction to robotics and how to get started in this robotics course. Tools needed to follow this course",
            timeFrame: "Week 1"
        },
        {
            title: "Welcome to  robotics 101",
            description: "Introduction to robotics and how to get started in this robotics course. Tools needed to follow this course",
            timeFrame: "Week 1"
        },
        {
            title: "Welcome to  robotics 101",
            description: "Introduction to robotics and how to get started in this robotics course. Tools needed to follow this course",
            timeFrame: "Week 1"
        },
        {
            title: "Welcome to  robotics 101",
            description: "Introduction to robotics and how to get started in this robotics course. Tools needed to follow this course",
            timeFrame: "Week 1"
        },
        {
            title: "Welcome to  robotics 101",
            description: "Introduction to robotics and how to get started in this robotics course. Tools needed to follow this course",
            timeFrame: "Week 1"
        },
    ]

type user = {
    id: string,
    full_name: string,
    first_name: string,
    last_name: string,
    active: boolean,
    street: string,
    zipcode: string,
    district: string,
    city: string,
    state: string,
    country: string,
    region: string,
    email: string,
    contact_no: string,
    user_type: string,
    date_of_birth: string,
    gender: string,
    image: string
}

export const UserDashboard = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const user: user = JSON.parse(window.sessionStorage.getItem("user") as string);
    // if(!user){
    //     return (<h1>Failed</h1>)
    // }
    const courses = useGetRequest("/course/");
    const [courseID, setcourseID] = useState("");

    const profileInformations: {
        title: string,
        color: "deepspace" | "lawrencium" | "influenza" | "redmist",
        icon: ReactElement

    }[] = [
            {
                title: `Welcome ${user.full_name}`,
                icon: <Person fontSize="large" />,
                color: 'deepspace'
            },
            {
                title: `From: Holy Infant International School`,
                icon: <School fontSize="large" />,
                color: 'influenza'
            },
            {
                title: "Courses Available: 23",
                icon: <Book fontSize="large" />,
                color: 'lawrencium'
            },
            {
                title: "Courses Completed: 8",
                icon: <Bookmark fontSize="large" />,
                color: 'redmist'
            }
        ]

    return (
        <>
            <Box marginY={"150px"} marginX={{ xs: "20px", md: "50px" }} >
                <Grid container alignItems={"stretch"} rowSpacing={8} columnSpacing={2} >
                    {profileInformations.map((info) => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <InfoCard title={info.title} icon={info.icon} color={info.color} />
                        </Grid>
                    ))}

                </Grid>

                <h3>
                    Courses
                </h3>
                <Grid container spacing={2} >
                    {courses?.map((course: any) => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <CourseCard title={course.title} description={course.description} timeframe={course.timeFrame} openModal={() => {
                                setcourseID(course.id);
                                handleOpen();
                            }
                            } />
                        </Grid>
                    ))}
                </Grid>

            </Box>

            {courseID && <ModulesModal course_id={courseID} open={open} handleClose={handleClose} />}

        </>
    );
}

const ModulesModal = ({ open, handleClose, course_id }: {
    open: boolean,
    handleClose: () => void,
    course_id: string
}) => {
    const modules = useGetRequest(`/course/${course_id}/module/`);

    console.log(modules);



    return (<Modal
        open={open}
        onClose={handleClose}
    >
        <Box sx={modal_style}>
            <h3>
                Topics
            </h3>
            <Stack gap={3}>
                {modules?.map((module: any) => (
                    <TopicCard topic={module} />
                ))}
            </Stack>
        </Box>
    </Modal>)
}

const modal_style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    maxWidth: "600px",
    bgcolor: 'white',
    borderRadius: "10px",
    boxShadow: 24,
    px: 4,
    pb: 2,
    overflow: "auto",
    maxHeight: "90%"

};