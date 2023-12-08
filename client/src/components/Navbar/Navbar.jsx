import React, { useState } from "react";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" style={{ width: '100px', borderRadius: '5px' }}/>
            </Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/1">Жінки</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Чоловіки</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Діти</Link>
          </div>
        </div>
        <div className="center">
          <Link className ="link" to="/">МАГАЗИН</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">На головну</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/about">Про нас</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/contact">Контакти</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Магазини</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;
