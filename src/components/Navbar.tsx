import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';


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
        name: "Team",
        path: "#team"
    },
    {
        name: "Prices",
        path: "#prices"
    },
    {
        name: "Contact",
        path: "#contact"
    },

];

const SmallScreenMenu = () => {
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
        <Menu
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
        </Menu>
    </Box>)
};

export const Navbar = () => {


    return (<AppBar sx={{ backgroundColor: "grey.900" }} position="fixed">
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
                            <a  href={page.path}>{page.name}</a>
                            
                        </Button>
                    ))}
                </Box>
                <SmallScreenMenu />

            </Toolbar>
        </Container>
    </AppBar>);
}