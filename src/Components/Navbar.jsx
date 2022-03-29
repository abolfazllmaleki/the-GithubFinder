import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Icon, Tab, Tabs } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';


function Navbar({make}) {
    const gohome=()=>{
      window.location.pathname='/'
    }
    const goabout=()=>{
      window.location.pathname='/about'
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>

                <GitHub sx={{ fontSize: 40 }} edge="start" />

                <Typography variant="h6" component="div" sx={{ flexGrow: 0.01 }} >
                  
                </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                github finder
              </Typography>
              <Button color="inherit" onClick={()=>{gohome()}}>Search</Button>
              <Button color="inherit" onClick={()=>{goabout()}}>About</Button>
              
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Navbar;



