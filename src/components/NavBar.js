import React from 'react';

function NavBar() {
  return (
    <nav className="navbar is-fixed-top is-warning" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a href="http://localhost:3000/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <a href="http://localhost:3000/#intro" className="navbar-item">
                    Home
                </a>
                <a href="http://localhost:3000/#about" className="navbar-item">
                    About
                </a>
                <a href="http://localhost:3000/#portfolio" className="navbar-item">
                    Portfolio
                </a>

                <a href="http://localhost:3000/#contact" className="navbar-item">
                    Contact
                </a>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
 
                </div>
            </div>
        </div>
    </nav>
  );
}

export default NavBar;