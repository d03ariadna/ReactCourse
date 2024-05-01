import React, { useState } from 'react'
import {useCounter} from '../hooks/index'

import Small from './Small';

const Memorize = () => {

    const { counter, increment } = useCounter(10);    

    const [show, setShow] = useState(false);


    return (
        <div>
            <h1>Counter: <Small counter={ counter } /> </h1>
        
            <hr />

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

export default Memorize
