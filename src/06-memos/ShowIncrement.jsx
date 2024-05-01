import React from 'react'

const ShowIncrement = React.memo(({ increment }) => {
    console.log('hi')
  return (
      <button
          className='btn btn-primary'
          onClick={() => {
              increment(10)
          }}
      >
        Increment
    </button>
  )
})

export default ShowIncrement
