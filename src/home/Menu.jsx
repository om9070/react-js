import React from 'react'
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <>

            <NavLink exact activeClassName="active_class" to="/">Home</NavLink>
            <NavLink exact activeClassName="active_class" to="/contact">contact</NavLink>
            <NavLink exact activeClassName="active_class" to="/user/op">user</NavLink>
            <NavLink exact activeClassName="active_class" to="/search">Search</NavLink>


            <br />
            <a href="/">home</a>
            <a href="/contact">contact</a>

        </>
    )
}
export default Menu;