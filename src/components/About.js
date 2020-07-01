import React from 'react';
import Section from 'components/Section';
import Notification from 'components/Notification';
// import {scrollStyleChange} from 'js/scrollStyleChange.js'
// import {Helmet} from "react-helmet";

function About() {
    return (
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
    );
}

export default About;