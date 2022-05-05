import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
function ItemDetail({producto}) {
    const [isInCart, setIsInCart] = useState(false)

    function onAdd(count){
        console.log(`Agregaste al carrito ${count} items.`)
        setIsInCart(true)
    }
    return ( 
        <div className='itemDetailContainer'>
            <div className='containerProduct'>
                <h1 className='titleProduct'>{producto.title}</h1>
                <img src={producto.img} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, reiciendis architecto neque animi</p>
                <h2 className='priceProduct'>${producto.precio}</h2>
                {isInCart ? 
                    <Link to={'/'}>Ir al Carrito</Link>
                :
                 <ItemCount onAdd={onAdd} stock={producto.stock} initial={1} producto={'Cantidad'}/> }
                
            </div>
        </div>
    );
}

export default ItemDetail;

