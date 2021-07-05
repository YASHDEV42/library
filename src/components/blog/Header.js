import React from 'react'
import { NavLink } from 'react-router-dom' 
import {Navbar, Nav} from 'react-bootstrap'
import "./Header.css"

const Header= () => {
    return (
    <Navbar className="nav-bar" >
        <div className="Mcontainer">
        <NavLink className="navbar-brandy" to="/">YÖS</NavLink>
            <Nav className="ml-auto nav-item">
                <NavLink className="nav-linky" exact to="/">الصفحة الرئيسية</NavLink>
                <NavLink className="nav-linky" to="/bookslist">المكتبة</NavLink>
            </Nav>
        </div>
    </Navbar>
    )
}

export default Header
