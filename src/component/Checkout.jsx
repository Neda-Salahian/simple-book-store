import { useContext} from "react";
import OrderContext from "../context/OrderContext";
import BooksContext from "../context/BooksContext";

function CheckOut() {
  const [orders, setOrders] = useContext(OrderContext);
  const [books] = useContext(BooksContext);

  const resetOrders = () => {
    return setOrders([]);
  };

  const handleIncrement = (bookId) => {
    setOrders((prevOrders) => ({
      ...prevOrders,
      [bookId]: (prevOrders[bookId] || 0) + 1,
    }));
  };

  // https://stackoverflow.com/questions/36326612/how-to-delete-an-item-from-state-array

  const handleDecrement = (bookId) => {
    setOrders((prevOrders) => {
      const updatedOrders = { ...prevOrders };
      if (updatedOrders[bookId] > 1) {
        updatedOrders[bookId] -= 1;
      } else if (updatedOrders[bookId] === 1){
          delete updatedOrders[bookId]
          console.log(updatedOrders);
      } else {
        alert("blabla")
      }
      return updatedOrders;
    });
  };

  return (
    <>
      <p>One step closer to obtain the book</p>

      <div className="order-container">
        {orders &&
          Object.entries(orders).map(([bookId, count]) => {
            // Find the book with the matching ID in the books array
            // parse bookId to an integer before comparing it with the book's id
            const book = books.find((book) => book.id === parseInt(bookId));

            return (
              <div key={bookId}>
                <img
                  src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}
                  alt={book.title}
                />
                <p>Book Title: {book.title}</p>
                <p>Quantity: {count}</p>

                <div className="button-container">
                  <button onClick={() => handleIncrement(bookId)}>+</button>
                  <button onClick={() => handleDecrement(bookId)}>-</button>
                </div>
              </div>
            );
          })}
      </div>
      <button onClick={resetOrders} className="reset">Reset order</button>
    </>
  );
}

export default CheckOut;
