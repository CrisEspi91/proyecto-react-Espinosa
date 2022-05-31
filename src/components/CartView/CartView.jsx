import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../../store/CartContext';
import './CartView.css'
import {createBuyOrder} from '../../data/index'

function CartView() {
    const {cart, removeFromCart, cleanCart, calcPriceCart} = useCartContext()
    const [orderID, setOrderID] = useState(false)
    function handleBuy(){
        const itemsToBuy = cart.map((item) =>({
            title: item.title,
            cant: item.cant,
            precio: item.precio,
            id: item.id,
        }
        ))
        const buyOrder = {
        buyer:{
            name: 'Cristobal',
            phone: '123123124',
            email: 'crisespi@yahoo.com',   
        },
            items: itemsToBuy, 
            total: calcPriceCart(),   
        }
       createBuyOrder(buyOrder).then((res)=>{
           console.log('respuesta', res)
           setOrderID(res)
           cleanCart()
       })
        
    
    }




    if (cart.length === 0){
        if (orderID !== undefined){
            return <h2 className='gracias'>¡GRACIAS POR TU COMPRA!, tu número de compra es: <span className='graciasSpan'>{orderID}</span></h2>
        }
        else{
        return <>
        <h4>No hay items en tu carrito</h4>
        <Link to={'/'}>Volver al catálogo</Link>
        </> 
        }
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
                            <button onClick={handleBuy}>COMPRAR</button>
                            <button onClick={cleanCart}>Vaciar Carrito</button>
                            <h4>Precio total = ${calcPriceCart()}</h4>
                        </div>
                </div>
    }
}

export default CartView;