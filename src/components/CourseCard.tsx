import { Button, Card, CardContent, CardHeader, Chip, Stack } from "@mui/material";
import ChevronRight from '@mui/icons-material/ChevronRight';

export const CourseCard = ({ title, description, timeframe, openModal }: {
    title: string,
    description: string,
    timeframe: string,
    openModal: Function
}) => (
    <Card sx={{
        position: "relative",
        zIndex: 0,
        overflow: "visible"
    }} variant="outlined">
        <CardHeader disableTypography title={title} sx={{
            paddingBottom: 0,
            fontSize: "1.3rem"
        }} />
        <CardContent style={{
            paddingTop: 0,
            paddingBottom: "10px"
        }}>
            <p style={{
                color: "grey"
            }}>
                {description}
            </p>
            <Stack direction="row" justifyContent={"space-between"}>
                <Chip label={timeframe} color="secondary" />

                <Button color="secondary" endIcon={<ChevronRight />} onClick={()=>{
                    openModal(true);
                }}>Enrol</Button>

            </Stack>
        </CardContent>


    </Card>
)