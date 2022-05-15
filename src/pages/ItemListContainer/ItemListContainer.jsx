import React, {useEffect, useState} from 'react'; // estos datos se guardaran en el estado, sera el estado del componente itemlist container, asi cada vez que hay cambios esto no se tiene que volver a cargar
import ItemList from '../../components/itemList/ItemList';
import { useParams } from 'react-router-dom';
import {getAllItems as getProducts, getItemsByCategory} from '../../data/index'


function ItemListContainer(props) {
    const [products, setProducts] = useState([])   // para guardar dentro del estado llamamos al setter. setProducts
    const {categoryId} = useParams()  // categoryId debe ser el mismo nombre que agregamos en la ruta :categoryId para funcionar. 
   
    useEffect( () => {
        if(categoryId === undefined){
        getProducts(categoryId).then(respuetaPromise => {
            setProducts(respuetaPromise)
                })                            //con el .then accedemos a  los datos que nos devuelve la promesa
            }
            else{
                getItemsByCategory(categoryId).then(respuetaPromise => {
                    setProducts(respuetaPromise)
            })
        }
    },[categoryId]) // el array vacio nos indica que se va a ejecutar una sola vez. Si tiene algo se va a ejecutar cada vez que eso cambie. Hara que el useEffect se inicie otra vez.
    return (
        <div>
                <h1>{props.greeting}</h1>
            <div className='itemContainer'>  
                <ItemList products={products} />
            </div>
        </div> 
        
    )
};

export default ItemListContainer;