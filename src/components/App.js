import React from 'react';
import Particle from 'components/Tsparticles';
import Section from 'components/Section';
import NavBar from 'components/NavBar';
import About from 'components/About';
import Portfolio from 'components/Portfolio';

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