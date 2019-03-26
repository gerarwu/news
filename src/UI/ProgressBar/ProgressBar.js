import React from 'react'
import classes from './ProgressBar.module.css';



class ProgressBar extends React.Component {  

    progressBarReference = React.createRef();

    componentDidMount(){        
        document.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount(){        
        document.removeEventListener('scroll', this.scrollHandler);
    }

    scrollHandler = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;            
        const unit = (scrollHeight-clientHeight) / 100;            
        this.progressBarReference.current.style.setProperty('--widthBar', Math.round(window.scrollY / unit), null);
    }

    render(){
        return(<div 
                    className={classes.ProgressBar} 
                    ref={this.progressBarReference}> 
                </div>
        );
    }
}

export default ProgressBar;