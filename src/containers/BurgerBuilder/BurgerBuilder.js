import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICES = {
    cheese: 0.4,
    salad: 0.25,
    meat: 1.3,
    bacon: 0.8
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            cheese: 1,
            bacon: 0,
            salad: 1, 
            meat: 1
        },
        totalPrice: 4
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
    }

    removeIngredientHandler = (type) => {
        
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={ this.state.ingredients } />
                <BuildControls ingredientAdded={ this.addIngredientHandler } />
            </Aux>
        )
    }
}

export default BurgerBuilder;