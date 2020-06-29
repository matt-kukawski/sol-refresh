import React from 'react';
import Particles from 'react-particles-js';

function Particle(props) {
  return (
        <Particles className={props.particleClass}
            params={{
                "particles": {
                    "number": {
                        "value": 60,
                        "density": {
                            "enable": true,
                            "value_area": 1500
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "opacity": 0.1
                    },
                    "move": {
                        "direction": "right",
                        "speed": 0.5
                    },
                    "size": {
                        "value": 2
                    },
                    "color": {
                        "value": "#F2B632"
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0.05
                        }
                    },
                    "shape": {
                        "type": "star",
                        "stroke": {
                           "width": 1,
                           "color": "#252839"
                        },
                        // "polygon": {
                        //    "nb_sides": 5
                        // }
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "push": {
                            "particles_nb": 1
                        }
                    }
                },
                "retina_detect": true
            }} 
        />
  );
}

export default Particle;