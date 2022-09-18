import "./cart-drop-down.styles.scss"
import Button from "../../components/button/button.component"
import {CartDropDownContext} from "../../contexts/cart-drop-down.context"
import {useContext} from "react"
import CartItem from "../cart-item/cart-item.component"

const CartDropDown = () => {
    const {cartItems} = useContext(CartDropDownContext)
    const {isOpen} = useContext(CartDropDownContext)
    console.log(cartItems)
    return(
        <div className={!isOpen ? "isClosed": "cart-dropdown-container"}>
            <div className="cart-items">
                {cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button>CheckOut</Button>
        </div>
    )
}

export default CartDropDown