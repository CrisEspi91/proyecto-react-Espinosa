import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import useCartContext from "../../store/CartContext";

function ItemDetail({producto}) {
    const [isInCart, setIsInCart] = useState(false)
    const { addToCart } = useCartContext()

    function onAdd(count){
        setIsInCart(true)
        addToCart(producto, count)
        console.log('agregado al cart', producto, count)
    }

    if (producto === undefined){
        return <h4>cargando. . .</h4>
    }
    else{
        return ( 
            <div className='itemDetailContainer'>
                <div className='containerProduct'>
                    <h1 className='titleProduct'>{producto.title}</h1>
                    <img src={producto.img} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, reiciendis architecto neque animi</p>
                    <h2 className='priceProduct'>${producto.precio}</h2>
                    {isInCart ? 
                        <Link to={'/cart'}>Ir al Carrito</Link>
                    :
                    <ItemCount onAdd={onAdd} stock={producto.stock} initial={1} producto={'Cantidad'}/> }
                    
                </div>
            </div>
        );
    }
}

export default ItemDetail;

