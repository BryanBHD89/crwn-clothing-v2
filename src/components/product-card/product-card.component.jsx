import "./product-card.styles.scss"
import {useContext} from "react"
import { CartDropDownContext } from "../../contexts/cart-drop-down.context"
import Button from "../button/button.component"

const ProductCard = ({product}) => {

    const {name, price, imageUrl} = product

    const {addItemToCart} = useContext(CartDropDownContext)

    const addProductToCart = () => addItemToCart(product)
    

    return(
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button onClick={addProductToCart} buttonType="inverted">Add to Cart</Button>
        </div>
    )
        
    
}

export default ProductCard