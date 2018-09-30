import React from 'react';
import classes from './control.css';


const Control = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.remIngredient}>Less</button>
        <button className={classes.More} onClick={props.addIngredient}>More</button>
    </div>

);

export default Control;