import React from 'react';
import classes from './New.module.css';
import Img from '../../UI/Img/Img';

const New = (props) => {
    return (
        <article className={classes.New} onClick={props.onclicked} > 
            <h1>{props.title}</h1>
            <div className={classes.Description}>
                {props.description}
            </div>            
            <Img alt={props.title} src={props.urlImage} />            
        </article>
    );
}

export default New;