import React from 'react'
import './Expanded.css'
import {  makeStyles } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'

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
                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
                        <h1 className="accordion-title">
                            React
                        </h1>
                    </AccordionSummary>
                    
                    <AccordionDetails className="nav-accordion-details">
                        
                        {/* //BASIC REACT EXAMPLES ACCORDION */}
                        <Accordion className={classes.expandPlain}>
                            <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                                Basic React Examples
                            </AccordionSummary>
                    
                            <AccordionDetails className="nav-accordion-details">
                                <Link to="/random_number">
                                    <h4 className="link-object">
                                        Try Out a Random Number
                                    </h4>
                                </Link>

                                <Link to="/react/examples/forms-and-dates">
                                    <h4 className="link-object">
                                        Learn About Dates
                                    </h4>
                                </Link>

                                <Link to="/react/examples/simple-list">
                                    <h4 className="link-object">
                                        See a Simple List
                                    </h4>
                                </Link>

                                <Link to="/react/examples/passing-data">
                                    <h4 className="link-object">
                                        Passing Data to A New Component
                                    </h4>
                                </Link>
                            </AccordionDetails>
                        </Accordion>

                        {/* //MATERIAL-UI REACT EXAMPLES ACCORDION */}
                        <Accordion className={classes.expandPlain}>
                            <AccordionSummary expandIcon={<AddIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                                UI Clone Examples
                            </AccordionSummary>
                    
                            <AccordionDetails className="nav-accordion-details">
                                <Link to="/react/ui-clones/ny-times-frontpage">
                                    <h4 className="link-object">
                                        NY Times Front Page
                                    </h4>
                                </Link>

                                <Link to="/react/ui-clones/stack-overflow-answer-example">
                                    <h4 className="link-object">
                                        Stack Overflow Answer Page
                                    </h4>
                                </Link>
                            </AccordionDetails>
                        </Accordion>

                    </AccordionDetails>
                </Accordion>
        </div>
    )
}

export default AndroidExpander
