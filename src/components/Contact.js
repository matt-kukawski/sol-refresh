import React from 'react';
import Section from 'components/Section';
import Notification from 'components/Notification';
// import {scrollStyleChange} from 'js/scrollStyleChange.js'
// import {Helmet} from "react-helmet";

function Contact() {
    return (
        <Section
            id="contact" 
            title="Contact"
            sectionClass="hero is-fullheight stock-back"
            divClass="hero-body center" 
            h1Class="title center has-text-warning"
            h2Class="subtitle center has-text-warning"
            sectionContent={
            <div>
                <Notification 
                text="GitHub"
                />
                <Notification 
                text="LinkedIn"
                />
                <Notification 
                text="Email"
                />
            </div>
            } 
        >
        </Section>
    );
}

export default Contact;