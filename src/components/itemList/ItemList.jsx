
import React from 'react';
import Item from '../Item/Item';

function ItemList({products}) {
    return (
        <>
        {products.map(thisProduct => {
            
            return(
                <Item producto ={thisProduct} key = {thisProduct.id}/>  // react necesita un key SIEMPRE para organizar y reconocer los elementos. 
            )  
        }) 
        } 
    </>
    );

}

export default ItemList;