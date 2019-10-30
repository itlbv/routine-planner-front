import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavItems.module.css';

const navItems = () => (
    <div className={classes.navItems}>
        <NavItem link={'/users'}>Users</NavItem>
        <NavItem link={'/routines'}>Routines</NavItem>
    </div>
);

export default navItems;