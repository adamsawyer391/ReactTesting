import React, { useState } from 'react'
import '../Navbar.css'
import {  makeStyles } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

function AndroidExpander() {
    const useStyles = makeStyles(theme => ({
        expandPlain: {
            border: 'none',
            boxShadow: 'none',
            margin: 0,
            padding: 0,
        }
    }));

    const classes = useStyles();

    return (
        <div>
            <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                        <h1 className="accordion-title">
                            Android
                        </h1>
                    </AccordionSummary>
                    
                    <AccordionDetails className="nav-accordion-details">
                        <p className="accordion-subtitle">
                            Why Learn Android?
                        </p>
                        
                        <Accordion className={classes.expandPlain}>
                            <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                                Getting Started
                            </AccordionSummary>
                    
                            <AccordionDetails className="nav-accordion-details">
                                <p className="nav-accordion-list-item">
                                    Installing Android Studio
                                </p>
                                <p className="nav-accordion-list-item">
                                    Setup
                                </p>
                                <p className="nav-accordion-list-item">
                                    Touring Android Studio
                                </p>
                            </AccordionDetails>
                        </Accordion>
                    </AccordionDetails>
                </Accordion>
        </div>
    )
}

export default AndroidExpander
