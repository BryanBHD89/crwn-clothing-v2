import "./checkout.styles.scss"
import { useContext, useEffect } from "react";
import { CartDropDownContext } from "../../contexts/cart-drop-down.context"
import CheckOutItem from "../../components/checkout-item/checkout-item.component"

const CheckOut = () => {

    const { cartItems, setCartItems, total} = useContext(CartDropDownContext)
    
    
   
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Products</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                      <span>Quantity</span>
                </div>
                <div className="header-block">
                     <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>

            </div>
           
            {cartItems.map((cartItem) => (
                    <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
            ))}
            <span className="total">Total: ${total}</span>
        </div>
    )
}

export default CheckOut