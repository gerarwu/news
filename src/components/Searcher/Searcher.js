import React from 'react';
import classes from './Searcher.module.css';
import useFetch from '../../services/useFetch'

import axios from '../../config/axios';
import News from '../New/News';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';

const Searcher = () => {

    const [searchValue, setSearchValue] = React.useState('')
    const [searchUrl, setSearchUrl] = React.useState('')
    const [isSearching, setIsSearching] = React.useState(false)
    const {data} =  useFetch(searchUrl)

    React.useEffect(() => {
        if(isSearching){
            setSearchUrl(`/v2/everything?q=${searchValue}`)
            setIsSearching(false)
        }else{
            setSearchUrl('')
        }
    }, [searchValue, isSearching])

    return <div className={classes.Searcher}>
        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>

        <button
            onClick={() => setIsSearching(true)}
            disabled={isSearching || searchValue.trim().length == 0
        }>
            { isSearching ? 'Searching...' : 'Search'}
        </button>
    
        <News news={data}/>
    </div>
}

export default Searcher;