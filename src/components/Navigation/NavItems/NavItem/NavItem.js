import React from 'react';
import classes from './NavItem.module.css'
import {NavLink} from 'react-router-dom';

const navItem = (props) => (
    <div className={classes.navItem}>
        <NavLink exact
                 to={props.link}
                 activeClassName={classes.active}>
            {props.children}
        </NavLink>
    </div>
);

export default navItem;