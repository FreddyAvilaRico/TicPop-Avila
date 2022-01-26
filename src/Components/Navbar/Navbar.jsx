import React from "react";
import './Navbar.scss';
import logo from './logo-full.svg';
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';


export default function Navbar () {
    return (
        <>  
            <div className="topbar">
                <div className="topbar__left">
                    <a href="/"><i className="fab fa-facebook-f"></i></a> 
                    <a href="/"><i className="fab fa-instagram"></i></a>
                    <span>SÍGUENOS EN NUESTRAS REDES SOCIALES </span>
                </div>
                <div className="topbar__right">
                    <span className="contact-number">+51 925-295-386</span>
                    <button className="contact-button">Contacto</button>
                </div>
            </div>
            <div className="Navbar">

                <div className="Navbar__menu">
                    <Link to="/" className="link-nav">HOME</Link>
                    <Link to="/categoria/marvel" className="link-nav">CATEGORIAS MARVEL</Link>
                    <Link to="/categoria/dbz" className="link-nav">CATEGORIAS DBZ</Link>
                </div>

                <div className="Navbar__logo">
                    <Link to="/">
                        <img src={logo} className="logo-navbar" alt="Tic-Pop" />
                    </Link>  
                </div>

                <div className="Navbar__icons">
                    <a href="/" className="link-icons">
                        <i className="fal fa-search"></i>
                    </a>
                    <a href="/" className="link-icons">
                        <i className="fal fa-user-alt"></i>
                    </a>
                    <a href="/" className="link-icons">
                        <i className="fal fa-heart"></i>
                    </a>
                    {/* componente del Carrito */}
                    <CartWidget />
                </div>
            </div>
        </>
    );
}