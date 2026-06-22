import { Toaster } from "react-hot-toast"
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import AppLayout from "./pages/AppLayout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductPage from "./pages/ProductPage"
import SearchResults from "./pages/SearchResults"
import FlashDeals from "./pages/FlashDeals"
import Checkout from "./pages/Checkout"
import MyOrder from "./pages/MyOrder"
import OrderTracking from "./pages/OrderTracking"
import Addresses from "./pages/Addresses"
import Protectedroute from "./components/Protectedroute"


const App = () => {
  return (
    <>
    <Toaster position="top-right" toastOptions={{duration:3000,  style:{background: "#1B3022", color:"#fff", borderRadius:"12px",fontSize:"14px"}}}/>
    <Routes>
      {/* auth Pages - No footer/NavBar */}
      <Route path="/login" element={<Login/>}/>

      {/* Main Pages -  with navabar/footer */}
      <Route path="/" element={<AppLayout/>}>
          <Route index  element={<Home/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="products/:id" element={<ProductPage/>}/>
          <Route path="search" element={<SearchResults/>}/>
          <Route path="deals" element={<FlashDeals/>}/>
          <Route element={<Protectedroute/>}>
             <Route path="checkout" element={<Checkout/>}/>
              <Route path="orders" element={<MyOrder/>}/>
              <Route path="orders/:id" element={<OrderTracking/>}/>
              <Route path="addresses" element={<Addresses/>}/>
          </Route>
      </Route>
    </Routes>
    </>
  )
}

export default App