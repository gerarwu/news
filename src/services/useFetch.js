import React from 'react'
import {getHeadLines} from '../services/services'

const useFetch = (url) => {

    let [response, setResponse] = React.useState({data: [], loading: true})

    React.useEffect(()=> {
        const getData = async () => {
            const res = await getHeadLines(url)
            setResponse({data:[...res.data.articles], loading: false})
        }
        url && getData()
    },[url])

    return response
}

export default useFetch