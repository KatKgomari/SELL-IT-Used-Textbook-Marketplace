import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"

const Header:React.FC = () =>{
    return (
    <nav>
        <div className="icon">Icon</div>
        <ul className="nav-items">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sell">Sell</Link></li>
            <li><Link to="/Shop">Shop</Link></li>
            <li><Link to="/store-policies">Store Policies</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
    </nav>)
}

export default Header;