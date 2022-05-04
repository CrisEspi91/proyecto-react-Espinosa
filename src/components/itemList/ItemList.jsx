
import React from 'react';
import Item from '../Item/Item';

function ItemList({products}) {
    return (
        <>
        {products.map(thisProduct => {
            
            return(
                <div>
                    <Item producto ={thisProduct} key = {thisProduct.id}/>   
                </div>
            )  
        }) 
        } 
    </>
    );

}// react necesita un key SIEMPRE para organizar y reconocer los elementos.

export default ItemList;