import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

function Item({producto}) {
    return ( 
        <div className='item'>
            <div className='containerProduct'>
                <h1 className='titleProduct'>{producto.title}</h1>
                <img src={producto.img} alt="" />
                <h2 className='priceProduct'>${producto.precio}</h2>
                <Link to={'/item/'+ producto?.id}>Detalles</Link>
            </div>
            
        </div>
    );
}  

export default Item;

