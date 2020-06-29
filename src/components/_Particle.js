import React from 'react';
import Particles from 'react-particles-js';

function Particle(props) {
  return (
        // <Particles className={props.particleClass}
        //     params={{
        //         "particles": {
        //             "number": {
        //                 "value": 120,
        //                 "density": {
        //                     "enable": true,
        //                     "value_area": 800
        //                 }
        //             },
        //             "line_linked": {
        //                 "enable": true,
        //                 "opacity": 0.1
        //             },
        //             "move": {
        //                 "enable": true,
        //                 "speed": 2,
        //                 "direction": "none",
        //                 "random": false,
        //                 "straight": false,
        //                 "out_mode": "out",
        //                 "bounce": false,
        //                 "attract": {
        //                   "enable": false,
        //                   "rotateX": 600,
        //                   "rotateY": 1200
        //                 }
        //             },
        //             "size": {
        //                 "value": 2
        //             },
        //             "color": {
        //                 "value": "#F2B632"
        //             },
        //             "opacity": {
        //                 "anim": {
        //                     "enable": true,
        //                     "speed": 1,
        //                     "opacity_min": 0.05
        //                 }
        //             },
        //             "shape": {
        //                 "type": "star",
        //                 "stroke": {
        //                    "width": 1,
        //                    "color": "#252839"
        //                 },
        //                 // "polygon": {
        //                 //    "nb_sides": 5
        //                 // }
        //             }
        //         },
        //         "interactivity": {
        //             "events": {
        //                 "onclick": {
        //                     "enable": true,
        //                     "mode": "push"
        //                 },
        //                 "onhover": {
        //                     "enable": true,
        //                     "mode": "repulse"
        //                 },
        //             },
        //             "modes": {
        //                 "push": {
        //                     "particles_nb": 1
        //                 }
        //             }
        //         },
        //         "retina_detect": true
        //     }} 
        // />
        
        <Particles className={props.particleClass}
            params={{
                "particles": {
                    "number": {
                      "value": 355,
                      "density": {
                        "enable": true,
                        "value_area": 789.1476416322727
                      }
                    },
                    "color": {
                      "value": "#F2B632"
                    },
                    "shape": {
                      "type": "circle",
                      "stroke": {
                        "width": 0,
                        "color": "#000000"
                      },
                      "polygon": {
                        "nb_sides": 5
                      },
                      "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                      }
                    },
                    "opacity": {
                      "value": 0.48927153781200905,
                      "random": false,
                      "anim": {
                        "enable": true,
                        "speed": 0.2,
                        "opacity_min": 0,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 2,
                      "random": true,
                      "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0,
                        "sync": false
                      }
                    },
                    "line_linked": {
                      "enable": false,
                      "distance": 150,
                      "color": "#ffffff",
                      "opacity": 0.4,
                      "width": 1
                    },
                    "move": {
                      "enable": true,
                      "speed": 0.2,
                      "direction": "none",
                      "random": true,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": false,
                      "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                      }
                    }
                  },
                  "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "bubble"
                      },
                      "onclick": {
                        "enable": true,
                        "mode": "push"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 400,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 83.91608391608392,
                        "size": 1,
                        "duration": 3,
                        "opacity": 1,
                        "speed": 3
                      },
                      "repulse": {
                        "distance": 200,
                        "duration": 0.4
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  },
                  "retina_detect": true
            }}
        />
  );
}

export default Particle;