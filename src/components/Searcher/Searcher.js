import React from 'react';
import classes from './Searcher.module.css';

import axios from '../../config/axios';
import News from '../New/News';

const Searcher = () => {

    const [searchValue, setSearchValue] = React.useState('')
    const [isSearching, setIsSearching] = React.useState(false)
    const [dataNews, setDataNews] = React.useState([])

    React.useEffect(() => {
        if(isSearching){
            axios.get(`/v2/everything?q=${searchValue}`)
                .then(response => {
                  setDataNews(response.data.articles)
                })               

            setIsSearching(false)
        }
    }, [isSearching])

    return <div className={classes.Searcher}> 
        <input
            type="text"
            placeholder="Search something"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
        />

        <button
            onClick={() => setIsSearching(true)}
            disabled={isSearching || !(searchValue.trim().length)}
        >
            {isSearching ? 'Searching...' : 'Search'}
        </button>
    
        <News news={dataNews}/>
    </div>
}

export default Searcher;