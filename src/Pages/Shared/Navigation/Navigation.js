import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Menu as MenuIcon } from "@material-ui/icons";
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Button } from '@mui/material';



const Navigation = () => {
    const {user, logOut } = useAuth();

    return (
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Login & Registation
                </Typography>
                    <NavLink style={{textDecoration:'none', color:"white", marginLeft:"10px" }} to="/appointment" color="inherit">Appointment</NavLink>
                    <NavLink style={{ textDecoration: 'none', color: "white", marginLeft: "10px" }} to="/home" color="inherit">Home</NavLink>

                    {user?.email ?
                        <Button style={{ textDecoration: 'none', color: "white", marginLeft: "10px" }} onClick={logOut} variant="h6">logout</Button>
                        : <NavLink style={{ textDecoration: 'none', color: "white", marginLeft: "10px" }} to="/login" variant="h6">Login</NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navigation
