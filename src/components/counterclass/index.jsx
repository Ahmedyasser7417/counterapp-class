import React, { Component } from 'react';
import classes from './styles.module.css';

class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    decrement = () => {
        this.setState(prevState => ({
            count: prevState.count - 1
        }));
    }

    render() {
        return (
            <header className={classes['App-header']}>
                <h1>Counter App</h1>
                {
                <h1 className={classes['paragraph']}>
                    {this.state.count <= 5 ? <span> count is smaller than 5</span> : <span> count is bigger than 5</span>}
                </h1>
                }
                <div className={classes['counter-container']}>
                    <button onClick={this.decrement}>-</button>
                    <span className={classes.counter}>{this.state.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </header>
        );
    }
}

export default CounterClass; 