import React, {useState} from 'react';
import classes from './TimeLineNews.module.css';

import axios from '../../config/axios';

import New from '../New/New';
import Preview from '../Preview/Preview';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';

const TimeLineNews = () => {
    const [news, setNews] = useState([])
    const [newSelected, setNewSelected] = useState()
    
    React.useEffect(()=> {
        const getData = async () => {
            const res = await axios.get('/v2/top-headlines?country=us')
            setNews([...res.data.articles])
        }
        getData()
    },[])

    return <div className={classes.TimeLineNews}>      
        <ProgressBar/>
        {
            news.map((n, i) => <New key={i} content={n} onclicked={() => setNewSelected(n)}/>)
        }        

        {
            newSelected && <Preview new={newSelected} clickedClosePreview={() => setNewSelected(null)} /> 
        }
    </div>
    
}

export default TimeLineNews;