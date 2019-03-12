import React from 'react';
import classes from './BottomMenu.module.css';
import { NavLink } from 'react-router-dom';

const BottomMenu = (props) => {
    return (
        <nav className={classes.Menu}>
            <ul>
                <li><NavLink to='/headlines' activeClassName={classes.active} >Top Headlines</NavLink></li>
                <li><NavLink to='/general' activeClassName={classes.active}>General</NavLink></li>                
                <li><NavLink to='/alltheworld' activeClassName={classes.active}>Todo el mundo</NavLink></li>
            </ul>
        </nav>
    );
}

export default BottomMenu;