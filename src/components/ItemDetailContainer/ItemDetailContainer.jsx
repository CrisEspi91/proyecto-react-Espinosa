import React, {useEffect, useState} from 'react'; // estos datos se guardaran en el estado, sera el estado del componente itemlist container, asi cada vez que hay cambios esto no se tiene que volver a cargar
import products from '../../data/products'
import ItemDetail from '../ItemDetail/ItemDetail'


function getProduct(){
    return new Promise((resolve, reject) => {   // el resolve es como el return de una funci[on]
       setTimeout( () => {
        resolve(products)
       },3000) 
    });
}

function ItemDetailContainer() {
    const [product, setProduct] = useState([])   // para guardar dentro del estado llamamos al setter. setProducts

    useEffect( () => {
        getProduct().then(respuetaPromise => {
            setProduct(respuetaPromise[1])
                })                            //con el .then accedemos a  los datos que nos devuelve la promesa

    },[]) // el array vacio nos indica que se va a ejecutar una sola vez. 
    return (
        <div className='itemContainer'>
        
         <ItemDetail producto={product}/>
        </div> 
        
    )
};

export default ItemDetailContainer;