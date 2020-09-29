//  use "rfce" to start
import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../../firebase/firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div class="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon "></SearchIcon>
      </div>

      <div class="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__menu">
            <span className="header__menuLineOne">
              Hello &nbsp; {!user ? "Guest" : user?.email}
            </span>

            <span className="header__menuLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__menu">
            <span className="header__menuLineOne">Returns</span>

            <span className="header__menuLineTwo">Orders</span>
          </div>
        </Link>

        <div className="header__menu">
          <span className="header__menuLineOne">Your</span>

          <span className="header__menuLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__menuBasket">
            <ShoppingBasketIcon />
            <span className="header__menuLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
