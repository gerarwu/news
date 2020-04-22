import React, {useState} from 'react';

import News from '../New/News';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';
import useFetch from '../../services/useFetch'
import useRenderCount from '../../utils/useRenderCount'

const TimeLineNews = () => {
    useRenderCount('TimeLine')
    const {data} = useFetch('/v2/top-headlines?country=us')

    return <div className='TimeLineNews'>      
        <ProgressBar/>
        <News news={data}/>
    </div>
    
}

export default TimeLineNews;