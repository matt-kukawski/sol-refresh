import React from 'react';
import Particle from 'components/Tsparticles';
import Section from 'components/Section';
import Notification from 'components/Notification';
import NavBar from 'components/NavBar';
import About from 'components/About';
import Portfolio from 'components/Portfolio';
import Contact from 'components/Contact';
// import {scrollStyleChange} from 'js/scrollStyleChange.js'
// import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
        <NavBar className="navbar" />
        <div className="content-parent">
          <div className="intro-container content-container">
            <Particle particleClass="particle is-fullheight"/>
          </div>
          <div className="main-container content-container">
            <Section
              id="intro" 
              title="MATT KUKAWSKI"
              sectionClass="hero is-fullheight"
              divClass="hero-body center" 
              h1Class="title center has-text-warning"
              h2Class="subtitle has-text-warning"
              h2Text="Front End Developer"
              headerCont="header-cont"
            >
            </Section>
            <About>
            
            </About>

            <Portfolio>
            
            </Portfolio>
          </div> 
        </div>
    </div>
  );
}

export default App;




 






// <div id="top-of-site-pixel-anchor" onLoad={scrollStyleChange()}></div>


// <Helmet>
// <script type="text/javascript" src="sol-refresh/src/js/scrollStyleChange.js"></script>
// </Helmet>

// <script>try{scrollStyleChange.load({ async: true });}catch(e){}</script>


// <Section title="About" className="section has-background-primary"/>
// <Section title="Portfolio" className="section has-background-primary"/>
// <Section title="Contact" className="section has-background-primary"/>


// <div>    
// <h1 className="title">Bulma</h1>
// <p className="subtitle">
// Modern CSS framework based on{' '}
// <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
//     Flexbox
// </a>
// </p>

// <div className="field">
// <div className="control">
//     <input className="input" type="text" placeholder="Input" />
// </div>
// </div>

// <div className="field">
// <p className="control">
//     <span className="select">
//     <select>
//         <option>Select dropdown</option>
//     </select>
//     </span>
// </p>
// </div>

// <div className="buttons">
//     <a className="button is-primary">Primary</a>
//     <a className="button is-link">Link</a>
// </div>
// </div>