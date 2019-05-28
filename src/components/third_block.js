import React, { Component } from 'react'


//components
import FourthBlock from './fourth_block';

//js
import isInViewport from '../static/js/isIntoView';

//css 
import '../static/css/third_block.css';

class ThirdBlock extends Component {
    componentDidMount() {
        let check_div_about = setInterval(() => {
            if (isInViewport(document.getElementById('about-header'))) {
                setTimeout(() => {
                    document.getElementById('about-header-wrapper').style.display = 'grid';
                    document.getElementById('about-body-wrapper').style.display = 'block';
                    document.getElementById('block-three').style.height = 'auto';
                    document.getElementById('block-four').style.display = 'block';
                }, 1100);
                clearInterval(check_div_about);
            }
        }, 100);
    }

    render() {
        return (
            <div className="ThirdBlock">
                <div id="block-three">

                    <div id="about-header" className="center-align">
                        <div id="about-header-wrapper">
                            <h4 className="grey-text text-darken-3 animated fadeInDown"><b>ABOUT</b></h4>
                            <div id="underline-about" className="grey darken-3"></div>
                        </div>
                    </div>

                    <div id="about-body" className="container grey-text text-darken-1">
                        <div id="about-body-wrapper" >
                            <div id="about-above-row" className="row">
                                <div className="col m4 hex-container center-align">
                                    <div id="instinctive-hexagon" className="hexagon light-blue lighten-2">
                                        <img className="about-logo" src={require('../static/images/initiative_white.png')}
                                            alt="instinctive" />
                                    </div>
                                    <div id="instinctive" className="animated fadeInRight delay-1s">
                                        <h6>Instinctive</h6>
                                        <p className="grey-text text-darken-3 about-p">
                                            My instinct can guide me through technical processes and decisions. I work both with my mind and with it.
                                    </p>
                                    </div>
                                </div>
                                <div className="col m4  hex-container center-align">
                                    <div id="persistent-hexagon" className="hexagon light-blue lighten-2">
                                        <img className="about-logo" src={require('../static/images/cog_white.png')}
                                            alt="cog" />
                                    </div>
                                    <div id="persistent" className="animated fadeInRight delay-1s">
                                        <h6>Persistent</h6>
                                        <p className="grey-text text-darken-3 about-p">
                                            I have a habbit of extreme focusing in a particular job. I want a single day to be worthful and productive.
                                    </p>
                                    </div>
                                </div>
                                <div className="col m4  hex-container center-align">
                                    <div id="eye-hexagon" className="hexagon light-blue lighten-2">
                                        <img className="about-logo" src={require('../static/images/bullseye_white.png')}
                                            alt="bulls-eye" />
                                    </div>
                                    <div id="goal" className="animated fadeInRight delay-1s">
                                        <h6>Eyes-On-Goal</h6>
                                        <p className="grey-text text-darken-3 about-p">
                                            The way I love the development process, it's the same way in how I prioritizes the output.
                                    </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col m4 hex-container center-align">
                                    <div id="fast-hexagon" className="hexagon light-blue lighten-2">
                                        <img className="about-logo" src={require('../static/images/lightning_white.png')}
                                            alt="lightning" />
                                    </div>
                                    <div id="fast" className="animated fadeInLeft delay-1s">
                                        <h6>Fast & Efficient</h6>
                                        <p className="grey-text text-darken-3 about-p">
                                            Efficient output performance is my priority as well as clean code base.
                                    </p>
                                    </div>
                                </div>
                                <div className="col m4  hex-container center-align">
                                    <div id="spartan-hexagon" className="hexagon light-blue lighten-2 center-align">
                                        <img className="about-logo" src={require('../static/images/spartan_white.png')}
                                            alt="spartan" />
                                    </div>
                                    <div id="adventure" className="animated fadeInLeft delay-1s">
                                        <h6>Adventurer</h6>
                                        <p className="grey-text text-darken-3 about-p">
                                            I am open to challenges. It excites me.
                                            I am always thirsty and curious about new experiences.
                                    </p>
                                    </div>
                                </div>
                                <div className="col m4  hex-container center-align">
                                    <div id="flexible-hexagon" className="hexagon light-blue lighten-2">
                                        <img className="about-logo" src={require('../static/images/bamboo_white.png')} alt="bamboo" />
                                    </div>
                                    <div id="flexible" className="animated fadeInLeft delay-1s">
                                        <h6>Flexible</h6>
                                        <p className="grey-text text-darken-3 about-p">
                                            I can adapt to multiple type of situations. I always think outside of the box.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <FourthBlock />
                </div>
            </div>
        )
    }
}

export default ThirdBlock;
