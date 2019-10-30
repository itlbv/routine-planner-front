import React from 'react';
import classes from './NavItem.module.css'

const navItem = (props) => (
    <a className={classes.navItem} href={props.link}>{props.children}</a>
);

export default navItem;