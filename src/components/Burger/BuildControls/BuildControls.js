import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'}
];

const buildControls = ({ ingredientAdded }) => (
    <div className={ classes.BuildControls }>
        { controls.map(ctrl => {
           return <BuildControl 
                        key={ ctrl.label } 
                        label={ ctrl.label }
                        added={ () => ingredientAdded(ctrl.type) } />
        })}
    </div>
)

export default buildControls; 