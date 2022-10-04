import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import logo from '../../assets/commerce.png'
import useStyles from './styles';
import {ShoppingCart} from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
 

const Navbar = ({total_items}) => {
    const classes = useStyles();
    const location = useLocation();

    

    return (
        <>
           <AppBar position="fixed" className={classes.appBar} color="inherit">
             <Toolbar>
                 <Typography component={Link} to='/ '  variant="h6" className={classes.title} color="inherit">
                     <img src={logo} alt="Grace World" height="25px" className={classes.image} />
                     Grace World
                 </Typography>
                 <div className={classes.grow} />
                 
                    {location.pathname=== '/' && (
                    <div className={classes.button}>
                    <IconButton component={Link} to='/cart' aria-label="Show cart item" color="inherit" >
                        <Badge badgeContent={total_items} color="secondary" >
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    </div>)  }

                 
                 
             </Toolbar>
         </AppBar>    
        </>
    )
}

export default Navbar
