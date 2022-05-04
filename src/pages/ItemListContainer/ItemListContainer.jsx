import React, {useEffect, useState} from 'react'; // estos datos se guardaran en el estado, sera el estado del componente itemlist container, asi cada vez que hay cambios esto no se tiene que volver a cargar
import products from '../../data/products'
import ItemList from '../../components/itemList/ItemList'
import { useParams } from 'react-router-dom';

function getProducts(categoryId){
    return new Promise((resolve, reject) => {   // el resolve es como el return de una funci[on]
       setTimeout( () => {
           if(categoryId !== undefined){
           const arrayFiltered =  products.filter((item)=>{
                 return item.category === categoryId
             })
             resolve(arrayFiltered)
           }
           else{
               resolve(products)
           }
        resolve(products)
       },1000) 
    });
}

function ItemListContainer(props) {
    const [products, setProducts] = useState([])   // para guardar dentro del estado llamamos al setter. setProducts
    const {categoryId} = useParams()

    useEffect( () => {
        getProducts(categoryId).then(respuetaPromise => {
            setProducts(respuetaPromise)
                })                            //con el .then accedemos a  los datos que nos devuelve la promesa

    },[categoryId]) // el array vacio nos indica que se va a ejecutar una sola vez. Si tiene algo se va a ejecutar cada vez que eso cambie
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