import React from 'react';
import classes from './Preview.module.css';

import Img from '../../UI/Img/Img';
import useRenderCount from '../../utils/useRenderCount'


const Preview = (props) => {
    useRenderCount('Preview')
    let classesArray = [classes.Preview];    
    classesArray.push(classes.show); 
    return (
        <div className={classesArray.join(' ')}  >
            <div className={classes.Content}>
                <h1>{props.new.title}</h1>  
                <p className={classes.ExternalLink}>
                    <a href={props.new.url} target='_blank' rel='noopener noreferrer'>
                        Leer noticia completa en sitio.
                    </a>
                </p> 
                <p>{props.new.description}</p>
                <Img alt={props.new.title} src={props.new.urlToImage} />
                <p>{props.new.content}</p>      
                <button onClick={props.clickedClosePreview}>Close</button>                    
            </div>
        </div>
    );
}

export default Preview;