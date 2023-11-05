import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';

import { TitleDisplay } from './TitleDisplay';
import { useEffect, useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import { styled } from '@mui/material';
import { SectionContainer } from './SectionContainer';
import { TransitionGroup } from 'react-transition-group';
import axios from 'axios';
import { HOST } from '../globals';


const CustomTab = styled(Tab)({
    '&.Mui-selected': {
        backgroundColor: "#263238",
        color: "white",
        borderRadius: "5px"
    },

})

type categories = {
    id: string,
    cover_photo: string,
    name: string,
    description: string
}

type images = {
    id: string,
    name: string,
    file: string,
    link: string,
    "type": "VIDEO" | "IMAGE",
}

const fetchCategories = (setCategoriesState: (data: categories[] | undefined) => void) => {
    axios.get(HOST + "/general/category/list/").then((res) => res.data).then((data) => {
        setCategoriesState(data.results);
    }).catch((error) => {
        setCategoriesState(undefined);
    });
}

const fetchImages = (id: string, setImageState: (data: images[] | undefined) => void) => {
    axios.get(HOST + `/general/media/list?tags=${id}`).then((res) => res.data).then((data) => {
        setImageState(data?.results?.length > 0 ? data?.results : undefined);
    }).catch((error) => {
        setImageState(undefined);
    });
}

export const WorksDisplay = () => {
    const [activeCategory, setActiveCategory] = useState("");
    const [categories, setCategories] = useState<categories[] | undefined>([]);
    const [images, setImages] = useState<images[] | undefined>([]);

    useEffect(() => {
        fetchCategories(setCategories);
    }, []);

    useEffect(() => {
        if (categories && categories.length > 0) {
            setActiveCategory(categories[0].id);
        }
    }, [categories]);

    useEffect(() => {
        setImages([]);
        fetchImages(activeCategory, setImages);
    }, [activeCategory]);



    return (
        <SectionContainer id="works">
            <Box sx={{
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
                    value={activeCategory}
                    onChange={(event, value: string) => {
                        setActiveCategory(value);
                    }}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="Our works tab"
                >
                    {categories?.map((item) => <CustomTab key={item.id} label={item.name} value={item.id} />)}

                </Tabs>

                <TransitionGroup>
                    {/* For all images */}
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        width: "100%"
                    }}>
                        {images?.map((item) => (
                            <Zoom key={item.id} bottom>
                                {item.type === "IMAGE" ? <img src={item.file} alt={item.name} width={300} height={300} style={{
                                    borderRadius: "5px",
                                    margin: "10px 5px",
                                }} /> :
                                    <iframe
                                        width="300"
                                        height="300"
                                        src={item.link}
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={item.name}
                                    />
                                }

                            </Zoom>
                        ))}
                        {images === undefined && <Alert severity="error" sx={{
                            width: "100%"
                        }} onClick={() => {
                            setImages([]);
                            fetchImages(activeCategory, setImages);
                        }}>
                            <AlertTitle>Error</AlertTitle>
                            No images was loaded. You can click the this message to try again.
                        </Alert>}

                        {images?.length === 0 && <CircularProgress color='secondary' />}
                    </Box>
                </TransitionGroup>


            </Box>
        </SectionContainer>
    );
}