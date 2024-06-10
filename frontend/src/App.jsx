import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'

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
    <div className="app">
      <Navbar />
    </div>
    
  )
}

export default App
