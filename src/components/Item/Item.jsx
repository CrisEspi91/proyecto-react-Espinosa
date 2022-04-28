import React from 'react';
import './Item.css'

function Item({producto}) {
    return ( 
        <div className='item'>
            <div className='containerProduct'>
                <h1 className='titleProduct'>{producto.title}</h1>
                <img src={producto.img} alt="" />
                <h2 className='priceProduct'>${producto.precio}</h2>
                <button>Comprar</button>
            </div>
        </div>
    );
}

export default Item;

