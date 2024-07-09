import React, {useState, useEffect} from 'react';
//import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);
    
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };
    
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
     <div classname="nav__contents">
        <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg"
            alt="netflix_logo"
        />

        <img
            className="nav__avatar"
            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.webp"
            alt="avatar_logo"
        />
        </div>
    </div>
  )
}

export default Nav;