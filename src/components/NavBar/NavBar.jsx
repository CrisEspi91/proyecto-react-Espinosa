import React from 'react';
import "./NavBar.css";
import logo from "../../assets/img/logo.png";
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <div className='nav'>
            <img src={logo} className='navLogo' alt="logo de página" />
            <ul className='navUl'>
                <li><Link to={'/'}>HOME</Link>  </li>
                <li><Link to={'/category/:categoryId'}>Catalogo</Link> </li>
                <li><Link to={'/item/:itemId'}>Detalles</Link></li>
            </ul>
            <CartWidget/>
        </div>
    );
}

export default NavBar;