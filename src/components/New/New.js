import React from 'react';
import classes from './New.module.css';
import Img from '../../UI/Img/Img';

const New = ({content, onclicked}) =>
    <article className={classes.New} onClick={onclicked} > 
        <h1>{content.title}</h1>
        <div className={classes.Description}>
            {content.description}
        </div>            
        <Img alt={content.title} src={content.urlToImage} />                   
    </article>

export default New;