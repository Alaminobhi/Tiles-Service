import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Image/marbel icon.jpg'
const Navbar = () => {

    return (
        <div className="header">
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <img style={{ height: "50px" }} className="navbar-brand" src={logo} alt="" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav justify-content-end">
                        <Link className="nav-item nav-link active" to="/home">Home</Link>
                        <Link className="nav-item nav-link" to="/contact">Contact US</Link>
                        <Link className="nav-item nav-link" to="/admin">Admin</Link>
                        <Link className="nav-item nav-link" to="/login">Login</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;