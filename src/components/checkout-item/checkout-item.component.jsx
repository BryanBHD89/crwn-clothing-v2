import "./checkout-item.styles.scss"
import {useContext} from "react"
import {CartDropDownContext} from "../../contexts/cart-drop-down.context"

const CheckOutItem = ( {cartItem}) => {

    const {removeAll,addItemToCart,removeFromCart} = useContext(CartDropDownContext)
    const {name, imageUrl, quantity, price} = cartItem

    const removeHandler = () => removeFromCart(cartItem)
    const removeAllHandler = () => removeAll(cartItem)
    const addItemToCartHandler = () => addItemToCart(cartItem) 

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeHandler}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemToCartHandler}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div onClick={removeAllHandler} className="remove-button">&#10005;</div>
        </div>
    )
}

export default CheckOutItem