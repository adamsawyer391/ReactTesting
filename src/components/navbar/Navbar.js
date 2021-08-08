import React, { useState } from 'react'
import Appbar from '@material-ui/core/AppBar'
import './Navbar.css'
import clsx from 'clsx';
import { makeStyles, Toolbar, Typography } from '@material-ui/core';

function Navbar() {

    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
        },
        appBar: {
            backgroundColor: '#000',
        },
        toolBar: {
            display: 'flex'
        }
    }));

    const classes = useStyles();
    const url = "https://www.spinutech.com/webres/Image/web-design-development/articles/Web%20Dev-Blog.png";
    const search_url = "https://cdn.iconscout.com/icon/premium/png-256-thumb/search-2758901-2290828.png";

    return (

        <div className={classes.root}>
            <Appbar position="static" className={clsx(classes.appBar)}>
                <Toolbar className={classes.toolBar}>
                    {/* <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, open && classes.hide)}>
                        <MenuIcon />
                    </IconButton> */}
                    <img src={url} alt="" className="navbar-image" />
                    <Typography variant="h5" noWrap>
                        Programmer's Corner
                    </Typography>
                    <input className="navbar-search" placeholder="Search..." />
                    <div className="search-icon-container">
                        <img className="search-icon" src={search_url} alt="" />
                    </div>
                </Toolbar>
            </Appbar>
            
        </div>
    )
}

export default Navbar
