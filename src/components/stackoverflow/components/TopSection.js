import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import './css/TopSection.css'

function TopSection() {

    const useStyles = makeStyles(theme => ({
        askButton: {
            backgroundColor: '#24a0ed',
            padding: 5,
            margin: 0,
            fontVariant: 'normal'
        },
        questionTitle: {
            fontSize: '30px',
            fontWeight: 'normal',
            padding: 0,
            margin: 0
        }
    }))
    const classes = useStyles();

    return (
        <div>
            <div className="question-row">
                <h2 className={classes.questionTitle}>
                    How to Read Data From Firebase database
                </h2>
                <Button size="small" variant="contained" color="primary" className={classes.askButton}>
                    Ask Question
                </Button>
            </div>
            <div className="question-row-sub">
                <p>
                    Asked: 2 years, 20 months ago
                </p>
                <p>
                    Active: 2 years, 10 months ago
                </p>
                <p>
                    Viewed 457 times
                </p>
            </div>
        </div>
    )
}

export default TopSection
