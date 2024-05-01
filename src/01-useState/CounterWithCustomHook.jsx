import React from 'react'
import { useCounter } from '../hooks/useCounter'

const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter();

    return (
        <>

            <h1>Counter with Hook: { counter }</h1>
            
            <hr />
            
            <button
                onClick={ () => decrement(5) }
                className='btn btn-primary'>-1</button>
            <button
                onClick={ reset }
                className='btn btn-primary'>Reset</button>
            <button
                onClick={ () => increment(5) }
                className='btn btn-primary'>+1</button>

        </>
    )
}

export default CounterWithCustomHook
