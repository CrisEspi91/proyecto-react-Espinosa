import { createContext, useState } from "react";
import {useContext} from 'react'

const CartContext = createContext()
const {Provider} = CartContext
const useCartContext = () => useContext(CartContext)

// Se va a usar para guardar en el estado los items que agreguemos a ccart

export function CartContextProvider({children}){
    const [cart, setCart] = useState([])

    const addToCart = (item, cant) => {
        if (isInCart()){
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

    const isInCart = () =>{ 
        return true
        //comprobar si X item estta en el carrito
    }

    const cantInCart = () =>{
        const total = 0
        for (let i = 0; i <= cart.length; i++ ){
           return total = i
        }
        //devolver la cantidad de items en el carrito PARA PONER EN NAVBAR
    }

    const calcPriceCart = () => {
        const precio = 0
        for (let i = 0; i <= cart.precio; i * precio){
            return precio = i
        }
        // calcular el precio total del carrito 
    }

    const cleanCart = () =>{
        return cart = ([])
        //limpiar completamente el carrito
    }




    const contextFunction = () => console.log('context liztaylor')
    return(
        <Provider value={{contextFunction, cart, addToCart, removeFromCart, cantInCart, calcPriceCart, cleanCart}}>
            {children}
        </Provider>
    )
}

export default useCartContext