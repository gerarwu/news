import React from 'react'
import {getHeadLines} from '../services/services'

const useFetch = (country) => {

    let [news, setNews] = React.useState({data: [], loading: true})

    React.useEffect(()=> {
        const getData = async () => {
            const res = await getHeadLines(country)
            setNews({data:[...res.data.articles], loading: false})
        }
        getData()
    },[country])

    return news
}

export default useFetch