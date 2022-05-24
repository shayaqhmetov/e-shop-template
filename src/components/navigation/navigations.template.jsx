import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { doSignOut } from '../../utils/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.template';
import CartDropdown from '../cart-dropdown/cart-dropdown.template';


import './navigations.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { showCart } = useContext(CartContext);
    return (<Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <Logo />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>SHOP</Link>
                {currentUser ? (<span className='nav-link' onClick={doSignOut}>SIGN OUT</span>) : (<Link className='nav-link' to='/auth'>SIGN IN</Link>)}
                <CartIcon />
                { showCart && <CartDropdown />}
            </div>
        </div>
        <Outlet />
    </Fragment>);

};

export default Navigation;