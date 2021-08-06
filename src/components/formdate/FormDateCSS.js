import React from 'react'

function FormDateCSS() {
    return (
        <div>
            <pre>
                {`
                    .date-flex-display{
                        display: flex;
                        align-items: center;
                        padding-left: 20%;
                        padding-right: 20%;
                        justify-content: space-between;
                        background-color: aqua;
                    }
                    .date-time-box{
                        display: flex;
                        flex-direction: column;
                        padding-left: 20%;
                        padding-right: 20%;
                        padding-top: 50px;
                    }
                    p{
                        padding-right: 20px;
                    }
                    h1{
                        margin: 0;
                        padding: 0;
                    }
                    .empty-space{
                        height: 50px;
                    }
                    pre{
                        text-align: start;
                        background-color: lightgray;
                        padding: 30px;
                        border-radius: 10px;
                    }
                `}
            </pre>
        </div>
    )
}

export default FormDateCSS
