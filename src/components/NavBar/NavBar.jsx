import React from 'react';
import "./NavBar.css";
import logo from "../../assets/img/logo.png";
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link } from 'react-router-dom';
import useCartContext from '../../store/CartContext';
function NavBar() {
    const {contextFunction} = useCartContext()
    contextFunction()
    return (
        <div className='nav'>
            <Link to={'/'}><img src={logo} className='navLogo' alt="logo de página" /></Link>
            <ul className='navUl'>
                <li><Link to={'/'}>HOME</Link>  </li>
                <li><Link to={'/category/AMD'}>Tarjetas AMD</Link> </li>
                <li><Link to={'/category/Intel'}>Tarjetas Intel</Link></li>
            </ul>
            <CartWidget/>
        </div>
    );
}

export default NavBar;