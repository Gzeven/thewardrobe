import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Omschrijving</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Aantal</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Prijs</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Verwijder</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Totaal: €{cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
