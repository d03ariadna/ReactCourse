import React, { useRef } from 'react'

const FocusScreen = () => {

    //Similar al query selector
    const inputRef = useRef();


    const onClick = () => {

        inputRef.current.select();

    }

    return (
        <>
        
            <h1>Focus Screen</h1>

            <hr />

            <input
                ref={ inputRef }
                type="text"
                placeholder='Enter your name'
                className='form-control'
            />

            <button
                onClick={ onClick }
                className='btn btn-primary mt-2'>
                Set Focus
            </button>
        </>
    )
}

export default FocusScreen
