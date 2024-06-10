import { Button } from '@mui/material';
import React, { useState } from 'react';

const Counter = () => {

    let [count, setCount] = useState(0);

    function increment() {
        setCount(count += 1)
    }

    function decrement() {
        setCount(count -= 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <Button onClick={increment}>increment</Button>
            <Button onClick={decrement}>decrement</Button>

        </div>
    );
};

export default Counter;