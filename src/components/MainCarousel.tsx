import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import SwipableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useState } from 'react';

const AutoPlaySwipeableViews = autoPlay(SwipableViews);

const CarouselData = [{
    title: "LEARN, EXPLORE AND CREATE",
    description: "Let's make learning fun"
},
{
    title: "JOIN US",
    description: "On this great journey"
},
{
    title: "PROJECT ALPHA",
    description: "Do it big"
}
]

export const MainCarousel = () => {

    const [activeStep, setActiveStep] = useState(0);

    const handleChange = (step: number) => {
        setActiveStep(step);
    };


    return (
        <div className='carousel-container'>
            <AutoPlaySwipeableViews index={activeStep} onChangeIndex={handleChange} slideStyle={{
                width: "100%",
                height: "100%",
            }} className='carousel' enableMouseEvents>
                {CarouselData.map((item) => (
                    <Box className={"carouselDisplayContainer"} >
                        <div className="carousel-Effect">hi there</div>
                        <Typography variant='h3' textAlign={"center"} fontWeight={"bold"} color={"white"} marginX={"15px"}>
                            {item.title}
                        </Typography>
                        <Typography variant='h6' textAlign={"center"} color={"white"}>
                            {item.description}
                        </Typography>
                    </Box>

                ))}
            </AutoPlaySwipeableViews>

            <div className='stepper-container'>
                <MobileStepper
                    variant="dots"
                    steps={CarouselData.length}
                    className='stepper'
                    activeStep={activeStep}
                    style={{
                        backgroundColor: "transparent"
                    }}
                    position='static'
                    nextButton={
                        <></>
                    }
                    backButton={
                        <></>
                    }
                />
            </div>

        </div>)
}

