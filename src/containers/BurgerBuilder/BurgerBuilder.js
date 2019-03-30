import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


const INGREDIENT_PRICES = {
    cheese: 0.4,
    salad: 0.25,
    meat: 1.3,
    bacon: 0.8
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('https://react-burger-app-cfe0e.firebaseio.com/ingredients.json')
        .then(response => {
            this.setState({ ingredients: response.data })
        })
        .catch(error => {
            this.setState({ error: true })
        })
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

    purchaseContinueHandler = () => {
    //     alert('You Continue!')
        this.setState({ loading: true })

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Laszlo Fodor',
                adress: {
                    street: 'Ciprus',
                    zipCode: '1087',
                    country: 'Hungary'
                },
                email: 'fodor.laszlo86@gmail.com'
            },
            deliveryMethod: 'normal'


        }
        axios.post('/orders.json', order)
             .then(res => {
                 this.setState({ loading: false, purchasing: false })
             })
             .catch(err => {
                this.setState({ loading: false, purchasing: false })
                console.log(err)
             })
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

        let orderSummary = null;

        let burger = this.state.error ? <p>Ingredients cannot be loaded</p> : <Spinner />;

        if(this.state.ingredients) {
            burger = (
                <Aux>
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
            orderSummary = <OrderSummary 
                                ingredients={ this.state.ingredients }
                                purchaseContinue={ this.purchaseContinueHandler }
                                purchaseCancel={ this.purchaseCancelHandler } 
                                price={ this.state.totalPrice } />
        }

        if(this.state.loading) {
            orderSummary = <Spinner />
        }
        
        return (
            <Aux>
                <Modal 
                    show={ this.state.purchasing }
                    cancelPurchase={ this.purchaseCancelHandler }
                >
                    { orderSummary }
                </Modal>
                { burger }
            </Aux>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);