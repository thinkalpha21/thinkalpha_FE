import Box from '@mui/material/Box';

export const SectionContainer = ({children, id}: {
    children: any,
    id: string
}) => {

    return (<Box sx={{
        pt:10,
    }}  id={id}>
        {children}
    </Box>);
}