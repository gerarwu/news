import React from 'react'

export const useBody = () => React.useMemo(()=> {
    return document.querySelector('body')
},[])