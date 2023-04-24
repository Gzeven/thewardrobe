import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import logo from '../../assests/logo.png';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={logo} className="logo" alt="The Wardrobe" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/winkel">Winkel</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Uitloggen
            </NavLink>
          ) : (
            <NavLink to="/authenticatie">Inloggen</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
