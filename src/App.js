
import Home from "./routes/home/home.component.jsx"
import { Routes, Route } from "react-router-dom"
import Navigation from "./routes/navigation/navigation.component.jsx"
import Authentication from "./routes/authentication/authentication.component.jsx"
import Shop from "./routes/shop/shop.component"
import CheckOut from "./routes/checkout/checkout.component"




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop/>}/>
        <Route path="check-out" element={<CheckOut/>}/>
        <Route path="sign-in" element={<Authentication/>}/>
      </Route>
    </Routes>
  )
}

export default App;
