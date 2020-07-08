import React from 'react';
import Section from 'components/Section';
import Card from 'components/Card';
import PortfolioHover from './PortfolioHover';
// import {scrollStyleChange} from 'js/scrollStyleChange.js'
// import {Helmet} from "react-helmet";

function Portfolio() {
    return (
        <Section
            id="portfolio" 
            title=""
            sectionClass="hero is-fullheight stock-back"
            divClass="hero-body center"
            h1Class="title center has-text-warning"
            h2Class="subtitle center has-text-warning"
            h2Text="Portfolio"
            sectionContent={
                <div className="portfolioContainer">
                    <Card
                        imgSrc={require('images/projects/mtg_1201-944.png')}
                        altText="alt text 1"
                        cardClasses="card"
                        addOns={
                            <PortfolioHover 
                                destination="https://mtg-deck-builder-mk.herokuapp.com/"
                                text="A JavaScript deck builder (incl. mana curve visualization) for 'Magic: The Gathering' utilising the MTG API" 
                            />
                        }
                        cardImgClass="card-image"
                    ></Card>  
                    <Card 
                        imgSrc={require('images/projects/streetshare_1201.png')} 
                        altText="alt text 2" 
                        cardClasses="card"
                        addOns={
                            <PortfolioHover 
                                destination="http://www.streetshare.club/"
                                text="A Ruby/Rails app with full backend and frontend functionality created at Le Wagon with a team of three others" 
                            />
                        }  
                        cardImgClass="card-image"
                    ></Card> 
                    <Card  
                        imgSrc={require('images/projects/monstrous-mates-940.png')} 
                        altText="alt text 3" 
                        cardClasses="card"
                        addOns={
                            <PortfolioHover 
                                destination="https://monstrous-mates.herokuapp.com/" 
                                text="A React based app utilising API calls as well as search and filtering" 
                            />
                        }  
                        cardImgClass="card-image"
                    ></Card>  
                    <Card 
                        imgSrc={require('images/projects/sol-quiz_1200.png')} 
                        altText="alt text 4"
                        cardClasses="card"
                        addOns={
                            <PortfolioHover 
                                destination="http://www.sonoflilith.com/quiz_prepositions.php" 
                                text="An interactive JavaScript quiz to help students learning English"
                            />
                        }   
                        cardImgClass="card-image port-hover" 
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