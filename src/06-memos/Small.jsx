import React from 'react'

import { memo } from 'react'
//Memo is used to memorize a component
//Memo is used to avoid re rendering a component that didn't change

const Small = memo(({ counter }) => {
    
    console.log('Here I am');

    return (

        <small>{ counter }</small>

    )
})

export default Small
