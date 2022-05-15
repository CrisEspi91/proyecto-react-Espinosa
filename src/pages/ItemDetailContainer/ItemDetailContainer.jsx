import React, {useEffect, useState} from 'react'; // estos datos se guardaran en el estado, sera el estado del componente itemlist container, asi cada vez que hay cambios esto no se tiene que volver a cargar
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import {getItem as getProduct} from '../../data/index'


function ItemDetailContainer() {
    
    const [product, setProduct] = useState()   // para guardar dentro del estado llamamos al setter. setProducts
    const {itemId} = useParams()
    useEffect( () => {
        getProduct(itemId).then(respuetaPromise => {
            setProduct(respuetaPromise)
                })                            //con el .then accedemos a  los datos que nos devuelve la promesa

    },[itemId]) // el array vacio nos indica que se va a ejecutar una sola vez. 
    return (
        <div>
         <ItemDetail  producto={product}/>
        </div> 
        
    )
};

export default ItemDetailContainer;