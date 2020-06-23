import React from 'react';
import Particle from 'components/Particle';
import Section from 'components/Section';

// <Particle />

function App() {
  return (
    <div className="App">
        <div>    
            <h1 className="title">Bulma</h1>
            <p className="subtitle">
            Modern CSS framework based on{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
                Flexbox
            </a>
            </p>

            <div className="field">
            <div className="control">
                <input className="input" type="text" placeholder="Input" />
            </div>
            </div>

            <div className="field">
            <p className="control">
                <span className="select">
                <select>
                    <option>Select dropdown</option>
                </select>
                </span>
            </p>
            </div>

            <div className="buttons">
                <a className="button is-primary">Primary</a>
                <a className="button is-link">Link</a>
            </div>
        </div>
        <Section id="intro" title="Intro" className="section has-background-primary" />
        <Section title="About" className="section has-background-primary"/>
        <Section title="Portfolio" className="section has-background-primary"/>
        <Section title="Contact" className="section has-background-primary"/>
    </div>
  );
}

export default App;


