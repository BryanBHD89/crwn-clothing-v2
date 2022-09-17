import {Outlet, Link} from "react-router-dom"
import { Fragment, useContext } from "react"
import {ReactComponent as CrwnSvg} from "../../assets/crown.svg"
import "./navigation.styles.scss"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import { UserContext } from "../../contexts/user.context"
import CartDropDown from "../../components/cart-drop-down/cart-drop-down.component"




const Navigation = () => {

    const {currentUser} = useContext(UserContext)

    console.log(currentUser)
    return (
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to="/">
             <CrwnSvg className="logo"/>
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="shop">
              Shop
            </Link>
            {
              currentUser ? (
                <span onClick={signOutUser} className="nav-link">Sign Out</span>
              ) : (
              <Link className="nav-link" to="sign-in">
                Sign in
              </Link>
              )
            }
            <CartIcon/>
          </div>
          <CartDropDown/>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation