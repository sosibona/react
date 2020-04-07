import React, { Component } from 'react';
import ProductList from './ProductList';
import CartTitle from './CartTitle';



class ShoppingCart extends Component {
  state = {
    cartItems: [
      {
        id: "1",
        name: "iPhone 11",
        price: 999,
      },
      {
        id: "2",
        name: "iPad Pro",
        price: 799,
      },
    ],
  };
  render() {
    return (
      <div className="column">
        <CartTitle userName={this.props.userData.firstName} count={this.state.cartItems.length} />
        <ProductList cartItems={this.state.cartItems}/>
      </div>
    )
  }
}

export default ShoppingCart;