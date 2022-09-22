import { createContext, useState, useEffect } from "react";

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


const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingItem = cartItems.find((cartItem) => 
        cartItem.id === cartItemToRemove.id
    )
    if (existingItem.quantity === 1){
        return cartItems.filter((item) => {
           return item.id !== cartItemToRemove.id
        })
    }
    return cartItems.map((cartItem) => {
        if (cartItem.id === cartItemToRemove.id){
            return {...cartItem, quantity: cartItem.quantity - 1}
        }else{
            return cartItem
        }
})}

const removeAllFromCart = (cartItems, cartItemToRemove) => {
    const existingItem = cartItems.find((cartItem) => 
        cartItem.id === cartItemToRemove.id
    )
    if (existingItem){
        return cartItems.filter((cartItem) => {
            return cartItem.id !== cartItemToRemove.id
        })
    }
}




export const CartDropDownContext = createContext({
    isOpen: false,
    cartItems: [],
    addItemToCart: () => {},
    removeAll: () => {},
    removeFromCart: () => {},
    total: 0
})

export const CartDropDownProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)

    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
        }

    const removeFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
         }    
    
    const removeAll = (productToRemove) => {
        setCartItems(removeAllFromCart(cartItems,productToRemove))
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0
        )
    }, [cartItems])


    useEffect(()=>{
       const newCartTotal = cartItems.reduce((total, cartItem) => 
        total + cartItem.price * cartItem.quantity, 0
       )
       setTotal(newCartTotal)
    }, [cartItems])
        
        

    const value = {isOpen, setIsOpen, cartItems, addItemToCart, setCartItems, addItemToCart, removeFromCart,removeAll, total, setTotal}
    return(
        <CartDropDownContext.Provider value={value}>{children}</CartDropDownContext.Provider>
    )
}