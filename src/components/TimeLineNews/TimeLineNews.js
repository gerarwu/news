import React, {useState} from 'react';
import classes from './TimeLineNews.module.css';

import {getHeadLines} from '../../services/services'

import New from '../New/New';
import Preview from '../Preview/Preview';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';

import useFetch from '../../services/useFetch'

const TimeLineNews = () => {
    //const [news, setNews] = useState([])
    const [newSelected, setNewSelected] = useState()
    const {data, loading} = useFetch('us')

    
    // React.useEffect(()=> {
    //     const getData = async () => {
    //         const res = await getHeadLines('us')
    //         setNews([...res.data.articles])
    //     }
    //     getData()
    // },[setNews])

    React.useEffect(() => {
        if(newSelected){
            document.querySelector('body').setAttribute('style', 'overflow: hidden')
        }else{
            document.querySelector('body').setAttribute('style', 'overflow: auto')
        }
    }, [newSelected])

    return <div className={classes.TimeLineNews}>      
        <ProgressBar/>
        {
            data.map((n, i) => <New key={i} content={n} onclicked={() => setNewSelected(n)}/>)
        }        

        {
            newSelected && <Preview new={newSelected} clickedClosePreview={() => setNewSelected(null)} /> 
        }
    </div>
    
}

export default TimeLineNews;