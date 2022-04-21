import React, {useState} from 'react';
import './ItemCount.css'

function ItemCount(props) {
    const [count, setCount] = useState(props.initial) // el useState necesita dos valores, que serian count y setCount y usaremos handlers en los botones para las acciones. 
    function handleAdd(){
        setCount(count + 1)
        if(count === props.stock ){
            alert('alcanzaste el máximo de productos')
        }
    }

    function handleSubs(){
        setCount(count - 1)
    }

    function addChart(){
        alert (`tienes ${count} productos`)
    }
    
    return (
        <div>
            <div className='countContainer'>    
                <div className='counter'>
                    <h2>{props.producto}</h2>
                    <button onClick={handleSubs}>-</button> 
                    <span>{count}</span> 
                    <button onClick={handleAdd}>+</button>
                    <hr/>
                    <div>
                    <button className='addButton' onClick={addChart}>Agregar al carrito</button> 
                    </div>
                </div>  
                         
            </div>
            
        </div>
    );
}

export default ItemCount;