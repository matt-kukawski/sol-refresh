import React from 'react';
import Section from 'components/Section';
import Notification from 'components/Notification';
import Project from 'components/Project';
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
                <div>
                    <Notification
                        child={<Project 
                            imgSrc={require('images/projects/mtg_deck_builder_940.png')} 
                    />}
                    >                        
                    </Notification>
                    <Notification
                        child={<Project 
                            imgSrc={require('images/projects/streetshare-940.png')} 
                    />}
                    >                        
                    </Notification>
                    <Notification
                        child={<Project 
                            imgSrc={require('images/projects/monstrous-mates-940.png')} 
                    />}
                    >                        
                    </Notification>
                    <Notification
                        child={<Project 
                            imgSrc={require('images/projects/salicylate_checker_940.png')} 
                    />}
                    >                        
                    </Notification>
                </div>            
            } 
        >
        </Section>
    );
}

export default Portfolio;

