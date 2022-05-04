import React, {useEffect, useState} from 'react'; // estos datos se guardaran en el estado, sera el estado del componente itemlist container, asi cada vez que hay cambios esto no se tiene que volver a cargar
import products from '../../data/products'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';


function getProduct(itemId){
    return new Promise((resolve, reject) => {   // el resolve es como el return de una funci[on]
       setTimeout( () => {
        const productFound = products.find((tarjetas) => {
            return parseInt(itemId) === tarjetas.id
        })
        resolve(productFound)
       },1000) 
    });
}

function ItemDetailContainer() {
    const [product, setProduct] = useState({})   // para guardar dentro del estado llamamos al setter. setProducts
    const {itemId} = useParams()
    useEffect( () => {
        getProduct(itemId).then(respuetaPromise => {
            setProduct(respuetaPromise)
                })                            //con el .then accedemos a  los datos que nos devuelve la promesa

    },[itemId]) // el array vacio nos indica que se va a ejecutar una sola vez. 
    return (
        <div>
         <ItemDetail producto={product}/>
        </div> 
        
    )
};

export default ItemDetailContainer;