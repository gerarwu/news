import React, {useState} from 'react';
import classes from './TimeLineNews.module.css';

import {useBody} from '../../utils/dom'

import New from '../New/New';
import Preview from '../Preview/Preview';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';

import useFetch from '../../services/useFetch'

const TimeLineNews = () => {
    console.log('TimeLine')
    const [newSelected, setNewSelected] = useState()
    const {data} = useFetch('/v2/top-headlines?country=us')
    const body = useBody()

    React.useEffect(() => {
        if(newSelected){
           body.setAttribute('style', 'overflow: hidden')
        }else{
            body.setAttribute('style', 'overflow: auto')
        }
    }, [newSelected])

    // with this useCallback we avoid re-rendering all of New's component each time we clicked/selected on a New
    const selected = React.useCallback((content) => {
        setNewSelected(content)
    }, [setNewSelected])

    return <div className='General-grid'>      
        <ProgressBar/>
        
        { data.map((n, i) => <New key={i} content={n} onclicked={selected}/>) }        

        { newSelected && <Preview new={newSelected} clickedClosePreview={() => setNewSelected(null)} /> }
    </div>
    
}

export default TimeLineNews;