import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = ({ ingredients, purchaseCancel, purchaseContinue, price }) => {
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
            <p>
                <strong>
                    Total Price: { price.toFixed(2) }
                </strong>
            </p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={ purchaseCancel } >CANCEL</Button>
            <Button btnType='Success' clicked={ purchaseContinue } >CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;