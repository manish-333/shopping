import React, { useEffect } from 'react';
import './navbar.css';

const Navbar = () => {

  useEffect(() => {
    // Selecting elements after the component mounts
    const menuToggle = document.querySelector("#menuToggle");
    const list = document.querySelector(".list");

    // Event listener for toggle functionality
    const toggleMenu = () => {
      if (list.style.display === "block") {
        list.style.display = "none";
      } else {
        list.style.display = "block";
      }
    };

    // Add event listener to menuToggle
    menuToggle.addEventListener("click", toggleMenu);

    // Cleanup event listener when component unmounts
    return () => {
      menuToggle.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <div className='navbar'>
      <div className='image'>
       <img src="/images/lm.avif" alt="Logo" /> 
      </div>
      <ul className='list'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Feedback</a></li>
        <li><a href="#">Login / Signup</a></li>
      </ul>
      <div className="icone">
      <i class="fa-solid fa-magnifying-glass"></i>
      <i class="fa-solid fa-heart "></i>
      <i class="fa-solid fa-bag-shopping"></i>

      <i className="fa-solid fa-bars" id="menuToggle"></i>

      </div>
    </div>
    
  );
};

export default Navbar;
