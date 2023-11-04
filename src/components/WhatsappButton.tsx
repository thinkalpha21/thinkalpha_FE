import Button from '@mui/material/Button';

export const WhatsappButton = () => {

    return (
            <Button color="secondary" onClick={()=>{
                window.location.href= "https://wa.me/+2347068448786"
            }} variant="contained" sx={{mx: "auto", mt: 5, display: "block", backgroundColor: "grey.900", py: 1.5, px:8, borderRadius: "1px"}}>Whatsapp Us</Button>
        )
}

