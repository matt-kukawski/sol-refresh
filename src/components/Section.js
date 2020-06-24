import React from 'react';

function Section(props) {
  return (
    <section id={props.id} className={props.sectionClass}>
        <div className={props.divClass}>
            <h1 className={props.h1Class}>{props.title}</h1>
            <h2 className={props.h2Class}>
                A simple container to divide your page into sections, like the one you're currently reading
            </h2>
            <div className="notification has-background-warning">
              <p className="is-size-5"> 
                {props.text}
              </p>
            </div>
        </div>
    </section>
  );
}

export default Section;