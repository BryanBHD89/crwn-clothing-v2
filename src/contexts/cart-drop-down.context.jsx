import { createContext, useState } from "react";

const addCartItem = (cartItems,productToAdd) => {
    const existingItem = cartItems.find((cartItem) => 
        cartItem.id === productToAdd.id
    )
    if (existingItem){
        return cartItems.map((cartItem) => {
            if (cartItem.id === productToAdd.id){
                return {...cartItem, quantity: cartItem.quantity + 1}
            }else{
                return cartItem
            }
        })
    }


    return [...cartItems, {...productToAdd, quantity: 1 }]
}
    




export const CartDropDownContext = createContext({
    isOpen: false,
    cartItems: [],
    addItemToCart: () => {}

})

export const CartDropDownProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))}
    

    const value = {isOpen, setIsOpen, cartItems, addItemToCart}
    return(
        <CartDropDownContext.Provider value={value}>{children}</CartDropDownContext.Provider>
    )
}