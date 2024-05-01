import React, { useMemo, useState } from 'react'
import {useCounter} from '../hooks/index'

import Small from './Small';

const heavyStuff = ( iterationNumber = 100 ) => {
    for (let i = 0; i < iterationNumber; i++){
        console.log('Printed');
    }

    return `${iterationNumber} iteraciones realizadas`;
}



const MemoHook = () => {

    const { counter, increment } = useCounter(10);    

    const [show, setShow] = useState(false);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <div>
            <h1>Counter: <small>{counter}</small> </h1>
        
            <hr />
            <h4>{ memorizedValue }</h4>

            <button
                className='btn btn-primary'
                onClick={ () => increment()}
            >
                +1
            </button>

            <button
                className='btn btn-outline-primary'
                onClick={ () => setShow(!show)}
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        
        </div>
    )
}

export default MemoHook
