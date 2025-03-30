import {AppBar, Box, Divider, Drawer, IconButton, ListItem, ListItemButton, ListItemText, Toolbar} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import List from '@mui/material/List';

const navItems = [
    ['Home', '/'],
    ['Favourites', '/favourites'],
]

/**
 * AppBar component code copied from https://mui.com/material-ui/react-app-bar/#responsive-app-bar-with-drawer
 */
const NavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    // See https://reactrouter.com/start/declarative/navigating#usenavigate
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawerWidth = 240;

    /**
     * Mobile version of the navigation menu
     */
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                Bon Appetit
            </Typography>
            <Divider/>
            <List>
                {navItems.map(([linkName, route]) => (
                    <ListItem key={linkName} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}}>
                            <ListItemText primary={linkName} onClick={() => navigate(route)}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        Bon Appetit
                    </Typography>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        {navItems.map(([linkName, route]) =>
                            <Button key={linkName} sx={{color: '#fff'}} onClick={() => navigate(route)}>
                                {linkName}
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </>
    )
}

export default NavBar