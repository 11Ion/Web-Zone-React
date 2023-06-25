import logo from "../../img/logo.svg";
import menu from "../../img/menu.svg";
import close from "../../img/close_btn.svg";
import home from "../../img/Home.svg";
import about from "../../img/about.svg";
import services from "../../img/services.svg";
import cost from "../../img/cost.svg";
import blog from "../../img/blog.svg";
import contact from "../../img/contact.svg"


import { NavLink, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./style.css"
const Navbar = () => {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };
  
    const handleOutsideClick = (e) => {
      if (
        mobileMenuOpen &&
        e.target.closest(".mobile__menu") === null &&
        e.target.closest(".menu") === null
      ) {
        setMobileMenuOpen(false);
      }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
    
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
      }, );

    return ( 
    <>
     <div className={`mobile__menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile__menu__close" onClick={toggleMobileMenu}>
          <img src={close} draggable="false" alt="img"/>
        </div>
        <ul className="mobile__menu__links">
          <li className="mobile__menu__link">
            <NavLink to="/" onClick={toggleMobileMenu}>
              <img src={logo} alt="logo"/>
              Zone.
            </NavLink>
          </li>
          <li className="mobile__menu__link">
            <NavLink to="/" onClick={toggleMobileMenu}>
                <img src={home} alt="Home" draggable="false" />
            Home
             </NavLink>
          </li>
          <li className="mobile__menu__link">
            <NavLink to="/About" onClick={toggleMobileMenu}>
            <img src={about} alt="img" draggable="false" />

            About Us
            </NavLink>
          </li>
          <li className="mobile__menu__link">
            <NavLink to="/Service" onClick={toggleMobileMenu}>
            <img src={services} alt="img" draggable="false" />

            Service
            </NavLink>
          </li>
          <li className="mobile__menu__link mob__log">
            <NavLink to="/Pricing" onClick={toggleMobileMenu}>
            <img src={cost} alt="img" draggable="false" />
            Pricing
            </NavLink>
          </li>
          <li className="mobile__menu__link mob__reg">
            <NavLink to="/Blog" onClick={toggleMobileMenu}>
            <img src={blog} alt="img" draggable="false" />

            Blog
            </NavLink>
          </li>
          <li className="mobile__menu__link mob__reg">
            <NavLink to="/Contact" onClick={toggleMobileMenu}>
                <img src={contact} alt="img" draggable="false" />
            Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

    <nav className="Navbar">
        <div className="container">
        <NavLink to="/"
        className={
            location.pathname === "/"
              ? "nav__link_a active"
              : "nav__link_a"
          }>
            <div className="navbar__logo">
                <img src={logo} draggable="false" alt="logo"/>
                <span>Zone.</span>
            </div>
            </NavLink>
            <ul className="navbar__items">
                <li className="navbar__item">
                    <NavLink to="/"
                     className={
                        location.pathname === "/"
                          ? "nav__link_a active"
                          : "nav__link_a"
                      }>
                        Home
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="/About"
                     className={
                        location.pathname === "/About"
                          ? "nav__link_a active"
                          : "nav__link_a"
                      }
                    >
                    About Us
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="/Service"
                     className={
                        location.pathname === "/Service"
                          ? "nav__link_a active"
                          : "nav__link_a"
                      }>
                    Service
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="/Pricing"
                     className={
                        location.pathname === "/Pricing"
                          ? "nav__link_a active"
                          : "nav__link_a"
                      }>
                    Pricing 
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="/Blog"
                    className={
                        location.pathname === "/Blog"
                          ? "nav__link_a active"
                          : "nav__link_a"
                      }>
                     Blog
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink to="/Contact"
                    className={
                        location.pathname === "/Contact"
                          ? "nav__link_a active"
                          : "nav__link_a"
                      }>
                        Contact Us
                    </NavLink>
                </li>
            </ul>
            <div className="menu__mobile" onClick={toggleMobileMenu}>
                <img src={menu} alt="icon" draggable="false" />
            </div>
            </div>
        </nav>
    </>
    );
}
 
export default Navbar; 