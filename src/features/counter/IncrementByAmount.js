/* eslint-disable prettier/prettier */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount } from './counterSlice';
//import styles from './Counter.module.css'

export default function IncrementByAmount() {
    const count = useSelector((state) =>
        state.counter.value)

    const [amount, setAmount] = React.useState(0);

    const handleChange = event => {
        setAmount(parseInt(event.target.value));
    };

    const dispatch = useDispatch();
    return (
        <div>
            <span>{count}</span>
            <br />
            <input type="number" value={amount} onChange={handleChange}></input>
            <button
                aria-label="Increment value by Amount"
                onClick={() => dispatch(incrementByAmount(amount))}
            >
                {' '}
                IncrementByAmount
            </button>
        </div>
    );
}
