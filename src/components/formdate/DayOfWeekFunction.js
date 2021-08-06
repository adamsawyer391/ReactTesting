import React from 'react'
import './FormDate.css'

function DayOfWeekFunction() {
    return (
        <div>
            <pre>
                {`export function getDayOfWeek(input){
    var dayOfWeek = '';

    if(input === 1){
        dayOfWeek = "Monday";
    }
    else if(input === 2){
        dayOfWeek = "Tuesday";
    }
    else if(input === 3){
        dayOfWeek = "Wednesday";
    }
    else if(input === 4){
        dayOfWeek = "Thursday";
    }
    else if(input === 5){
        dayOfWeek = "Friday";
    }
    else if(input === 6){
        dayOfWeek = "Satuday";
    }
    else if(input === 7){
        dayOfWeek = "Sunday";
    }

    return dayOfWeek;
}`}
            </pre>
        </div>
    )
}

export default DayOfWeekFunction
