import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "@mui/material/Menu";  
import MenuItem from '@mui/material/MenuItem';

import './LandingPage.css';


const options = ["", "Who we are", "Contact Us"]

export default function ButtonAppBar() {

    const [anchorEl, setAnchorEl] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(1);
    const open = Boolean(anchorEl);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null)
    }

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box sx={{
            flexGrow: 1
        }}>
            <AppBar className="appBar" position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleClickListItem}
                        sx={{
                        mr: 2
                    }}>
                        <MenuIcon/>
                    </IconButton>
                    
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        {options.map((option, index) => (
                            <MenuItem
                                key={option}
                                disabled={index === 0}
                                selected={index === selectedIndex}
                                onClick={(e) => handleMenuItemClick(e, index)}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>

                    <Typography
                        variant="h5"
                        component="div"
                        sx={{
                        flexGrow: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        fontFamily: 'serif',
                        fontWeight: 'bolder'
                    }}>
                        Title
                    </Typography>
                    <Button className='btnSignup' variant='contained'>Sign Up</Button>
                    <Button className='btnLogin' variant='contained'>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}