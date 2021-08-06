import React from 'react'

function GetMonthFunction() {
    return (
        <div>
            <pre>
                {`
                export function getStringOfMonthFromInteger(input){
                    console.log('method called');
                    console.log(input);
                    var monthName = '';
                    if(input === 0){
                        monthName = "January";
                    }
                    else if(input == 1){
                        monthName = "February";
                    }
                    else if(input === 2){
                        monthName = "March";
                    }
                    else if(input === 3){
                        monthName = "April";
                    }
                    else if(input === 4){
                        monthName = "May";
                    }
                    else if(input === 5){
                        monthName = "June";
                    }
                    else if(input === 6){
                        monthName = "July";
                    }
                    else if(input === 7){
                        monthName = "August";
                    }
                    else if(input === 8){
                        monthName = "September";
                    }
                    else if(input === 9){
                        monthName = "October";
                    }
                    else if(input === 10){
                        monthName = "November";
                    }
                    else if(input === 11){
                        monthName = "December";
                    }
                    return monthName;
                }
                
                `}
            </pre>
        </div>
    )
}

export default GetMonthFunction
