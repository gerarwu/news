import React from 'react';
import classes from './New.module.css';

const New = (props) => {
    return (
        <article className={classes.New}> 
            <h1>{props.title}</h1>
            <div className={classes.Description}>
                {props.description}
            </div>
            <div className={classes.Image}>
                <img alt={props.title} src={props.urlImage} />
            </div>
        </article>
    );
}

export default New;