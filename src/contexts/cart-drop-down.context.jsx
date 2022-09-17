import { createContext, useState } from "react";


export const CartDropDownContext = createContext({
    isOpen: false,
    items: []

})

export const CartDropDownProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [items, setItems] = useState([])
    const value = {isOpen, setIsOpen}
    return(
        <CartDropDownContext.Provider value={value}>{children}</CartDropDownContext.Provider>
    )
}