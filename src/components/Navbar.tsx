import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { styled } from '@mui/material';
import LoginDialog from './LoginDialog';
import { Link } from 'react-router-dom';


const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: 10,
        minWidth: "90%",
        color: "white",
        backgroundColor: "#1c1c1c",
        '& li': {
            justifyContent: "center",
            display: "flex",
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: "grey",
            },
        },
    },
}));

const LoginButton = styled(Button)({
    display: 'block',
    borderColor: "white",
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100px",
    alignSelf: "center"

});

const pages = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "#about"
    },
    {
        name: "Services",
        path: "#services"
    },
    {
        name: "Works",
        path: "#works"
    },
    {
        name: "Contact",
        path: "#contact"
    },

];

const SmallScreenMenu = ({setopenLoginDialog}: {setopenLoginDialog: (arg: boolean)=>void}) => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget);

    const handleCloseNavMenu = () => setAnchorElNav(null);

    return (<Box sx={{ ml: "auto", display: { xs: 'flex', md: 'none' } }}>
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
        >
            <MenuIcon />
        </IconButton>
        <StyledMenu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
                display: { xs: 'block', md: 'none' },
            }}
        >
            {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" component="a" href={page.path}>{page.name}</Typography>
                </MenuItem>
            ))}
            {
                        window.sessionStorage.getItem("access") ? <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center" component={Link} to={"/dashboard"}>Dashboard</Typography>
                    </MenuItem> : <></>
                    }

            {<LoginButton sx={{
                display: window.sessionStorage.getItem("access") ? "none" : "block"
            }} variant='outlined' onClick={() => setopenLoginDialog(true)}>Login</LoginButton>}


        </StyledMenu>
    </Box>)
};

export const Navbar = () => {

    const [openLoginDialog, setopenLoginDialog] = useState(false);


    return (<AppBar sx={{ backgroundColor: "black" }} position="fixed">
        <Container >
            <Toolbar disableGutters>
                <Typography variant='h5' component={"a"} >
                    ThinkAlpha
                </Typography>

                <Box sx={{ ml: "auto", display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            key={page.name}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <a href={page.path}>{page.name}</a>

                        </Button>
                    ))}
                    {
                        window.sessionStorage.getItem("access") ? <Button
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        <Link to={"/dashboard"}>Dashboard</Link>

                    </Button> : <></>
                    }
                    {<LoginButton sx={{
                        alignSelf: "center",
                        display: window.sessionStorage.getItem("access") ? "none" : "block"
                    }} variant='outlined' onClick={() => setopenLoginDialog(true)}>Login</LoginButton>}




                </Box>
                <SmallScreenMenu setopenLoginDialog={setopenLoginDialog} />
                <LoginDialog openDialog={openLoginDialog} closeDialog={() => setopenLoginDialog(false)} />

            </Toolbar>
        </Container>
    </AppBar>);
}