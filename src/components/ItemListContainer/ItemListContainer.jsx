import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './style.css'
function ItemListContainer(props) {
    return (
        <div className='itemContainer'>
         <h1>{props.greeting}</h1>
        </div> 
        
    );
}

export default ItemListContainer;