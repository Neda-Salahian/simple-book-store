import { BrowserRouter  , Routes , Route } from 'react-router-dom';
import { useState } from 'react'

import Welcome from "./components/welcome.jsx"
import Books from "./components/Books.jsx"
import Checkout from './components/Checkout.jsx';

import Navigation from "./components/Navigations.jsx";
import BookContext from "./context/BookContext.jsx";
import UserContext from "./context/UserContext.jsx"
import CheckoutContext from "./context/CheckoutContext.jsx";
import '../src/index.css'



function App() {
  const [name , setName ] = useState('');
  const [Bookviews, setBookview] = useState([]);
  const [checkout, setCheckout] = useState([]);


  return (
    <>
      <h1>BookStore</h1>
      <CheckoutContext.Provider value={[checkout , setCheckout]}>
        <BookContext.Provider value={[Bookviews , setBookview]}>
          <UserContext.Provider value={[name , setName]}>
          <BrowserRouter>
            <Navigation />
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </BrowserRouter>
          </UserContext.Provider>
        </BookContext.Provider>
      </CheckoutContext.Provider>
    </>
  )
}

export default App
