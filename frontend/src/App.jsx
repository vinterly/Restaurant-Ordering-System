import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import OrderConfirmation from './pages/OrderConfirmation/OrderConfirmation'

function App() {
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    // fetchMenuItems()
  }, [])

  const fetchMenuItems = async () => {
    const response = await fetch("/menu")
    const data = await response.json()
    setMenuItems(data.menuItems)
    console.log(data.menuItems)
    
  }

  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          < Route path="/" element={<Home />} />
          < Route path="/cart" element={<Cart />} />
          < Route path="/order" element={<PlaceOrder />} />
          < Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </div>
      <Footer />
    </>
    
    
  )
}

export default App
