import { NavLink } from 'react-router-dom';


function Navigation() {
    return (
        <nav>
            <NavLink to="/welcome">Welcome</NavLink>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/checkout">Checkout</NavLink>
        </nav>
    )
}

export default Navigation;