import React from 'react'

class RandomNumber extends React.Component {
    constructor(props){
        super(props);
        this.generateClickedNumber = this.generateClickedNumber.bind(this);
        this.state = { random: 0 }
    }

    generateClickedNumber(){
        const min = Math.ceil(1);
        const max = Math.floor(1000);
        const rand = Math.floor((max-min));
        const rounded = parseInt(rand);
        this.setState({ random: this.state.random + rounded });
    }

    generateNumber(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min + 1)) + min;
    }

    render(){
        return (
            <div>
                <h1>
                    Display a Random Number
                </h1>
                <h2>
                    Display Random Number as Decimal
                </h2>
                {Math.random()}
    
                <h2>
                    Display Number as Whole Number with Demical
                </h2>
                {Math.random() * 100}
    
                <h2>
                    Display Whole Number With Limited Number of Decimal Places
                </h2>
                {Math.random().toString().substring(0, 10) * 100};
    
                <h3>
                    Display a Random Whole Number Between 1 and 100
                </h3>
                <p>
                    {this.generateNumber(1, 100)}
                </p>
    
                <h3>
                    Display Random Number Between 1 and 1000 By Using Button Click
                </h3>
                <p>
                    {this.state.random}
                </p>
                <button onClick={this.generateClickedNumber.bind(this)}>Generate Random Number</button>
                {/* <button onClick={getRandomWholeNumber(1, 1000)}>Generate Number</button> */}
    
            </div>
        )
    }
    
}

export default RandomNumber
