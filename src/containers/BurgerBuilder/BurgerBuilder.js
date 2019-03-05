import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    cheese: 0.4,
    salad: 0.25,
    meat: 1.3,
    bacon: 0.8
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            cheese: 0,
            bacon: 0,
            salad: 0, 
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.values(ingredients).reduce((acc, el) => acc + el , 0);
        this.setState({
            purchaseable: sum > 0
        })
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    }

    render() {
        let disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal 
                    show={ this.state.purchasing }
                    cancelPurchase={ this.purchaseCancelHandler }
                >
                    <OrderSummary ingredients={ this.state.ingredients } />
                </Modal>
                <Burger ingredients={ this.state.ingredients } />
                <BuildControls
                    ingredientAdded={ this.addIngredientHandler } 
                    ingredientRemoved={ this.removeIngredientHandler }
                    disabled={ disabledInfo }
                    purchaseable={ this.state.purchaseable }
                    purchasing={ this.purchaseHandler }
                    price={ this.state.totalPrice } 
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;