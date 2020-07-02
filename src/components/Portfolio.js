import React from 'react';
import Section from 'components/Section';
import Card from 'components/Card';
// import {scrollStyleChange} from 'js/scrollStyleChange.js'
// import {Helmet} from "react-helmet";

function Portfolio() {
    return (
        <Section
            id="portfolio" 
            title="Portfolio"
            sectionClass="hero is-fullheight stock-back"
            divClass="hero-body center"
            h1Class="title center has-text-warning"
            h2Class="subtitle center has-text-warning"
            sectionContent={
                <div className="portfolioContainer">
                    <Card
                        imgSrc={require('images/projects/mtg_1201-944.png')}
                        altText="alt text 1"  
                    ></Card>  
                    <Card 
                        imgSrc={require('images/projects/streetshare_1201.png')} 
                        altText="alt text 2"    
                    ></Card> 
                    <Card  
                        imgSrc={require('images/projects/monstrous-mates-940.png')} 
                        altText="alt text 3"    
                    ></Card>  
                    <Card 
                        imgSrc={require('images/projects/sol-quiz_1200.png')} 
                        altText="alt text 4"    
                    ></Card>  
                </div>            
            } 
        >
        </Section>
    );
}

export default Portfolio;

// <Notification
// notificationClass="notification has-background-warning"
// child={<Project 
//     imgSrc={require('images/projects/mtg_deck_builder_940.png')} 
// />}
// >                        
// </Notification>
// <Notification
// notificationClass="notification has-background-warning"
// child={<Project 
//     imgSrc={require('images/projects/streetshare-940.png')} 
// />}
// >                        
// </Notification>
// <Notification
// notificationClass="notification has-background-warning"
// child={<Project 
//     imgSrc={require('images/projects/monstrous-mates-940.png')} 
// />}
// >                        
// </Notification>
// <Notification
// notificationClass="notification has-background-warning"
// child={<Project 
//     imgSrc={require('images/projects/salicylate_checker_940.png')} 
// />}
// >                        
// </Notification>