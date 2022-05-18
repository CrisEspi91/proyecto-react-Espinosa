import React from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../../store/CartContext';
import './CartView.css'

function CartView() {
    const {cart, removeFromCart, cleanCart, calcPriceCart} = useCartContext()
   


    if (cart.length === 0){
       return <>
       <h4>No hay items en tu carrito</h4>
       <Link to={'/'}>Volver al catálogo</Link>
       </> 
    }
    else {
        return  <div className='cartViewContainer'>
                    <div className='cartView'>
                        {cart.map(itemCart => {
                            return <div className='cartDetail' key={itemCart.id}>
                                    <img src={itemCart.img} alt="" /> 
                                    <h2>{itemCart.title}</h2>
                                    <h2>Cantidad: {itemCart.cant}</h2>
                                    <h2>${itemCart.cant * itemCart.precio}</h2>
                                    <button onClick={()=>removeFromCart(itemCart.id)} >X</button>
                                    </div>
                                    

                        })}

                            <button onClick={cleanCart}>Vaciar Carrito</button>
                            <h4>Precio total = ${calcPriceCart}</h4>
                        </div>
                </div>
    }
}

export default CartView;