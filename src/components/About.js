import React from 'react';
import Section from 'components/Section';
import Card from 'components/Card';
// import Notification from 'components/Notification';
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
            h2Text="About" 
            sectionContent={
                <div>
                    <div className="top6Div">

                        <Card 
                            imgSrc={require('images/projects/about_test4.png')}
                            altText="tech top 5"
                        />
                        <Card 
                            imgSrc={require('images/projects/about_test5.png')}
                            altText="life top 5"
                        />

                    </div>
                    <Card 
                        imgSrc=""
                        altText="dev principles"
                    />
                </div>
            }         
        >
        </Section>
    );
}

export default About;