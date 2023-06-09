import React from "react";
import * as variable from '../../common/variable';

const LoadingPage = (props) => {
    // const particlesInit = useCallback(async engine => {
    //     console.log(engine);
    //     await loadFull(engine);
    // }, []);

    // const particlesLoaded = useCallback(async container => {
    //     await console.log(container);
    // }, []);
    return (
        <React.Fragment>
            <div className="loading_wrapper">
                <div className="e-loadholder">
                    <div className="m-loader">
                        <span className="e-text">
                            Đang tải...
                        </span>
                    </div>
                </div>
                {/* <Particles 
                    id="particleCanvas-Blue"
                    options={{
                        particles: {
                            number: {
                                value: 100,
                                density: {
                                    enable: true,
                                    value_area: 800
                                }
                            },
                            color: {
                                value: "#1B5F70"
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 0,
                                    color: "#000000"
                                },
                                polygon: {
                                    nb_sides: 3
                                },
                                image: {
                                    src: "img/github.svg",
                                    width: 100,
                                    height: 100
                                }
                            },
                            opacity: {
                                value: 0.5,
                                random: false,
                                anim: {
                                    enable: true,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: false
                                }
                            },
                            size: {
                                value: 10,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: 10,
                                    size_min: 0.1,
                                    sync: false
                                }
                            },
                            line_linked: {
                                enable: false,
                                distance: 150,
                                color: "#ffffff",
                                opacity: 0.4,
                                width: 1
                            },
                            move: {
                                enable: true,
                                speed: 0.5,
                                direction: "none",
                                random: true,
                                straight: false,
                                out_mode: "bounce",
                                bounce: false,
                                attract: {
                                    enable: false,
                                    rotateX: 394.57382081613633,
                                    rotateY: 157.82952832645452
                                }
                            }
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "grab"
                                },
                                onclick: {
                                    enable: false,
                                    mode: "push"
                                },
                                resize: true
                            },
                            modes: {
                                grab: {
                                    distance: 200,
                                    line_linked: {
                                        opacity: 0.2
                                    }
                                },
                                bubble: {
                                    distance: 1500,
                                    size: 40,
                                    duration: 7.272727272727273,
                                    opacity: 0.3676323676323676,
                                    speed: 3
                                },
                                repulse: {
                                    distance: 50,
                                    duration: 0.4
                                },
                                push: {
                                    particles_nb: 4
                                },
                                remove: {
                                    particles_nb: 2
                                }
                            }
                        },
                        retina_detect: true
                    }}
                />
                  <Particles 
                    id="particleCanvas-White"
                    options={{
                        particles: {
                            number: {
                                value: 250,
                                density: {
                                    enable: true,
                                    value_area: 800
                                }
                            },
                            color: {
                                value: "#ffffff"
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 0,
                                    color: "#000000"
                                },
                                polygon: {
                                    nb_sides: 3
                                },
                                image: {
                                    src: "img/github.svg",
                                    width: 100,
                                    height: 100
                                }
                            },
                            opacity: {
                                value: 0.5,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: 0.2,
                                    opacity_min: 0,
                                    sync: false
                                }
                            },
                            size: {
                                value: 15,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 10,
                                    size_min: 0.1,
                                    sync: false
                                }
                            },
                            line_linked: {
                                enable: false,
                                distance: 150,
                                color: "#ffffff",
                                opacity: 0.4,
                                width: 1
                            },
                            move: {
                                enable: true,
                                speed: 0.5,
                                direction: "none",
                                random: true,
                                straight: false,
                                out_mode: "bounce",
                                bounce: false,
                                attract: {
                                    enable: true,
                                    rotateX: 3945.7382081613637,
                                    rotateY: 157.82952832645452
                                }
                            }
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: {
                                onhover: {
                                    enable: false,
                                    mode: "grab"
                                },
                                onclick: {
                                    enable: false,
                                    mode: "push"
                                },
                                resize: true
                            },
                            modes: {
                                grab: {
                                    distance: 200,
                                    line_linked: {
                                        opacity: 0.2
                                    }
                                },
                                bubble: {
                                    distance: 1500,
                                    size: 40,
                                    duration: 7.272727272727273,
                                    opacity: 0.3676323676323676,
                                    speed: 3
                                },
                                repulse: {
                                    distance: 50,
                                    duration: 0.4
                                },
                                push: {
                                    particles_nb: 4
                                },
                                remove: {
                                    particles_nb: 2
                                }
                            }
                        },
                        retina_detect: true
                    }}
                /> */}
            </div>
            <style jsx>
                {
                    `      
                        body {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
                        @-webkit-keyframes outerRotate1 {
                            0% {
                            transform: translate(-50%, -50%) rotate(0);
                            }
                            100% {
                            transform: translate(-50%, -50%) rotate(360deg);
                            }
                        }
                        @-moz-keyframes outerRotate1 {
                            0% {
                            transform: translate(-50%, -50%) rotate(0);
                            }
                            100% {
                            transform: translate(-50%, -50%) rotate(360deg);
                            }
                        }
                        @-o-keyframes outerRotate1 {
                            0% {
                            transform: translate(-50%, -50%) rotate(0);
                            }
                            100% {
                            transform: translate(-50%, -50%) rotate(360deg);
                            }
                        }
                        @keyframes outerRotate1 {
                            0% {
                            transform: translate(-50%, -50%) rotate(0);
                            }
                            100% {
                            transform: translate(-50%, -50%) rotate(360deg);
                            }
                        }
                        @-webkit-keyframes outerRotate2 {
                            0% {
                            transform: translate(-50%, -50%) rotate(0);
                            }
                            100% {
                            transform: translate(-50%, -50%) rotate(-360deg);
                            }
                        }
                        @-moz-keyframes outerRotate2 {
                            0% {
                            transform: translate(-50%, -50%) rotate(0);
                            }
                            100% {
                            transform: translate(-50%, -50%) rotate(-360deg);
                            }
                        }
                        @-o-keyframes outerRotate2 {
                            0% {
                            transform: translate(-50%, -50%) rotate(0);
                            }
                            100% {
                            transform: translate(-50%, -50%) rotate(-360deg);
                            }
                        }
                        @keyframes outerRotate2 {
                            0% {
                            transform: translate(-50%, -50%) rotate(0);
                            }
                            100% {
                            transform: translate(-50%, -50%) rotate(-360deg);
                            }
                        }
                        @-webkit-keyframes textColour {
                            0% {
                            color: #fff;
                            }
                            100% {
                            color: #3BB2D0;
                            }
                        }
                        @-moz-keyframes textColour {
                            0% {
                            color: #fff;
                            }
                            100% {
                            color: #3BB2D0;
                            }
                        }
                        @-o-keyframes textColour {
                            0% {
                            color: #fff;
                            }
                            100% {
                            color: #3BB2D0;
                            }
                        }
                        @keyframes textColour {
                            0% {
                            color: #fff;
                            }
                            100% {
                            color: #3BB2D0;
                            }
                        }
                        .loading_wrapper {
                            width: 100vw;
                            height: 100vh;
                            background: ${variable.BACKGROUND_COLOR};
                        }
                        .e-loadholder {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            -webkit-transform: translate(-51%, -50%);
                            -moz-transform: translate(-51%, -50%);
                            -ms-transform: translate(-51%, -50%);
                            -o-transform: translate(-51%, -50%);
                            transform: translate(-51%, -50%);
                            width: 240px;
                            height: 240px;
                            border: 5px solid #1B5F70;
                            border-radius: 120px;
                            box-sizing: border-box;
                          }
                          .e-loadholder:after {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            -webkit-transform: translate(-51%, -50%);
                            -moz-transform: translate(-51%, -50%);
                            -ms-transform: translate(-51%, -50%);
                            -o-transform: translate(-51%, -50%);
                            transform: translate(-51%, -50%);
                            content: " ";
                            display: block;
                            background: ${variable.BACKGROUND_COLOR};
                            transform-origin: center;
                            z-index: 0;
                          }
                          .e-loadholder:after {
                            width: 100px;
                            height: 200%;
                            -webkit-animation: outerRotate2 30s infinite linear;
                            -moz-animation: outerRotate2 30s infinite linear;
                            -o-animation: outerRotate2 30s infinite linear;
                            animation: outerRotate2 30s infinite linear;
                          }
                          .e-loadholder .m-loader {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            -webkit-transform: translate(-51%, -50%);
                            -moz-transform: translate(-51%, -50%);
                            -ms-transform: translate(-51%, -50%);
                            -o-transform: translate(-51%, -50%);
                            transform: translate(-51%, -50%);
                            width: 200px;
                            height: 200px;
                            color: #888;
                            text-align: center;
                            border: 5px solid #2a93ae;
                            border-radius: 100px;
                            box-sizing: border-box;
                            z-index: 20;
                            text-transform: uppercase;
                          }
                          .e-loadholder .m-loader:after {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            -webkit-transform: translate(-51%, -50%);
                            -moz-transform: translate(-51%, -50%);
                            -ms-transform: translate(-51%, -50%);
                            -o-transform: translate(-51%, -50%);
                            transform: translate(-51%, -50%);
                            content: " ";
                            display: block;
                            background: ${variable.BACKGROUND_COLOR};
                            transform-origin: center;
                            z-index: -1;
                          }
                          .e-loadholder .m-loader:after {
                            width: 100px;
                            height: 106%;
                            -webkit-animation: outerRotate1 15s infinite linear;
                            -moz-animation: outerRotate1 15s infinite linear;
                            -o-animation: outerRotate1 15s infinite linear;
                            animation: outerRotate1 15s infinite linear;
                          }
                          .e-loadholder .m-loader .e-text {
                            font-size: 14px;
                            font-size: 1.4rem;
                            font-family: 'Roboto';
                            line-height: 130px;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            -webkit-transform: translate(-51%, -50%);
                            -moz-transform: translate(-51%, -50%);
                            -ms-transform: translate(-51%, -50%);
                            -o-transform: translate(-51%, -50%);
                            transform: translate(-51%, -50%);
                            -webkit-animation: textColour 1s alternate linear infinite;
                            -moz-animation: textColour 1s alternate linear infinite;
                            -o-animation: textColour 1s alternate linear infinite;
                            animation: textColour 1s alternate linear infinite;
                            display: block;
                            width: 140px;
                            height: 140px;
                            text-align: center;
                            border: 5px solid #3bb2d0;
                            border-radius: 70px;
                            box-sizing: border-box;
                            z-index: 20;
                          }
                          .e-loadholder .m-loader .e-text:before, .e-loadholder .m-loader .e-text:after {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            -webkit-transform: translate(-51%, -50%);
                            -moz-transform: translate(-51%, -50%);
                            -ms-transform: translate(-51%, -50%);
                            -o-transform: translate(-51%, -50%);
                            transform: translate(-51%, -50%);
                            content: " ";
                            display: block;
                            background: ${variable.BACKGROUND_COLOR};
                            transform-origin: center;
                            z-index: -1;
                          }
                          .e-loadholder .m-loader .e-text:before {
                            width: 110%;
                            height: 40px;
                            -webkit-animation: outerRotate2 3.5s infinite linear;
                            -moz-animation: outerRotate2 3.5s infinite linear;
                            -o-animation: outerRotate2 3.5s infinite linear;
                            animation: outerRotate2 3.5s infinite linear;
                          }
                          .e-loadholder .m-loader .e-text:after {
                            width: 40px;
                            height: 110%;
                            -webkit-animation: outerRotate1 8s infinite linear;
                            -moz-animation: outerRotate1 8s infinite linear;
                            -o-animation: outerRotate1 8s infinite linear;
                            animation: outerRotate1 8s infinite linear;
                          }
                          
                          #particleCanvas-White {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            -webkit-transform: translate(-51%, -50%);
                            -moz-transform: translate(-51%, -50%);
                            -ms-transform: translate(-51%, -50%);
                            -o-transform: translate(-51%, -50%);
                            transform: translate(-51%, -50%);
                            width: 100%;
                            height: 50%;
                            opacity: 0.1;
                          }
                          
                          #particleCanvas-Blue {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            -webkit-transform: translate(-51%, -50%);
                            -moz-transform: translate(-51%, -50%);
                            -ms-transform: translate(-51%, -50%);
                            -o-transform: translate(-51%, -50%);
                            transform: translate(-51%, -50%);
                            width: 300px;
                            height: 300px;
                          }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default LoadingPage;