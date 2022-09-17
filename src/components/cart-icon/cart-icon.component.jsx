import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import {CartDropDownContext} from "../../contexts/cart-drop-down.context"
import {useContext} from "react"

const CartIcon = () => {
    const {isOpen, setIsOpen} = useContext(CartDropDownContext)

    const openHandler = (event) => {
        if(!isOpen){
            setIsOpen(true)
        }else{
            setIsOpen(false)
        }
       }

    return(
        <div onClick={openHandler} className="cart-icon-container">
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon