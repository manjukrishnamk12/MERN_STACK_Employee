import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography, withTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const NavbarAdmin = () => {
  const appBarStyle = {
    backgroundColor: 'rgba(7, 189, 82,0.2)'
  };
  return (
    <div>
       <Box sx={{ flexGrow: 1 }} >
    <AppBar position="static"style={appBarStyle}>
      <Toolbar >
        <Typography id='react' variant="h5" component="div" sx={{ flexGrow: 1 }}>
        Employee_App
        </Typography>
        <Button  color="inherit" size='large'>
          <Link to = {'/AdminHome'} style={{color:'white',textDecoration:'none'}}> Home
          </Link> 
         </Button>
        <Button  color="inherit" size='large'>
        <Link to = {'/addemployee'} style={{color:'white',textDecoration:'none'}}> Add_Employee
          </Link> 
         </Button>
         <Button  color="inherit" size='large'>
        <Link to = {'/Logout'}  style={{color:'white',textDecoration:'none'}}> Logout
          </Link> 
         </Button>
        
      </Toolbar>
    </AppBar>
  </Box>
    </div>
  );
}

export default NavbarAdmin;
