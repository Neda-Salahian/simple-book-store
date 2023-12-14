import { useContext } from "react";
import CheckoutContext from "../context/CheckoutContext.jsx";
import BooksContext from "../context/BookContext.jsx";


function Checkout() {
  const [checkout, setCheckout] = useContext(CheckoutContext);
  const [books] = useContext(BooksContext);
  const resetcheckout = () => {
    return setCheckout([]);
  };
  const handIncrement = (bookId) => {
    setCheckout((prevcheckout) => ({
      ...prevcheckout,
      [bookId]: (prevcheckout[bookId] || 0) + 1,
    }));
  };
  const handleDecrement = (bookId) => {
    setCheckout((prevcheckout) => {
      const updatedCheckout = { ...prevcheckout };
      if (updatedCheckout[bookId] > 0) {
        updatedCheckout[bookId] -= 1;
      }
      return updatedCheckout;
    });
  };
  return (
    <>
      <p>One step closer to obtain the book</p>
      <div className="order-container">
        {checkout &&
          Object.entries(checkout).map(([bookId, count]) => {
            const book = books.find((book) => book.id === parseInt(bookId));
            return (
              <div className='order' key={bookId}>
                <img
                  src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}
                  alt={book.title}
                />
                <p>Book Title: {book.title}</p>
                
              </div>
            );
          })}
      </div>
      <button onClick={resetcheckout} className="reset">Reset order</button>
    </>
  );
}
export default Checkout;