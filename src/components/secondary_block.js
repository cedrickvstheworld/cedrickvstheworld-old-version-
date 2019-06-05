import React, { Component } from 'react'

//components
import ThirdBlock from './third_block';

//js_static
import isInViewport from '../static/js/isIntoView';

//css
import '../static/css/secondary_block.css';


let my_photo = require('../static/images/ced2.jpg')


class SecondaryBlock extends Component {
    constructor() {
        super();
        this.state = {
            attributes: [
                {
                    attrib: 'Python3',
                    mastery: '89'
                },
                {
                    attrib: 'JavaScript',
                    mastery: '82'
                },
                {
                    attrib: 'Django',
                    mastery: '90'
                },
                {
                    attrib: 'NodeJS',
                    mastery: '90'
                },
                {
                    attrib: 'ExpressJS',
                    mastery: '95'
                },
                {
                    attrib: 'ReactJS',
                    mastery: '80'
                },
                {
                    attrib: 'Redux',
                    mastery: '70'
                },
                {
                    attrib: 'Postgres',
                    mastery: '92'
                },
                {
                    attrib: 'MySQL',
                    mastery: '92'
                },
                {
                    attrib: 'MongoDB',
                    mastery: '89'
                },
                {
                    attrib: 'Linux',
                    mastery: '82'
                },
                {
                    attrib: 'Git',
                    mastery: '92'
                },
                {
                    attrib: 'C++',
                    mastery: '30'
                },
                {
                    attrib: 'Jquery',
                    mastery: '90'
                },
                {
                    attrib: 'OpenCV',
                    mastery: '60'
                },
                {
                    attrib: 'CSS',
                    mastery: '80'
                },
                {
                    attrib: 'Bootstrap',
                    mastery: '95'
                },
                {
                    attrib: 'Materialize',
                    mastery: '95'
                },
                {
                    attrib: 'Qt4/Qt5',
                    mastery: '91'
                },
            ]
        }
    }

    componentDidMount() {
       

        let check_div_attrib = setInterval(() => {
            if (isInViewport(document.getElementById('desc'))) {
                // if (document.getElementById('secondary-block').style.display === 'block') {
                    document.getElementById('right-block-2').style.display = 'grid';
                    let delay = 0.5;
                    for (let i in this.state.attributes) {
                        this.fill_bar(`bar_${this.state.attributes[i].attrib}`, parseInt(this.state.attributes[i].mastery), delay);
                        delay += 0.10526315789473684;

                    }
                    clearInterval(check_div_attrib);

                    // document.getElementById('block-three').style.display = 'block';
                // }
            }
        }, 100);


        let check_div_desc = setInterval(() => {
            if (isInViewport(document.getElementById('secondary-block'))) {
                setTimeout(() => {
                    document.getElementById('desc').style.display = 'block';
                }, 300);
                clearInterval(check_div_desc);
            }
        }, 100);

    }

    fill_bar(element, value, delay) {
        setTimeout(() => {
            let indexer = 0;
            let filler = setInterval(() => {
                if (indexer > value) {
                    clearInterval(filler);
                }
                document.getElementById(element).style.background = `linear-gradient(to right, rgb(58, 190, 179) ${indexer}%, transparent 10%)`
                indexer += 1;
            }, 20)
        }, delay * 1000);
    }

    render() {


        let attrib_divs = this.state.attributes.map(attribute => {
            return (
                <div key={attribute.attrib} className="col s12 attrib-rows">
                    <div className="col s3 white-text attrib-col">
                        <h6>{attribute.attrib}</h6>
                    </div>
                    <div className="col s9 white-text right right-align bar-rows">
                        <div className="bar" id={`bar_${attribute.attrib}`}></div>
                    </div>
                </div>);
        });

        return (
            <div className="SecondaryBlock">
                <div id="secondary-block" className="">
                    <div id="block-2-row" className="row">
                        <div id="left-block-2" className="col m6 white darken-1 center animated slideInUp">
                            <div id="desc">
                                <div id="my-photo-container">
                                    <img id="my-photo" ref="my_photo" src={my_photo} alt="cedie is cool" className="animated bounceInLeft" />
                                </div>
                                <div id="my-desc-container">
                                    <div>
                                        <h3 id="title-my" className="grey-text text-darken-3 animated bounceInUp">Who am I?</h3>
                                    </div>
                                    <div id="whos-ced-p" className="animated animated bounceInUp delay-1s">
                                        <p>
                                            I am a dude who likes to do something for a living with passion and heart.
                                            I always indulge myself on learning and experiencing something new. I love the process of full-stack software development.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="right-block-2" className="col m6 blue-grey darken-4  animated slideInUp">

                            <div id="hybrid-table" className="animated fadeInUp">
                                <div className="yellow-text text-lighten-3 center-align">
                                        <h6 id="weaponry-label"><b>weaponry</b></h6>
                                </div>
                                <div>
                                    {attrib_divs}
                                </div>
                            </div>
                        </div>
                    </div>

                    <ThirdBlock />
                </div>
            </div>
        )
    }
}

export default SecondaryBlock;
