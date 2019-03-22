import React from 'react';
import classes from './Img.module.css';
const Img = (props) => {
    return (
        <div className={classes.Img}>
            <img alt={props.alt} src={props.src} />
        </div>
    );
}

export default Img;