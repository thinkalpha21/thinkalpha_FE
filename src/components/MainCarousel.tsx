import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import SwipableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useState } from 'react';
import FormDialog from './FormDialog';

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
    const [openFormDialog, setopenFormDialog] = useState(false);

    const handleChange = (step: number) => {
        setActiveStep(step);
    };


    return (
        <>
        <div className='carousel-container'>

            <div className='carousel-content'>
                <AutoPlaySwipeableViews index={activeStep} onChangeIndex={handleChange} slideStyle={{
                    width: "100%",
                    height: "100%",
                }} className='carousel' enableMouseEvents>
                    {CarouselData.map((item) => (
                        <Box key={item.title + item.description} className={"carouselDisplayContainer"} >
                            <div className="carousel-Effect"></div>
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
                            backgroundColor: "#101010",
                            width: "50px",
                            borderRadius: "10px"
                        }}
                        position='static'
                        nextButton={
                            <></>
                        }
                        backButton={
                            <></>
                        }
                    />
                    <div>
                        <Typography variant='h6' textAlign={"center"} fontWeight={"bold"} color={"white"} marginTop={2} marginX={"15px"}>
                            Are you interested?
                        </Typography>
                        <Button color="secondary" onClick={() => {
                            setopenFormDialog(true);
                        }} variant="contained" sx={{ display: "block", backgroundColor: "grey.900", py: 1.5, px: 8, borderRadius: "1px", mt: 2, fontSize: 12 }}>Register Now</Button>

                    </div>
                </div>
            </div>
            <div className="carousel-bg"></div>

        </div>
        <FormDialog openDialog={openFormDialog} closeDialog={()=>setopenFormDialog(false)} />
        </>
        
        )
}

