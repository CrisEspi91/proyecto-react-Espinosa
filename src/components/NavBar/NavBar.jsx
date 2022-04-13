import React from 'react';
import "./NavBar.css";
import logo from "../../assets/img/logo.png";
function NavBar(props) {
    return (
        <div className='nav'>
            <img src={logo} className='navLogo' alt="logo de página" />
            <ul>
                <a href="#">HOME</a>
                <a href="#">CURSOS</a>
                <a href="#">QUIENES SOMOS</a>
                <a href="#">CONTACTO</a>
            </ul>
        </div>
    );
}

export default NavBar;