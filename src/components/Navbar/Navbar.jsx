import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { FaUser,FaMoon } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
function Navbar() {
    return (  
        <nav className="nav-bar">
            <div className='nav-bar-ingredients'>
                <div className='logo'>SHOPIFY</div>
                <div className='search-place'>
                    <input type="text" />
                    <CiSearch/>
                </div>
                <ul className='nav-right-side'>
                    <li>Products</li>
                    <li>Categories</li>
                    <li><FaUser /> Login</li>
                    <li><AiOutlineShoppingCart /></li>
                    <li><FaMoon/></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;