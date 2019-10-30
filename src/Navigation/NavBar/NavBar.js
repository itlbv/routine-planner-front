import React from 'react';
import Logo from '../../UI/Logo/Logo';
import NavItems from '../NavItems/NavItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './NavBar.module.css';

const navBar = () => (
    <header className={classes.navBar}>
        <Logo/>
        <strong>
            <a href={'/'}
               style={{
                   textDecoration: 'none',
                   color: 'white'
               }}
            >Routine Planner</a>
        </strong>
        <nav>
            <NavItems/>
        </nav>
        <DrawerToggle/>
    </header>
);

export default navBar;