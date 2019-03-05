import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'}
];

const buildControls = ({ ingredientAdded, ingredientRemoved, disabled, purchaseable, purchasing,  price }) => (
    <div className={ classes.BuildControls }>
        <p>Current Price: { price.toFixed(2) }</p>
        { controls.map(ctrl => {
           return <BuildControl 
                        key={ ctrl.label } 
                        label={ ctrl.label }
                        added={ () => ingredientAdded(ctrl.type) }
                        removed={ () => ingredientRemoved(ctrl.type) }
                        disabled={ disabled[ctrl.type] } />
        })}
        <button 
            className={ classes.OrderButton }
            disabled={ !purchaseable }
            onClick={ purchasing }>ORDER NOW</button>
    </div>
)

export default buildControls; 