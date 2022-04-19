import React from 'react';
import carrito from '../../assets/img/carrito.png'
import "./style.css"

function CartWidget() {
    return (
        <div className='carrito'>
           <a href="#"> <img src={carrito}  alt="carrito de compras"></img></a>
        </div>
    );
}

export default CartWidget;