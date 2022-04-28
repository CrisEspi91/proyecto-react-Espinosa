import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
function ItemDetail({producto}) {
    return ( 
        <div className='itemDetail'>
            <div className='containerProduct'>
                <h1 className='titleProduct'>{producto.title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, reiciendis architecto neque animi</p>
                <h2 className='priceProduct'>${producto.precio}</h2>
            </div>
            <div>
                <ItemCount stock={7} initial={1} producto={'Producto 1'}/>
            </div>
        </div>
    );
}

export default ItemDetail;

