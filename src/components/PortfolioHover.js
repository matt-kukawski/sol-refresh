import React from 'react';

function PortfolioHover(props) {
    return (
            <div className="hover-cont">
                <div className="port-hover-text">{props.text}</div>
                <a href={props.destination}>
                    <div className="learn-more-btn">
                        <p className="text">LEARN MORE</p>
                    </div>
                </a>
            </div>

        );
    }
    
export default PortfolioHover;