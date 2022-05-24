import { useContext } from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { setShowCart, showCart } = useContext(CartContext);
    return (
        <div className='cart-icon-container' onClick={ () => setShowCart(!showCart)}>
            <Icon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    );
}

export default CartIcon;