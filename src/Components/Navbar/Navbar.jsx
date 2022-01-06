import React from "react";
import './Navbar.scss';
import logo from './logo-full.svg';


function Navbar() {
    return (
        <>  
            <div className="topbar">
                <div className="topbar__left">
                    <a href="/"><i class="fab fa-facebook-f"></i></a> 
                    <a href="/"><i class="fab fa-instagram"></i></a>
                    <span>SÍGUENOS EN NUESTRAS REDES SOCIALES </span>
                </div>
                <div className="topbar__right">
                    <span className="contact-number">+51 925-295-386</span>
                    <button className="contact-button">Contacto</button>
                </div>
            </div>
            <div className="Navbar">

                <div className="Navbar__menu">
                    <a href="/" className="link-nav">HOME</a>
                    <a href="/" className="link-nav">CATEGORIAS</a>
                    <a href="/" className="link-nav">PRODUCTOS</a>
                    <a href="/" className="link-nav">PROMOCIONES</a>
                    
                </div>

                <div className="Navbar__logo">
                    <a href="/">
                        <img src={logo} className="logo-navbar" alt="Tic-Pop" />
                    </a>
                </div>

                <div className="Navbar__icons">
                    <a href="/" className="link-icons">
                        <i class="fal fa-search"></i>
                    </a>
                    <a href="/" className="link-icons">
                        <i class="fal fa-user-alt"></i>
                    </a>
                    <a href="/" className="link-icons">
                        <i class="fal fa-heart"></i>
                    </a>
                    <a href="/" className="link-icons">
                        <i class="fal fa-shopping-cart"></i>
                    </a>
                </div>
            </div>
        </>
    );
}

  export default Navbar;