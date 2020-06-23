import React from 'react';
import Particle from 'components/Particle';

function Section(props) {
  return (
    <section className="section">
        <div className="container">
            <h1 className="title">{props.title}</h1>
            <h2 className="subtitle">
                A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
            </h2>
        </div>
    </section>
  );
}

export default Section;