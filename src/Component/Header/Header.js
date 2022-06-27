import React, { useState, useEffect } from 'react'
import { NavLink, Link } from "react-router-dom";
import { headerStyle } from './style'
import List from "@material-ui/core/List";
import { useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import ListItem from "@material-ui/core/ListItem";
import siteLogo from "../../assets/images/site-logo.svg";
import crossIcon from "../../assets/images/cross.svg";
import cartIcon from "../../assets/images/cart.png";
import flagIcon from "../../assets/images/flag.png";
import searchIcon from "../../assets/images/search.png";
import { StatusCode, defaultFilter } from '../../utils/constant';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Button,
} from "@material-ui/core";



/**
* @author
* @function Header
**/
// Searching Remaining

export const Header = (props) => {
   
    const classes = headerStyle();


    const openMenu = () => {
        document.body.classList.toggle("open-menu");
    };

    //   const filter = defaultFilter;
    //   filter.pageSize = 100;
    const [bookRecords, setBookRecords] = useState([]);
    const quantity = useSelector(state=>state.cart.quantity)
 
    return (
        <div className={classes.headerWrapper}>
            <AppBar className='site-header' id="header" position="static">
                <div
                    className="top-header">
                    
                </div>
                <div className='bottom-header'>
                    <div className="container">
                        <div className="header-wrapper">
                            <div className="logo-wrapper">
                                <Link to="/" className="site-logo" title="logo">
                                    <img src={siteLogo} alt="logo" />
                                </Link>
                            </div>
                            <div className="nav-wrapper">
                                <div className="top-right-bar">
                                   
                                            <List className="top-nav-bar" spacing={8}>
                                                <ListItem>
                                                    <Link to="/login" title="Login">
                                                        Login
                                                    </Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Link to="/registration" title="Register">
                                                        Register
                                                    </Link>
                                                </ListItem>
                                                {/* <ListItem>
                                                    <Link to="/User" title="User">
                                                        User
                                                    </Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Link to="/category" title="Category">
                                                        Category
                                                    </Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Link to="/book" title="Book">
                                                        Book
                                                    </Link>
                                                </ListItem>
                                                <ListItem>
                                                    <Link to="/addBook" title="Add Book">
                                                       Add Book
                                                    </Link>
                                                </ListItem> */}
                                            </List>
                                                                         
                                        <List className="cart-country-wrap">
                                        <ListItem className="cart-link">
                                            <Link to="/Cart" title="Cart">
                                                <img src={cartIcon} alt="cart.png" />
                                                <span>{quantity}</span>
                                                Cart
                                            </Link>
                                        </ListItem>
                                        <ListItem className="hamburger" onClick={openMenu}>
                                            <span></span>
                                        </ListItem>
                                    </List> 
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </AppBar>
        </div>
    )

}