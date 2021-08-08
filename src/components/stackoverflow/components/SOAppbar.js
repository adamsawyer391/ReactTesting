import React from 'react'
import './css/SOAppbar.css'
import Appbar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Button, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

function SOAppbar() {

    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
        },
        appBar: {
            backgroundColor: 'transparent',
            paddingLeft: '10%',
            paddingRight: '10%'
        },
        toolBar: {
            display: 'flex'
        },
        soButton:{
            padding: 0,
            margin: 0,
            marginLeft: 20,
            height: 35,
            padding: 10,
        }
    }));

    const classes = useStyles();
    const search_url = "https://cdn.iconscout.com/icon/premium/png-256-thumb/search-2758901-2290828.png";
    const so_logo = "https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png";

    return (
        <div className={classes.root}>
            <Appbar position="static" className={clsx(classes.appBar)}>
                <Toolbar className={classes.toolBar}>
                    <img src={so_logo} alt="" className="so-logo-icon" />
                    <ul className="so-ul">
                        <li className="so-li">
                            About
                        </li>
                        <li className="so-li">
                            Products
                        </li>
                        <li className="so-li">
                            For Teams
                        </li>
                    </ul>
                    <div className="searchbar-container">
                        <img className="so-search-icon" src={search_url} alt="" />
                        <input className="so-navbar-search" placeholder="Search..." />
                    </div>
                    <div className="btn-so-container">
                        <Button variant="contained" color="default" className={classes.soButton}>
                            Login
                        </Button>
                        <Button variant="contained" color="primary" className={classes.soButton}>
                            Sign Up
                        </Button>
                    </div>
                    
                </Toolbar>
            
            </Appbar>
            
        </div>
    )

    // return (
    //     <div>
    //         <Appbar position="static" className="appbar-stackoverflow">
    //             <Toolbar className="stackoverflow-toolbar">
    //                 <img src={so_logo} alt="" className="so-logo-icon" />
    //                 <ul className="so-ul">
    //                     <li className="so-li">
    //                         About
    //                     </li>
    //                     <li className="so-li">
    //                         Products
    //                     </li>
    //                     <li className="so-li">
    //                         For Teams
    //                     </li>
    //                 </ul>
    //                 <div className="searchbar-container">
    //                     <img className="so-search-icon" src={search_url} alt="" />
    //                     <input className="so-navbar-search" placeholder="Search..." />
    //                 </div>
    //                 <Button className="btn-defualt-so" variant="contained" color="default">
    //                     Login
    //                 </Button>
    //                 <Button className="btn-defualt-so" size="small" variant="contained" color="primary">
    //                     Sign Up
    //                 </Button>
    //             </Toolbar>
    //         </Appbar>
    //     </div>
    // )
}

export default SOAppbar
