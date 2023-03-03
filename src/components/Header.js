import "../styles/Header.css";
import FoodLogo from "../assets/Food_Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import useOnline from "../utlis/useOnline";
import Hamberg from "./Hamberg";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const [click, setClick] = useState(false);
  console.log(click);
  return (
    <>
      <nav className='header'>
        <Link to='/' className='anchor-logo'>
          <img className='logo' src={FoodLogo} alt='logo' />
        </Link>
        <ul className='nav-items'>
          <Link to='/' className='nav-lists'>
            <li>Home</li>
          </Link>
          <Link to='/about' className='nav-lists'>
            <li>About</li>
          </Link>
          <Link to='/contact' className='nav-lists'>
            <li>Contact</li>
          </Link>
          <Link to='/Instamart' className='nav-lists'>
            <li>Instamart</li>
          </Link>
          <li className='nav-lists'>Cart</li>
          <li className='nav-lists'>
          {isOnline ? "🟢" + "Online" : "🛑" + " Disconnected"}
          </li>
          <li className='nav-lists'>
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
          )}
          </li>
        </ul>
      </nav>
      <nav className='nav-mobile-items'>
      <Link to='/' className='anchor-mobile-logo'>
          <img className='mobile-logo' src={FoodLogo} alt='logo' />
        </Link>
        <h4 className='mobile-indicator'>
          {isOnline ? "🟢" + "Online" : "🛑" + " Disconnected"}
          </h4>
        <Hamberg onClick={() => setClick(!click)} click={click}/>
        {click ? (
            <ul className="nav-mobile-ul">
              <Link to='/' className='nav-mobile-lists'>
                <li>Home</li>
              </Link>
              <Link to='/about' className='nav-mobile-lists'>
                <li>About</li>
              </Link>
              <Link to='/contact' className='nav-mobile-lists'>
                <li>Contact</li>
              </Link>
              <Link to='/Instamart' className='nav-mobile-lists'>
                <li>Instamart</li>
              </Link>
              <li className='nav-mobile-lists'>Cart</li>
            </ul>
        ) : null}
      </nav>
    </>
  );
};
export default Header;
