import React, { useState } from 'react'
import Appbar from '@material-ui/core/AppBar'
import './Navbar.css'
import { makeStyles } from '@material-ui/core';

function Navbar() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    //appbar styles
    const useStyles = makeStyles(theme => ({
        root: {
            backgroundColor: '#000'
        }
    }));

    const classes = useStyles();

    return (

        <div>
            <Appbar position="static" className={classes.root}>
                <h1 className="navbar-title-text">
                    React Examples App
                </h1>
            </Appbar>
        </div>
    )
}

export default Navbar
