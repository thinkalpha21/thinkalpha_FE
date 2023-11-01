import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const TitleDisplay = ({title, description}: {
    title: string,
    description: string
}) => (
    <div>
        <Typography variant="h4" fontWeight="bold" textAlign={"center"}>
            {title}
        </Typography>
        <Box sx={{ mt: 1 }} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <hr style={{
                height: "1px",
                width: "100px",
                backgroundColor: "black",
                margin: 0
            }} />
            <Typography sx={{ mx: 1 }} textAlign={"center"}>
                {description}
            </Typography>
            <hr style={{
                height: "1px",
                width: "100px",
                backgroundColor: "black",
                margin: 0
            }} />
        </Box>
    </div>
)