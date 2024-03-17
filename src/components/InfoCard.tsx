import { Box, Card, CardContent, Stack } from "@mui/material";
import { ReactElement } from "react";
import style from "../assets/css/card.module.css"

const colors = {
    deepspace: style.deepspace,
    lawrencium: style.lawrencium,
    influenza: style.influenza,
    redmist: style.redmist
}

export const InfoCard = ({title, icon, color}: {
    title: string,
    icon: ReactElement,
    color: 'deepspace' | 'lawrencium' | 'influenza' | 'redmist'
}) => (
    <Card sx={{
        position: "relative",
        zIndex: 0,
        overflow: "visible",
        height: "100%"
    }}>
        <CardContent>
            <Box className={colors[color]} sx={{
                display: "flex",
                height: "70px",
                justifyContent: "center",
                alignItems: "center",
                width: "70px",
                color: "white",
                padding: 2,
                borderRadius: "50%",
                position: "absolute",
                top: "-40px"
            }}>
                {icon}
            </Box>
            <Stack marginTop={3}>
                {title}
            </Stack>
        </CardContent>


    </Card>
)