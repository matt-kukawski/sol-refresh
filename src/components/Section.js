import React from 'react';

function Section(props) {
  return (
    <section id={props.id} className={props.sectionClass}>
        <div className={props.divClass}>
            <h1 className={props.h1Class}>{props.title}</h1>
            <h2 className={props.h2Class}>
                {props.h2Text}            
            </h2>
            <div className="section-content">
                {props.sectionContent}
            </div>
        </div>
    </section>
  );
}

export default Section;