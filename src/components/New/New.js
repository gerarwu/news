import React from 'react';
import classes from './New.module.css';
import Img from '../../UI/Img/Img';
import noop from 'lodash/noop'
import useRenderCount from '../../utils/useRenderCount'


export const New = React.memo(({content, onclicked = noop}) => {
    useRenderCount('New')
    return <article className={classes.New} onClick={() => onclicked(content)} > 
        <Img alt={content.title} src={content.urlToImage} />
        <h1>{content.title}</h1>           
    </article>
})

export default New