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

// <div class="card-content">
//     <div class="media">
//     <div class="media-left">
//         <figure class="image is-48x48">
//         <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
//         </figure>
//     </div>
//     <div class="media-content">
//         <p class="title is-4">John Smith</p>
//         <p class="subtitle is-6">@johnsmith</p>
//     </div>
//     </div>

//     <div class="content">
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//     Phasellus nec iaculis mauris. <a>@bulmaio</a>.
//     <a href="#">#css</a> <a href="#">#responsive</a>
//     <br />
//     <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
//     </div>
// </div>