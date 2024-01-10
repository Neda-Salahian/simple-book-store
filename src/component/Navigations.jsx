// import Welcome from "./Welcome.jsx";
import { NavLink } from "react-router-dom";

function Navigation() {

  
  return (
    <>
      <h1>Bookstore</h1>
      <nav>
      <NavLink to="/welcome" >
          Welcome
        </NavLink>
        <NavLink to="/books">
          Books
        </NavLink>
        <NavLink to="/checkout" >
          Checkout
        </NavLink>
      </nav>
    </>
  );
}

export default Navigation;
