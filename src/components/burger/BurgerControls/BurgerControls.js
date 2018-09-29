import React from 'react';
import classes from './BurgerControls.css';
import Control from './Control/control';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const BurgerControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <Control key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
)

export default BurgerControls;