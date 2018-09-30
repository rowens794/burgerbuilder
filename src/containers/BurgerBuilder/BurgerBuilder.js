import React, { Component, Fragment } from 'react';
import Burger from '../../components/burger/burger';
import BurgerControls from '../../components/burger/BurgerControls/BurgerControls';
import Modal from '../../components/UI/modal/modal';
import OrderSummary from '../../components/burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 1.0, 
    bacon: 1.0,
    meat: 2.0
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            cheese: 0, 
            bacon: 0,
            meat: 0
        },
        totalPrice: 4.0,
        purchasable: false,
        purchasing: false
    }

    updatePurchasable = () => {
        const ingredients = {...this.state.ingredients}
        let count = 0;

        for (var item in ingredients) {
            count += ingredients[item];  
        }

        if (count>0 && this.state.purchasable === false){
            this.setState(
                {purchasable: true}
            )
        }

        if (count===0 && this.state.purchasable === true){
            this.setState(
                {purchasable: false}
            )
        }
    }

    addIngredientsHandler = async (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedState = {...this.state.ingredients};
        updatedState[type] = newCount;
        const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        await this.setState({
            ingredients: updatedState,
            totalPrice: updatedPrice
        })

        this.updatePurchasable()
    }

    removeIngredientsHandler = async (type) => {
        
        const oldCount = this.state.ingredients[type];
        const updatedState = {...this.state.ingredients};
        let newCount = 0;
        let newPrice = 0;

        if (oldCount > 0){
            newCount = oldCount - 1;
            newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        } else{
            newCount = 0;
            newPrice = this.state.totalPrice;
        }

        updatedState[type] = newCount;
        
        await this.setState({
            ingredients: updatedState,
            totalPrice: newPrice
        })

        this.updatePurchasable()
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    cancelPurchaseHandler = () => {
        this.setState({purchasing: false})
    }

    render() {
        return (
            <Fragment>
                <Modal show={this.state.purchasing}><OrderSummary ingredients={this.state.ingredients} cancelOrder={this.cancelPurchaseHandler}/></Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls 
                    add={this.addIngredientsHandler} 
                    remove={this.removeIngredientsHandler} 
                    price={this.state.totalPrice}
                    showOrderModal={this.purchaseHandler}
                    purchasable={this.state.purchasable}/>
            </Fragment>
        );
    }
} 

export default BurgerBuilder;