import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';

const Counter = () => {
    const [count, setCount] = useState(0);
    const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

    const addOne = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Counter</h2>
            <p>{feedback}</p>
            <Count count={count} />
            <Button addOne={addOne} />
        </div>
    );
};

export default Counter;