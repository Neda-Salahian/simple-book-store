import React, { useContext, useEffect } from 'react';
import BookContext from '../context/BookContext.jsx';
import UserContext from '../context/UserContext.jsx';
import CheckoutContext from '../context/CheckoutContext.jsx';


const Books = () => {
  const [name] = useContext(UserContext);
  const [books, setBooks] = useContext(BookContext);
  const [checkout, setCheckout] = useContext(CheckoutContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://edwardtanguay.vercel.app/share/techBooks.json"
        );
        const data = await response.json();
        if (Array.isArray(data)) {
          setBooks(data);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [setBooks]);

  const handleOrder = (bookId) => {
    setCheckout((prevCheckouts) => ({
      ...prevCheckouts,
      [bookId]: (prevCheckouts[bookId] || 0) + 1,
    }));
  };

  return (
    <div>
        <h5>Hello {name}, there are {books.length} Books, which would you like to buy?</h5>
      <div className='box-books'>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <img
                src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}
                alt={`${book.title} cover`}
                style={{ width: '100px', height: '150px' }}
                onClick={() => {
                    handleOrder(book.id);
                  }}
              />
              {checkout[book.id] && <p>Ordered {checkout[book.id]}
              </p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Books;
