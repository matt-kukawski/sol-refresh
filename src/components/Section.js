import React from 'react';

function Section(props) {
  return (
    <section id={props.id} className={props.sectionClass}>
        <div className={props.divClass}>
          <div className={props.headerCont}>
            <h1 className={props.h1Class}>{props.title}</h1>
            <h2 className={props.h2Class}>
                {props.h2Text}            
            </h2>
          </div>
            <div className="section-content">
                {props.sectionContent}
            </div>
        </div>
    </section>
  );
}

export default Section;