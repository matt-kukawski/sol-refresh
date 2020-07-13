import React from 'react';

function Card(props) {
    return (

            <div className={props.cardClasses}>
                <div className={props.cardImgClass}>
                    <figure className="image is-4by3">
                    <img className={props.imgClass} src={props.imgSrc} alt={props.altText} />
                    {props.addOns}
                    </figure>
                </div>

            </div>

        );
    }
    
export default Card;