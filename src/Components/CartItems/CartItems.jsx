import React, { useContext, useState } from 'react'
import './CartItems.css';
import { ShopContext } from '../Context/ShopContext'

import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext)

    const [orderDetails, setOrderDetails] = useState({
        firstName: '',
        lastName: '',
        address: '',
    });
    
  const placeOrder = (orderDetails) => {
    
    if (!orderDetails.firstName || !orderDetails.lastName || !orderDetails.address) {
      alert('Please fill in all the required fields.');
      return;
    }

    
    fetch('http://localhost:3001/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderDetails),
  })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to place order.');
        }
        return response.json();
      })
      .then((data) => {
        
        alert('Order placed successfully!');
       
       
      })
      .catch((error) => {
        
        alert('An error occurred while placing the order.');
        console.error(error);
      });
  };





    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>remove</p>
            </div>
            <hr />
            <div>

                {all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return <div>
                            <div className='cartitems-format cartitems-format-main'>
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>{e.new_price * cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" /> {/* Fixed function name here */}
                            </div>
                            <hr />
                        </div>
                    }
                    return null;
                })}
                <div className='cartitems-down'>
                    <div className='cartitems-total'>
                        <h1>cart Totals</h1>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>

                        </div>
                        <hr />
                        <div className='cartitems-total-item '>
                            <p>Shipping</p>
                            <p>Free Shipping on orders over $99.</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>total</h3>
                            <h3>&{getTotalCartAmount()}</h3>
                        </div>
                        <button>Checkout</button>
                    </div >
                    <div className="cartitems-form1">
                        <h3>fill the details</h3>
                        <form className="cartitems-form1-form">
                            <input
                                type="text"
                                placeholder="First Name"
                                value={orderDetails.firstName}
                                onChange={(e) =>
                                    setOrderDetails({ ...orderDetails, firstName: e.target.value })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={orderDetails.lastName}
                                onChange={(e) =>
                                    setOrderDetails({ ...orderDetails, lastName: e.target.value })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                value={orderDetails.address}
                                onChange={(e) =>
                                    setOrderDetails({ ...orderDetails, address: e.target.value })
                                }
                            />

                            <button onClick={() => placeOrder(orderDetails)}>Place Order</button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CartItems