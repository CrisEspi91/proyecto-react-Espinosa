import React from 'react';
import './style.css'
function ItemListContainer(props) {
    return (
        <div className='itemContainer'>
         <h1>{props.greeting}</h1>
        </div> 
        
    );
}

export default ItemListContainer;