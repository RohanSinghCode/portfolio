import  Toolbar  from '@mui/material/Toolbar';
import AppBar  from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem  from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ThemeSwitcher from './ThemeSwitcher';
import { AppBar as constant } from '../constant';
import { useState } from 'react';
import { Link } from 'react-scroll';


const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <>
            <AppBar component="nav" className='dark:bg-appbar-darkMode'>
                <Toolbar className="justify-start sm:justify-center">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
                        {constant.navItems.map((item) => (
                        <Button key={item} sx={{color: '#fff','&:hover': {borderBottom: '1px solid #A78295',borderRadius: '0px'}}} className="dark:text-text-darkMode">
                            <Link to={item} smooth={true} offset={50} duration={500}>
                                {item}
                            </Link>
                        </Button>
                        ))}
                    </Box>
                </Toolbar>
                <ThemeSwitcher className='absolute right-0 m-2'/>        
            </AppBar>
            <Toolbar />
            <nav>
                <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                >
                    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} className='dark:bg-appbar-darkMode h-screen '>
                        <List>
                            {constant.navItems.map((item) => (
                            <ListItem key={item} disablePadding>
                                <ListItemButton sx={{ textAlign: 'center'}} className='dark:text-textDarkMode hover:border-solid' >
                                    <Link to={item} smooth={true} offset={50}>
                                        <ListItemText primary={item}/>
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </nav>
        </>
    )
}

export default Header;