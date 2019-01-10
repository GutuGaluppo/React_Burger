import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span
                    style={{ textTransform: 'capitalize' }}>
                    {igKey}</span>: {props.ingredients[igKey]}
            </li>
        })

    return (
        <Aux>
            <h3>Your Order</h3>
            <h3>A delicious burger with the following ingredients: </h3>
            <ul>
                {ingredientSummary}
            </ul>
            <h3><strong>Total Price: $ {props.price.toFixed(2)}</strong></h3>
            <p>Cotinue to checkout...</p>
            <Button btnType="Danger" clicked={props.porchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.porchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;