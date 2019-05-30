import React, { Component } from 'react'

//js
import isInViewport from '../static/js/isIntoView';

//css
import '../static/css/fourth_block.css';

class FourthBlock extends Component {
    constructor() {
        super();
        this.state = {
            projects: {
                memo: {
                    title: 'Memo',
                    description: 'Memo provides quick, straight to the point and simple place to dump your to-dos, notices, or any lists etc with a reminder feature for the deadline provided',
                    site_url: 'https://memo101.herokuapp.com/',
                    repository: 'https://github.com/cedie712/NODEJS-EXPRESS-REACT-REDUX-memo'
                },
                cctti: {
                    title: 'CCTTI Website',
                    description: 'This web application provides a branding site, registration tunnel, and applicant management features for the administration of City College of Technology and Trade Inc which is a training center',
                    site_url: 'https://cctti.herokuapp.com/',
                    repository: 'https://github.com/cedie712/CCTTI_Web_App'
                },
                academia: {
                    title: 'Academia',
                    description: 'Academia is a school-class platform for Gapan City College that provides attendance and grade management features including SMS notifiers',
                    repository: 'https://github.com/cedie712/Academia'
                },
                ems_project: {
                    title: 'EMS(Employee Management System) Project',
                    description: 'EMS Project is a full-pledged enterprise-level sets of application which provides fully automated, real-time and intelligent salary processing, attendance management(with face recognition and identification), and employee management features. The architecture is composed mainly of API(Application Programming Interface), web app, and an operational desktop app.',
                    site_url: 'https://emsproject.herokuapp.com/emswebext',
                    repository: 'https://github.com/cedie712/EMS_Project'
                },
                tango_with_django: {
                    title: 'Tango with Django 1.7 Revision to Django 2.0',
                    description: 'This project of mine followed the book "Tango with Django 1.7" by Dr. Leif Azzopardi and David Maxwell and updated all it\'s deprecations to make it compatible as of Django version 2.0',
                    repository: 'https://github.com/cedie712/tango_with_django-2.0-'
                },
                university_corner: {
                    title: 'University Corner',
                    description: 'University Corner was my very first web-dev project that I made way back 2017. The goal of it was to provide a classroom platform which includes daily score recordings, attendances and grade processing. It also includes SMS notification feature. The project was built with native PHP (version 7.1)',
                    repository: 'https://github.com/cedie712/universitycorner-with-PHP7.2'
                }
            }
        }
    }

    show_showcase_preview(project) {
        let preview_container = document.getElementById('showcase-preview-container');
        preview_container.className += ' animated fadeIn';
        preview_container.style.display = 'grid';
        document.getElementById('showcase-title').innerHTML = this.state.projects[project].title;
        document.getElementById('showcase-description').innerHTML = this.state.projects[project].description;

        let repo_container = document.getElementById('repo-container');
        repo_container.innerHTML = "";
        let repo_link = document.createElement('a');
        repo_link.href = this.state.projects[project].repository;
        repo_link.target = '_blank';
        repo_link.innerHTML = this.state.projects[project].repository;
        repo_container.appendChild(repo_link);

        if (this.state.projects[project].site_url) {
            let link_container = document.getElementById('site-url-container');
            link_container.innerHTML = '';
            let link = document.createElement('a');
            link.href = this.state.projects[project].site_url;
            link.target = '_blank';
            link.innerHTML = "view site <i className='fab fa-angle-right'></i>";
            link_container.appendChild(link);
        }
    }

    close_showcase_preview() {
        let preview_container = document.getElementById('showcase-preview-container');
        let center_block = document.getElementById('showcase-center-block');
        center_block.className += ' bounceOutDown';
        setTimeout(() => {
            preview_container.className += ' fadeOut';
            setTimeout(() => {
                center_block.className = "animated bounceInUp";
                preview_container.className = 'animated bounceInRight';
                preview_container.style.display = 'none';
            }, 700);
        }, 400);

    }

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

                <div id="showcase-preview-container">
                    <div id="close-container" className="animated bounceInRight" onClick={this.close_showcase_preview.bind(this)}>
                        <div id="close-a">
                        </div>
                        <div id="close-b">
                        </div>
                    </div>
                    <div id="showcase-center-block" className="animated bounceInUp">
                        <div id="showcase-uppper-block"></div>
                        <div id="showcase-lower-block" className="left-align">
                            <div>
                                <h5 id="showcase-title">Title</h5>
                                <p id="showcase-description" className="grey-text text-darken-2">Description</p>
                                <p className="grey-text text-darken-3"><i className="fab fa-github"></i>&nbsp;GitHub Repository: <span id="repo-container"></span></p>
                                <div id="site-url-container">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                                                <h5 className="showcase-cover-title grey-text text-darken-4">Memo</h5>
                                                <button className="showcase-cover-button" onClick={this.show_showcase_preview.bind(this, 'memo')}>DETAILS</button>
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
                                            <div className="cover-items-wrapper grey-text text-darken-3">
                                                <h5 className="showcase-cover-title grey-text text-darken-4">CCTTI Website</h5>
                                                <button className="showcase-cover-button" onClick={this.show_showcase_preview.bind(this, 'cctti')}>DETAILS</button>
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
                                                <h5 className="showcase-cover-title grey-text text-darken-4">Academia</h5>
                                                <button className="showcase-cover-button" onClick={this.show_showcase_preview.bind(this, 'academia')}>DETAILS</button>
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
                                                <h5 className="showcase-cover-title grey-text text-darken-4">EMS Project</h5>
                                                <button className="showcase-cover-button" onClick={this.show_showcase_preview.bind(this, 'ems_project')}>DETAILS</button>
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
                                                <h5 className="showcase-cover-title grey-text text-darken-4">Tango with Django 1.7 Revision to Django 2.0</h5>
                                                <button className="showcase-cover-button" onClick={this.show_showcase_preview.bind(this, 'tango_with_django')}>DETAILS</button>
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
                                                <h5 className="showcase-cover-title grey-text text-darken-4">University Corner</h5>
                                                <button className="showcase-cover-button" onClick={this.show_showcase_preview.bind(this, 'university_corner')}>DETAILS</button>
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
