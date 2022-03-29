import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Icon, LinearProgress, Link, Tab, Tabs } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as Linkee } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



function Navbar({make}) {
    const gohome=()=>{
      window.location.pathname='/'
    }
    const goabout=()=>{
      <Linkee to='/about'>
      </Linkee>
      // window.location.pathname='/about'
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
              <Linkee to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <Button color='inherit' >
                <Typography>Search</Typography>
              </Button>
              </Linkee>
              
                
              <Linkee to="/about" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <Button color='inherit' >
                <Typography>About</Typography>
              </Button>
              </Linkee>
            

              
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Navbar;



