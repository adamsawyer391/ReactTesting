import React from 'react'
import './FormDate.css';

function FormDateCode() {
    return (
        <div>
            <pre>
                {`import React from 'react'
import './FormDate.css';
import {getStringOfMonthFromInteger} from '../../functions/ReturnDate.js';
import {getDayOfWeek} from '../../functions/ReturnDayOfWeek.js';
import FormDateCode from './FormDateCode';

function FormDate() {
    return (
        <div className="date-time-box">

            <h1>
                Hello HTML
            </h1>
            <div className="empty-space">

            </div>
            <input />

            <div className="date-flex-display">
                <p>
                    To Locale Time String: 
                </p>
                <p>
                    {new Date().toLocaleTimeString()}
                </p>
            </div>

            <div className="date-flex-display">
                <p>
                    To Local Date String: 
                </p>
                <p>
                    {new Date().toLocaleDateString()}
                </p>
            </div>

            <div className="date-flex-display">
                <p>
                    To Locale String: 
                </p>
                <p>
                    {new Date().toLocaleString()}
                </p>
            </div>

            <div className="date-flex-display">
                <p>
                    To UTC String: 
                </p>
                <p>
                    {new Date().toUTCString()}
                </p>
            </div>

            <div className="date-flex-display">
                <p>
                    To Time String: 
                </p>
                <p>
                    {new Date().toTimeString()}
                </p>
            </div>

            <div className="date-flex-display">
                <p>
                    Get Date As an Integer: 
                </p>
                <p>
                    {new Date().getDate()}
                </p>
            </div>

            <div className="date-flex-display">
                <p>
                    Get Month As an Integer: 
                </p>
                <p>
                    {new Date().getMonth()}
                </p>
            </div>

            <div className="date-flex-display">
                <p>
                    Get Month As a String: 
                </p>
                <p>
                    {getStringOfMonthFromInteger(new Date().getMonth())}
                </p>
            </div>

            <div className="date-flex-display">
                <p>
                    Get Day of Week as Integer: 
                </p>
                <p>
                    {new Date().getDay()}
                </p>
            </div>

            <div className="date-flex-display">
                <p>
                    Get Day of Week as String: 
                </p>
                <p>
                    {getDayOfWeek(new Date().getDay())}
                </p>
            </div>

            <div className="empty-space">

            </div>

            <h1>
                And Here's The Code:
            </h1>
            
            <FormDateCode />
            
        </div>
    )
}

export default FormDate

`}
            </pre>
        </div>
    )
}

export default FormDateCode
