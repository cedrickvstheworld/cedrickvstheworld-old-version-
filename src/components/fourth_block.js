import React, { Component } from 'react'

//js
import isInViewport from '../static/js/isIntoView';

//css
import '../static/css/fourth_block.css';

class FourthBlock extends Component {
    componentDidMount() {
        let check_div_portfolio = setInterval(() => {
            if (isInViewport(document.getElementById('portfolio-header'))) {
                setTimeout(() => {
                    document.getElementById('portfolio-header-wrapper').style.display = 'grid';
                    // document.getElementById('block-four').style.height = 'auto';
                }, 1100);
                clearInterval(check_div_portfolio);
            }
        }, 100);


        let check_div_portfolio_body = setInterval(() => {
            if (isInViewport(document.getElementById('portfolio-body'))) {
                setTimeout(() => {
                    document.getElementById('portfolio-body-wrapper').style.display = 'block';
                    document.getElementById('block-four').style.height = 'auto';
                    setTimeout(() => {
                        document.getElementById('body-block-portfolio').style.boxShadow = '2px 20px 23px 3px rgb(63, 63, 63)'
                    }, 1000);
                }, 1600);
                clearInterval(check_div_portfolio_body);
            }
        }, 100);
    }

    render() {
        return (
            <div className="FourthBlock">
                <div id="block-four">
                    <div id="portfolio-header" className="center-align">
                        <div id="portfolio-header-wrapper">
                            <h4 className="grey-text text-darken-3 animated fadeInDown"><b>PROJECTS</b></h4>
                            <div id="underline-portfolio" className="grey darken-3"></div>
                        </div>
                        <div id="portfolio-body" className="grey-text text-darken-1">
                            <div id="portfolio-body-wrapper" >
                                <div id="body-block-portfolio" className="row">
                                    <div id="memo" className="col m4 portfolio-block-showcase animated fadeInDown">
                                        <div className="showcase-cover">
                                            <div className="cover-items-wrapper">
                                                <button className="showcase-cover-button">DETAILS</button>
                                                <div className="showcase-tool-wrapper">
                                                    <span>
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/jslogo.png')} alt="js" />
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/nodejslogo.png')} alt="nodejs" />
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/reactlogo.png')} alt="reactjs" />
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/reduxlogo.png')} alt="reduxjs" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="cctti" className="col m4 blue portfolio-block-showcase animated fadeInLeft">
                                        <div className="showcase-cover">
                                            <div className="cover-items-wrapper">
                                                <button className="showcase-cover-button">DETAILS</button>
                                                <div className="showcase-tool-wrapper">
                                                    <span>
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/pythonlogo.png')} alt="py" />
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/django.png')} alt="django" />
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/jslogo.png')} alt="js" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="academia" className="col m4 green portfolio-block-showcase animated fadeInRight">
                                        <div className="showcase-cover">
                                            <div className="cover-items-wrapper">
                                                <button className="showcase-cover-button">DETAILS</button>
                                                <div className="showcase-tool-wrapper">
                                                    <span>
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/pythonlogo.png')} alt="py" />
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/django.png')} alt="django" />
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/jslogo.png')} alt="js" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="ems" className="col m4 blue portfolio-block-showcase animated fadeInUp">
                                        <div className="showcase-cover">
                                            <div className="cover-items-wrapper">
                                                <button className="showcase-cover-button">DETAILS</button>
                                                <div className="showcase-tool-wrapper">
                                                    <span>
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/pythonlogo.png')} alt="py" />
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/django.png')} alt="django" />
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/opencv_logo.png')} alt="opencv" />
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/qtlogo.png')} alt="qt" />
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/jslogo.png')} alt="js" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tango_with_django" className="col m4 green portfolio-block-showcase animated fadeInRight">
                                        <div className="showcase-cover">
                                            <div className="cover-items-wrapper">
                                                <button className="showcase-cover-button">DETAILS</button>
                                                <div className="showcase-tool-wrapper">
                                                    <span>
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/pythonlogo.png')} alt="py" />
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/django.png')} alt="django" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="university_corner" className="col m4 grey portfolio-block-showcase animated fadeInDown">
                                        <div className="showcase-cover">
                                            <div className="cover-items-wrapper">
                                                <button className="showcase-cover-button">DETAILS</button>
                                                <div className="showcase-tool-wrapper">
                                                    <span>
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/phplogo.png')} alt="php" />
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/jslogo.png')} alt="js" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FourthBlock;
