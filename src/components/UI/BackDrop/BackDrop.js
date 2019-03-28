import React from 'react';
import classes from './BackDrop.css';

const backDrop = ({ show, clicked }) => {
    return (
        show ? <div 
                    className={ classes.BackDrop }
                    onClick={ clicked }>
                </div> 
             : null
    )
    
};

export default backDrop;