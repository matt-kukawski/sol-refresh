import React from 'react';

function NavBar() {
    const [isActive, setisActive] = React.useState(false);
    const burgerChange = () => {
      setisActive(!isActive);
    }

  return (
    <nav className="navbar is-fixed-top is-primary has-text-black" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a
            onClick={
              burgerChange
            }
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
                <a 
                  onClick={
                    burgerChange
                  }
                  href="https://matt-kukawski.herokuapp.com/#intro" className="navbar-item">
                    HOME
                </a>
                <a 
                  onClick={
                    burgerChange
                  }
                  href="https://matt-kukawski.herokuapp.com/#about" className="navbar-item">
                    ABOUT
                </a>
                <a 
                  onClick={
                    burgerChange
                  }
                  href="https://matt-kukawski.herokuapp.com/#portfolio" className="navbar-item">
                    PORTFOLIO
                </a>
            </div>

            <div className="navbar-end is-primary">

                  <a href="https://github.com/matt-kukawski" alt="GitHub">
                      <img className="contact-icon" src={require('images/projects/github-logo.png').default} alt="GitHub" />
                  </a>
                  <a href="https://www.linkedin.com/in/mattkukawski/" alt="LinkedIn">
                      <img className="contact-icon" src={require('images/projects/linkedin-logo.png').default} alt="LinkedIn" />
                  </a>
                  <a 
                    onClick={
                      burgerChange
                    }
                    href="mailto:mail@sonoflilith.com" 
                    alt="Email"
                  >
                    <img className="contact-icon" src={require('images/projects/email-logo.png')default} alt="Email" />
                  </a>
            </div>
        </div>
    </nav>
  );
}

export default NavBar;