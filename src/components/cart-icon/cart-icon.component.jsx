import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import {CartDropDownContext} from "../../contexts/cart-drop-down.context"
import {useContext} from "react"

const CartIcon = () => {
    const {isOpen, setIsOpen, cartItems} = useContext(CartDropDownContext)

    const openHandler = (event) => {
        if(!isOpen){
            setIsOpen(true)
        }else{
            setIsOpen(false)
        }
       }

    const shoppingCartTotal = () => {
        return cartItems.reduce((accumulator, currentElement) => {
            return accumulator + currentElement.quantity
        }, 0)
    }

    return(
        <div onClick={openHandler} className="cart-icon-container">
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{shoppingCartTotal()}</span>
        </div>
    )
}

export default CartIcon