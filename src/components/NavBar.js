import React from 'react';

function NavBar() {
    const [isActive, setisActive] = React.useState(false);

  return (
    <nav className="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger is-primary ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`} 
        >

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

            <div className="navbar-end is-primary">
                <div className="navbar-item is-primary">
 
                </div>
            </div>
        </div>
    </nav>
  );
}

export default NavBar;