import React, { Component } from "react";
import {Link, NavLink } from 'react-router-dom';

class Navbar extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img className="m-0" src="logos.jpg" style={{height:60 , width:120}}></img>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <NavLink className="nav-link " style={{fontSize: 18 }}  to="/"><b> Home  </b></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" style={{fontSize: 18 }} to="/about"><b> About </b></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" style={{fontSize: 18 }}  to="/ourstory"><b> Our Story </b> </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" style={{fontSize: 18 }}  to="/users"><b> Users </b> </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" style={{fontSize: 18 }}  to="/adduser"><b> Add User </b> </NavLink>
                        </li>
                    </ul>
                    <span className="navbar-text">
                            
                    </span>
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" style={{fontSize: 20 }} to="/login"><b>Login</b></NavLink>
                        <NavLink className="nav-item nav-link" style={{fontSize: 20 }} to="/signup"><b>Sign Up</b></NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;