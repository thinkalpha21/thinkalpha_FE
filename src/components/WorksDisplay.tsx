import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { TitleDisplay } from './TitleDisplay';
import { useState } from 'react';

import image_p1 from "../assets/p1.jpg";
import image_p2 from "../assets/p2.jpg";
import image_p3 from "../assets/p3.jpg";
import image_p4 from "../assets/p4.jpg";
import image_p5 from "../assets/p5.jpg";
import image_p6 from "../assets/p6.jpg";
import image_p7 from "../assets/p7.jpg";
import image_p8 from "../assets/p8.jpg";
import { styled } from '@mui/material';

const TabsData = [
    "PORTFOLIO 1",
    "PORTFOLIO 2",
    "PORTFOLIO 3",
    "PORTFOLIO 4",
    "PORTFOLIO 5",
]

const imagesData = [
    {
        tabIndex: 0,
        images: [image_p1, image_p2]
    },
    {
        tabIndex: 1,
        images: [image_p3, image_p4]
    },
    {
        tabIndex: 2,
        images: [image_p4, image_p5]
    },
    {
        tabIndex: 3,
        images: [image_p6, image_p7]
    },
    {
        tabIndex: 4,
        images: [image_p8]
    },
]

const CustomTab = styled(Tab)({
    '&.Mui-selected': {
        backgroundColor: "#263238",
        color: "white",
        borderRadius: "5px"
    },

})


export const WorksDisplay = () => {
    const [tabIndex, settabIndex] = useState(-1);

    return (
        <Box sx={{
            my: 5,
            display: "flex",
            flexDirection: "column",
            maxWidth: "1100px",
            width: "100%",
            px: 2,
            mx: "auto"
        }}>
            <TitleDisplay title='OUR WORKS' description='What we are  proud of' />
            <Tabs className='image-tab'
                sx={{ mx: "auto", my: 2, width: "100%", maxWidth: "700px" }}
                value={tabIndex}
                onChange={(event, value) => {
                    settabIndex(value);
                }}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="Our works tab"
            >
                <CustomTab label={"All"} value={-1} />
                {TabsData.map((item, index) => <CustomTab label={item} value={index} />)}

            </Tabs>

            {/* For all images */}
            <Box sx={{
                display: tabIndex === -1 ? "flex" : "none",
                justifyContent: "center",
                flexWrap: "wrap",
                width: "100%"
            }}>
                {imagesData.map((item, index) => (
                    <>
                    {item.images.map((image) => (
                            <img src={image} alt={image} width={300} height={300} style={{
                                borderRadius: "5px",
                                margin: "10px 5px",
                            }} />
                        ))
                    }
                    </>
                ))}
            </Box>


            {imagesData.map((item, index) => (
                <Box sx={{
                    display: tabIndex === index ? "flex" : "none",
                    justifyContent: "center",
                    flexWrap: "wrap"
                }}>
                    {item.images.map((image) => (
                        <img src={image} alt={image} width={300} height={300} style={{
                            borderRadius: "5px",
                            margin: "10px 5px",
                        }} />
                    ))}
                </Box>
            ))}


        </Box>
    );
}