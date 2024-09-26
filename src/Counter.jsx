import React, {useState} from 'react'

function Counter() {

const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (

        <div className='counter-container'>
                <p className='count-display'>{count}</p>
                <button className='counter-button' onClick={decrementCount} >decrement</button>
                <button className='counter-button' onClick={incrementCount} >increment</button>
                <button className='counter-button' onClick={reset} >reset</button>
        </div>


    )
}

export default Counter