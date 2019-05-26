import React, { Component } from 'react'

//css 
import '../static/css/third_block.css';

class ThirdBlock extends Component {
    render() {
        return (
            <div className="ThirdBlock">
                <div id="block-three">
                    <div id="about-header" className="center-align">
                        <h3 className="grey-text text-darken-3"><b>ABOUT</b></h3>
                        <div id="underline-about" className="grey darken-3"></div>
                    </div>
                    <div className="container grey-text text-darken-1">
                        <div className="row">
                            <div className="col m4 hex-container center-align">
                                <div className="hexagon light-blue lighten-2">
                                    <img className="about-logo" src={require('../static/images/initiative_white.png')}
                                        alt="instinctive" />
                                </div>
                                <h6>Instinctive</h6>
                                <p className="grey-text text-darken-3 about-p">
                                    I didn't work only by thinking. I let my instincts guide me through technical descisions.
                                </p>
                            </div>
                            <div className="col m4  hex-container center-align">
                                <div className="hexagon light-blue lighten-2">
                                    <img className="about-logo" src={require('../static/images/cog_white.png')}
                                        alt="cog" />
                                </div>
                                <h6>Persistent</h6>
                                <p className="grey-text text-darken-3 about-p">
                                    I have a habbit of extreme focusing in a particular job. I want a single day to be worthful. 
                                </p>
                            </div>
                            <div className="col m4  hex-container center-align">
                                <div className="hexagon light-blue lighten-2">
                                    <img className="about-logo" src={require('../static/images/bullseye_white.png')}
                                        alt="bulls-eye" />
                                </div>
                                <h6>Eyes-On-Goal</h6>
                                <p className="grey-text text-darken-3 about-p">
                                    The way I love the development process, it's the same way in how I prioritizes the output.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col m4 hex-container center-align">
                                <div className="hexagon light-blue lighten-2">
                                    <img className="about-logo" src={require('../static/images/lightning_white.png')}
                                        alt="lightning" />
                                </div>
                                <h6>Fast & Efficient</h6>
                                <p className="grey-text text-darken-3 about-p">
                                    Efficient output performance is my priority as well as clean code base.
                                </p>
                            </div>
                            <div className="col m4  hex-container center-align">
                                <div className="hexagon light-blue lighten-2 center-align">
                                    <img className="about-logo" src={require('../static/images/spartan_white.png')}
                                        alt="spartan" />
                                </div>
                                <h6>Adventurer</h6>
                                <p className="grey-text text-darken-3 about-p">
                                    I am open to challenges. It excites me.
                                    I am always thirsty and curious about new experiences.
                                </p>
                            </div>
                            <div className="col m4  hex-container center-align">
                                <div className="hexagon light-blue lighten-2">
                                    <img className="about-logo" src={require('../static/images/bamboo_white.png')} alt="bamboo" />
                                </div>
                                <h6>Flexible</h6>
                                <p className="grey-text text-darken-3 about-p">
                                    I can adapt to multiple type of situations. I always think outside of the box.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThirdBlock;
