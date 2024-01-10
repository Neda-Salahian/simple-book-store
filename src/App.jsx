import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// IMPORT COMPONENTS
import Navigation from "./component/Navigations.jsx";
import Welcome from "./component/Welcome.jsx";
import Books from "./component/Books.jsx";
import CheckOut from "./component/Checkout.jsx";

// IMPORT CONTENT
import UserContext from "./context/UserContext.jsx";
import BooksContext from "./context/BooksContext.jsx";
import OrderContext from "./context/OrderContext.jsx";

// IMPORT CSS
import './App.css'


function App() {
  const [inputName, setInputName] = useState("");
  const [books, setBooks] = useState([]);
  const [orders, setOrders] = useState([]);

  return (
    <>
      <OrderContext.Provider value={[orders, setOrders]}>
        <BooksContext.Provider value={[books, setBooks]}>
          <UserContext.Provider value={[inputName, setInputName]}>
            <BrowserRouter>
              <Navigation />

              <Routes>
                <Route path="" element={<Welcome/>}/>
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/books" element={<Books />} />
                <Route path="/checkout" element={<CheckOut />} />
              </Routes>
            </BrowserRouter>
          </UserContext.Provider>
        </BooksContext.Provider>
      </OrderContext.Provider>
    </>
  );
}

export default App;
