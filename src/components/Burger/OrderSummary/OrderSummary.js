import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = ({ ingredients }) => {
    const ingredientSumary = Object.keys(ingredients)
            .map(igKey => {
                return <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{ igKey }</span> : { ingredients[igKey] }</li>
            })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                { ingredientSumary }
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    )
}

export default orderSummary;