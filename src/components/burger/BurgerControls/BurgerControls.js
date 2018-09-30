import React from 'react';
import classes from './BurgerControls.css';
import Control from './Control/control';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const BurgerControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <strong>Price: ${props.price.toFixed(2)}</strong>
            {controls.map(ctrl => (
                <Control 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    type={ctrl.type}
                    addIngredient={()=>props.add(ctrl.type)}
                    remIngredient={()=>props.remove(ctrl.type)}
                />
            ))}
            <button 
                onClick={props.showOrderModal}
                className={classes.OrderButton}
                disabled={!props.purchasable}
                >Order Now</button>
        </div>)
}

export default BurgerControls;