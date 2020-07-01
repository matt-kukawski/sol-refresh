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
            <div className="contact-parent">
                <Notification 
                    notificationClass="notification has-background-warning contact"
                    text="GitHub"
                />
                <Notification 
                    notificationClass="notification has-background-warning contact"
                    text="LinkedIn"
                />
                <Notification
                    notificationClass="notification has-background-warning contact" 
                    text="Email"
                />
            </div>
            } 
        >
        </Section>
    );
}

export default Contact;