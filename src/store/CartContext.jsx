import { createContext, useState } from "react";
import {useContext} from 'react'

const CartContext = createContext()
const {Provider} = CartContext
const useCartContext = () => useContext(CartContext)

// Se va a usar para guardar en el estado los items que agreguemos a ccart

export function CartContextProvider({children}){
    const [cart, setCart] = useState([])

    const addToCart = (item, cant) => {
        if (isInCart(item.id)){
            const newCart = cart.map(cartItem => {
                if(cartItem.id === item.id){
                    const copyItem = {...cartItem}
                    copyItem.cant += cant
                    return copyItem
                } 
                else return cartItem
            })
            setCart(newCart)
        }
        else{
        const newItem = {...item, cant}
        setCart([...cart, newItem])
        }
    }

    const removeFromCart = (id) => {
        const newCart = [...cart]
        const cartFilter = newCart.filter(item => {
            return item.id !== id
        })
        setCart(cartFilter)
    }

    const isInCart = (id) =>{ 
        cart.some(itemCart => itemCart.id === id)
        //comprobar si X item estta en el carrito Some funciona como find pero devuelve un booleano = existe o no existe
    }

    const getItemFromCart = (id) =>{ 
        cart.find(itemCart => itemCart.id === id)
        //comprobar si X item estta en el carrito
    }


    const cantInCart = () =>{
            let total = 0
            cart.forEach((item)=>( total = total + item.cant))
            return total
        //devolver la CANTIDAD de items en el carrito PARA PONER EN NAVBAR usar un foreach, 
        //e ir sumando al total la cantidad de este item
    }

    const calcPriceCart = () => {
        var total = 0
        cart.forEach((item) => total = total + item.precio)
        return total
        // // const total = 0
        // cart.forEach(item => total += cart)
        // return total
        // calcular el precio total del carrito 
    }

    const cleanCart = () =>{
         setCart([])
        //limpiar completamente el carrito
    }




    const contextFunction = () =>   {console.log('context liztaylor')}

    
    return(
        <Provider value={{contextFunction, cart, addToCart, removeFromCart, cantInCart, calcPriceCart, cleanCart, getItemFromCart}}>
            {children}
        </Provider>
    )
    
}

export default useCartContext