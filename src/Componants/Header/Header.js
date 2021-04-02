import React from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h5 className="navbar-brand">BOOK HOUSE</h5>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse header" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link" to="/orders">Orders</Link>
                        <Link className="nav-link" to="/admin">Admin</Link>
                        <Link className="nav-link" to="/deals">Deals</Link>
                        <Link to='/login'><button className=" nav-link text-white btn btn btn-primary">Login</button></Link>
                    </div>
                    </div>
                </div>  
            </nav>
        </div>
    );
};

export default Header;