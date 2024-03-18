import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'


export default function Navbar() {

 
  const {getTotalCartItems}=useContext(ShopContext)

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Logo" />
        <p>Brand</p>
      </div>
     
      <div className="nav-login-cart">
        <Link style={{textDecoration:'none'}} to="/Login"><button>Login</button></Link>
        <Link style={{textDecoration:'none'}} to="/Cart"><img src={cart_icon} alt="cart_icon" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
