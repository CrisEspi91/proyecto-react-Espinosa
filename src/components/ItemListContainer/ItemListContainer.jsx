import React, {useEffect, useState} from 'react'; // estos datos se guardaran en el estado, sera el estado del componente itemlist container, asi cada vez que hay cambios esto no se tiene que volver a cargar
import './style.css'
import products from '../../data/products'
import ItemList from '../itemList/ItemList';

function getProducts(){
    return new Promise((resolve, reject) => {   // el resolve es como el return de una funci[on]
       setTimeout( () => {
        resolve(products)
       },3000) 
    });
}

function ItemListContainer(props) {
    const [products, setProducts] = useState([])   // para guardar dentro del estado llamamos al setter. setProducts

    useEffect( () => {
        getProducts().then(respuetaPromise => {
            setProducts(respuetaPromise)
                })                            //con el .then accedemos a  los datos que nos devuelve la promesa

    },[]) // el array vacio nos indica que se va a ejecutar una sola vez. 
    return (
        <div className='itemContainer'>
         <h1>{props.greeting}</h1>
         <ItemList products={products} />
         
        </div> 
        
    )
};

export default ItemListContainer;