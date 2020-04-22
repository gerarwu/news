import React from 'react'
import classes from './TopBar.module.css'
import {NavLink} from 'react-router-dom'



const TopBar = () => {
    
    return <div className={classes.TopBar}>
        <div>Country list</div>
        <div>
            <NavLink to='/' exact activeClassName={classes.ActiveLink}>Home</NavLink>
            <NavLink to='/searcher' activeClassName={classes.ActiveLink}>Searcher</NavLink>
        </div>
    </div>
}

export default TopBar