import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductReview from './pages/ProductReview'
import CartPage from './pages/CartPage'
import CheckOutPage from './pages/CheckOutPage'

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>        
          <Route path="/ProductReview" element={<ProductReview/>}></Route>
          <Route path="/CartPage" element={<CartPage />}></Route>
          <Route path="/CheckOutPage" element={<CheckOutPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App