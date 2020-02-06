import React, { Component } from 'react'
import Die from '../Components/Die'

class Rolldice extends Component{
    state = {
        die1 : "one",
        die2 : "one",
        isRolling : false
    };
    
    rollDie=()=>{
        const sides = ["one", "two", "three", "four", "five", "six"]
        const newDie1 = sides[Math.floor(Math.random() * sides.length)];
        const newDie2 = sides[Math.floor(Math.random() * sides.length)];
        this.setState({
            die1 : newDie1,
            die2 : newDie2,
            isRolling : true
        })
        setTimeout(()=>{
            this.setState({
                isRolling : false,
            })
        }, 1000)
    }
    render(){
        return(
            <div className="Roll-dice">
                <div>
                    <Die face={this.state.die1} rolling={this.state.isRolling} />
                    <Die face={this.state.die2} rolling={this.state.isRolling} />
                </div>

                <button onClick={this.rollDie} disabled = {this.state.isRolling}>
                    {this.state.isRolling ? "Rolling..." : "Shuffle Die"}
                </button>
            </div>
        )
    }
}

export default Rolldice