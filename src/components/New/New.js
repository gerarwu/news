import React from 'react';
import classes from './New.module.css';
import Img from '../../UI/Img/Img';

const New = ({content, onclicked}) =>
    <article className={classes.New} onClick={onclicked} > 
        <Img alt={content.title} src={content.urlToImage} />
        <h1>{content.title}</h1>           
    </article>

export default New;