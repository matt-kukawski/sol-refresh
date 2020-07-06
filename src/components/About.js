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
            title=""
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
                            addOns=""
                        />
                        <div>
                            <Card 
                                imgSrc={require('images/projects/planet_blue.png')}
                                altText="tech top 5"
                                addOns=""
                                imgClass="planet-pink"
                            />
                            <Card 
                                imgSrc={require('images/projects/planet_blue.png')}
                                altText="life top 5"
                                addOns=""
                                imgClass="planet-blue"
                            />
                        </div>
                        <Card 
                            imgSrc={require('images/projects/about_test5.png')}
                            altText="life top 5"
                            addOns=""
                        />

                    </div>

                </div>
            }         
        >
        </Section>
    );
}

export default About;