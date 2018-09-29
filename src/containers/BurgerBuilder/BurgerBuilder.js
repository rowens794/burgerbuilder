import React, { Component, Fragment } from 'react';
import Burger from '../../components/burger/burger';


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            cheese: 0, 
            bacon: 0,
            meat: 0
        }
    }

    render() {
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Fragment>
        );
    }
} 

export default BurgerBuilder;