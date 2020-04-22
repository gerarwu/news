import React from 'react'

const useRenderCount = (name) => {
    const amount = React.useRef(1)
    console.log(`${name}: ${amount.current++}`)
}

export default useRenderCount