import React from 'react';
import classes from './Preview.module.css';

import Img from '../../UI/Img/Img';

const Preview = (props) => {
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
                <button onClick={props.clickedClosePreview}>Cerrar</button>                    
            </div>
        </div>
    );
}

export default Preview;