import React, { Fragment } from 'react';

const OrderSummary = (props) => {

    const keys = Object.keys(props.ingredients);

    return (
        <Fragment>
            <h1>Review Your Order</h1>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {keys.map((ingredient,index) => (
                    <li key={index}> {ingredient}: {props.ingredients[ingredient]}</li>
                ))}
            </ul>
            <button onClick={props.cancelOrder}>Cancel Burger</button>
            <button>Order Burger</button>
        </Fragment>
    )
};

export default OrderSummary;