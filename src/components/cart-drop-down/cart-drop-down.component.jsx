import "./cart-drop-down.styles.scss"
import Button from "../../components/button/button.component"
import {CartDropDownContext} from "../../contexts/cart-drop-down.context"
import {useContext} from "react"

const CartDropDown = () => {

    const {isOpen} = useContext(CartDropDownContext)

   

   console.log(isOpen)
    return(
        <div className={!isOpen ? "isClosed": "cart-dropdown-container"}>
            <div className="cart-items"/>
            <Button>CheckOut</Button>
        </div>
    )
}

export default CartDropDown