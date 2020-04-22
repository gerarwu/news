import React from 'react'
import classes from './ProgressBar.module.css';
import useRenderCount from '../../utils/useRenderCount'

const ProgressBar = () => {
    useRenderCount('ProgressBar')
    const progressBarReference = React.useRef()

    const scrollHandler = () => {
        const { scrollHeight, clientHeight } = document.documentElement;                  
        const unit = (scrollHeight-clientHeight) / 100;
        progressBarReference.current.style.setProperty('--widthBar', Math.round(window.scrollY / unit), null);
    }

    React.useEffect(()=>{
        document.addEventListener('scroll', scrollHandler);
        return () => {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, [])

    return <div className={classes.ProgressBar} ref={progressBarReference}> </div>

}

export default ProgressBar;