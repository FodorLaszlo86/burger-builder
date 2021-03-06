import React from 'react';
import classes from './ToolBar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolBar = (props) => (
    <header className={ classes.ToolBar }>
        <DrawerToggle clicked={ props.drawerToggleClicked } />
        <Logo height='80%' />
        <nav className={ classes.DesktopOnly }>
            <NavigationItems />
        </nav>
    </header>
);

export default toolBar;