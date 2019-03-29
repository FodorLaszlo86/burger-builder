import React from 'react';
import classes from './Spinner.css';

const spinner = () => {
    console.log(classes);
    return (
        <div className={classes.sk_circle}>
           <div className={ `${ classes.sk_circle1 } ${ classes.sk_child }`} />
           <div className={ `${ classes.sk_circle2 } ${ classes.sk_child }`} />
           <div className={ `${ classes.sk_circle3 } ${ classes.sk_child }`} />
           <div className={ `${ classes.sk_circle4 } ${ classes.sk_child }`} />
           <div className={ `${ classes.sk_circle5 } ${ classes.sk_child }`} />
           <div className={ `${ classes.sk_circle6 } ${ classes.sk_child }`} />
           <div className={ `${ classes.sk_circle7 } ${ classes.sk_child }`} />
           <div className={ `${ classes.sk_circle8 } ${ classes.sk_child }`} />
           <div className={ `${ classes.sk_circle9 } ${ classes.sk_child }`} />
           <div className={ `${ classes.sk_circle10 } ${ classes.sk_child }`} />
           <div className={ `${ classes.sk_circle11 } ${ classes.sk_child }`} />
           <div className={ `${ classes.sk_circle12 } ${ classes.sk_child }`} />
       </div>
    )
}

export default spinner;