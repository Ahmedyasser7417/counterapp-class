import React, { useState } from 'react';
import classes from './styles.module.css';

const CounterFunction = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <header className={classes.header}>
            <h1>Counter App</h1>
            {
                <h1 className={classes.paragraph}>
                    {count <= 5 ? <span> count is smaller than 5</span> : <span> count is bigger than 5</span>}
                </h1>
            }
            <div className={classes.counterContainer}>
                <button className={classes.button} onClick={decrement}>-</button>
                <span className={classes.counter}>{count}</span>
                <button className={classes.button} onClick={increment}>+</button>
                <button onClick={reset}>Reset</button>
            </div>
        </header>
    );
};

export default CounterFunction;

