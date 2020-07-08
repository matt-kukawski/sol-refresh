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
                            imgSrc={require('images/projects/pink_large.png')}
                            altText="tech top 5"
                            addOns=""
                            cardClasses="card about-tall"
                            cardImgClass="card-image box-blue"
                        />
                        <div>
                            <Card 
                                imgSrc={require('images/projects/blue_half.png')}
                                altText="tech top 5"
                                addOns=""
                                imgClass="box-pink"
                                cardClasses="card"
                                cardImgClass="card-image"
                            />
                            <Card 
                                imgSrc={require('images/projects/pink_half2.png')}
                                altText="life top 5"
                                addOns=""
                                imgClass="box-blue"
                                cardClasses="card"
                                cardImgClass="card-image"
                            />
                        </div>
                        <Card 
                            imgSrc={require('images/projects/blue_large.png')}
                            altText="life top 5"
                            addOns=""
                            cardClasses="card about-tall"
                            cardImgClass="card-image box-pink"
                        />

                    </div>

                </div>
            }         
        >
        </Section>
    );
}

export default About;