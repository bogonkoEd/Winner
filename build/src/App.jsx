

import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from "./components/Navbar"
import OrderItem from './components/OrderItem'
import Store from './components/Store'

function App() {

  return(
    <div className='m-2'>
      <Navbar />
      {/* <Hero /> */}
      <Store />
      <Footer /> 
      {/* <OrderItem /> */}
    </div>
  )

}

export default App
