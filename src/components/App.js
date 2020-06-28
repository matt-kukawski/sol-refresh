import React from 'react';
import Particle from 'components/Particle';
import Section from 'components/Section';
import Notification from 'components/Notification';
import NavBar from 'components/NavBar';
// import {scrollStyleChange} from 'js/scrollStyleChange.js'
// import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
        <NavBar className="navbar" />
        <Section
            id="intro" 
            title="Matt Kukawski"
            sectionClass="hero is-fullheight"
            divClass="hero-body center" 
            h1Class="title center has-text-warning"
            h2Class="is-size-1 has-text-warning"
            h2Text="Front End Developer"
        >
        </Section>
        <Section
            id="about" 
            title="About"
            sectionClass="hero is-fullheight stock-back"
            divClass="hero-body center" 
            h1Class="title center has-text-warning"
            h2Class="subtitle center has-text-warning" 
            sectionContent={
              <Notification 
                text="This is ALSO some really awesome content"
              />
            }         
        >
        </Section>  
        <Section
          id="portfolio" 
          title="Portfolio"
          sectionClass="hero is-fullheight stock-back"
          divClass="hero-body center"
          h1Class="title center has-text-warning"
          h2Class="subtitle center has-text-warning"
          sectionContent={
            <Notification 
              text="This is ALSO some really awesome content"
            />
          } 
        >
        </Section> 
        <Section
          id="contact" 
          title="Contact"
          sectionClass="hero is-fullheight stock-back"
          divClass="hero-body center" 
          h1Class="title center has-text-warning"
          h2Class="subtitle center has-text-warning"
          sectionContent={
            <Notification 
              text="This is ALSO some really awesome content"
            />
          } 
        >
        </Section>
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