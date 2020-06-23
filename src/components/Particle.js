import React from 'react';
import Particles from 'react-particles-js';

function Particle() {
  return (
    <div className="App">
        <Particles
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
                        "opacity": 0.05
                    },
                    "move": {
                        "direction": "right",
                        "speed": 0.5
                    },
                    "size": {
                        "value": 1.5
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
    </div>
  );
}

export default Particle;