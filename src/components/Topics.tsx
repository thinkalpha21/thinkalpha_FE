import { Button, Card, CardContent, CardHeader } from "@mui/material";
import ChevronRight from '@mui/icons-material/ChevronRight';

import { Link } from "react-router-dom";

export const TopicCard = ({ topic  }: {
    topic: any
}) => (
    <Card sx={{
        position: "relative",
        zIndex: 0,
        overflow: "visible"
    }} variant="outlined">
        <CardHeader disableTypography title={topic.name} sx={{
            paddingBottom: 0,
            fontSize: "1.1rem"
        }} />
        <CardContent sx={{
            display: "flex",
            justifyContent: "space-between"
        }} style={{
            paddingTop: 0,
            paddingBottom: "10px"
        }}>
            <p style={{
                color: "grey",
                marginTop: "5px"
            }}>
                {topic.description}
            </p>
                
                <Link to={'/course/module/'} state={{module:topic}}>
                    <Button variant="contained" color="secondary" endIcon={<ChevronRight />}>View</Button>

                </Link>
        </CardContent>


    </Card>
)