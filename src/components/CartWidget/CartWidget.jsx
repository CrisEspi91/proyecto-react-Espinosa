import React from 'react';
import { Link } from 'react-router-dom';
import carrito from '../../assets/img/carrito.png'
import "./style.css"
import useCartContext from '../../store/CartContext';

function CartWidget() {
    //agregar a la cost cantInCart de cartcontext.
    const { calcPriceCart } = useCartContext()
    return (
        <div className='logoCarrito'>
            <Link to={'/cart'}><img src={carrito}  alt="carrito de compras" />{calcPriceCart()}</Link>
        </div>
    );
}

export default CartWidget;