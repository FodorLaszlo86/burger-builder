import React from 'react';
import classes from './BackDrop.css';

const backDrop = ({ show, cancelPurchase }) => (
    show ? <div 
            className={ classes.BackDrop }
            onClick={ cancelPurchase }>
            </div> 
            : null
);

export default backDrop;