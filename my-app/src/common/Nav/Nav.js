import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import './Nav.css';

import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from 'react-router-dom';

function Nav() {
  

  return (
    <AppBar position="static">
      <Container maxWidth="xl" style={{display:"flex" , justifyContent:"space-between" , alignItems:"center"}}>
        <Toolbar disableGutters>
        <AddShoppingCartIcon style={{fontSize:'40px'}}/>
          
        </Toolbar>

        <div className="btn">
        <Link to='signup'><button style={{height:"50%"}}>Sign Up</button></Link>
        
        </div>
      </Container>
      
    </AppBar>
  );
}
export default Nav;