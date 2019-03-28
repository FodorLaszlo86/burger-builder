import React from 'react';
import classes from './ToolBar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolBar = (props) => (
    <header className={ classes.ToolBar }>
        <div>menu</div>
        <Logo height='80%' />
        <nav className={ classes.DesktopOnly }>
            <NavigationItems />
        </nav>
    </header>
);

export default toolBar;