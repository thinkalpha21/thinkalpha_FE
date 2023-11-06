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
    // {
    //     name: "Team",
    //     path: "#team"
    // },
    // {
    //     name: "Prices",
    //     path: "#prices"
    // },
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
        </StyledMenu>
    </Box>)
};

export const Navbar = () => {


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
                            <a  href={page.path}>{page.name}</a>
                            
                        </Button>
                    ))}
                </Box>
                <SmallScreenMenu />

            </Toolbar>
        </Container>
    </AppBar>);
}