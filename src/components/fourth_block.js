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
                    description: 'Memo provides quick, straight to the point and simple place to dump your to-dos, notices, or any lists etc with a reminder feature for the deadline provided. It includes the integration of Google OAUTH 2.0 providing options for the users to easily sign-up using their google accounts.',
                    site_url: 'https://memo101.herokuapp.com/',
                    repository: 'https://github.com/cedie712/NODEJS-EXPRESS-REACT-REDUX-memo',
                    preview_images: [
                        require('../static/images/portfolio_thumbnails/memo_desktop.png'),
                        require('../static/images/portfolio_thumbnails/memo_Desktop_2.png'),
                        require('../static/images/portfolio_thumbnails/memo_mobiles.png'),
                    ]
                },
                cctti: {
                    title: 'CCTTI Website',
                    description: 'This web application provides a branding site, registration tunnel, and applicant management features for the administration of City College of Technology and Trade Inc which is a training center',
                    site_url: 'https://cctti.herokuapp.com/',
                    repository: 'https://github.com/cedie712/CCTTI_Web_App',
                    preview_images: [
                        require('../static/images/portfolio_thumbnails/cctti_desktop.png'),
                        require('../static/images/portfolio_thumbnails/cctti_thumbnail2.png'),
                        require('../static/images/portfolio_thumbnails/cctti_desktop_4.png'),
                        require('../static/images/portfolio_thumbnails/cctti_thumbnail5.png'),
                        require('../static/images/portfolio_thumbnails/cctti_desktop_2.png'),
                        require('../static/images/portfolio_thumbnails/cctti_desktop_3.png'),
                    ]
                },
                academia: {
                    title: 'Academia',
                    description: 'Academia is a school-class platform for Gapan City College that provides attendance and grade management features including SMS notifiers',
                    site_url: 'https://academiaproject.herokuapp.com/',
                    repository: 'https://github.com/cedie712/Academia',
                    preview_images: [
                        require('../static/images/portfolio_thumbnails/academia_thumbnail.png'),
                        require('../static/images/portfolio_thumbnails/academia_desktop.png'),
                        require('../static/images/portfolio_thumbnails/academia_desktop_2.png'),
                        require('../static/images/portfolio_thumbnails/academia_desktop_3.png'),
                    ]
                },
                ems_project: {
                    title: 'EMS(Employee Management System) Project',
                    description: 'EMS Project is a full-pledged enterprise-level sets of application which provides fully automated, time-driven and intelligent salary processing, attendance management(with face recognition and identification), and employee management features. The architecture is composed mainly of API(Application Programming Interface), web app, and an operational desktop app.',
                    site_url: 'https://emsproject.herokuapp.com/emswebext',
                    repository: 'https://github.com/cedie712/EMS_Project',
                    preview_images: [
                        require('../static/images/portfolio_thumbnails/2.home_desktop.png'),
                        require('../static/images/portfolio_thumbnails/14.employee_registration_desktop.png'),
                        require('../static/images/portfolio_thumbnails/13.employee_settings_update.png'),
                        require('../static/images/portfolio_thumbnails/15.global_configurations_update_desktop.png'),
                        require('../static/images/portfolio_thumbnails/7.attendance_stats_graph.png'),
                        require('../static/images/portfolio_thumbnails/8.salary_stats_graph.png'),
                        require('../static/images/portfolio_thumbnails/6.graphs_desktop.png'),
                        require('../static/images/portfolio_thumbnails/12.employee_salary_logs.png'),
                        require('../static/images/portfolio_thumbnails/26.regular_employee_salary_webapp.png'),
                        require('../static/images/portfolio_thumbnails/23.super_user_global_config_view.png'),
                        require('../static/images/portfolio_thumbnails/30.api_gui.png')
                    ]
                },
                tango_with_django: {
                    title: 'Tango with Django 1.7 Revision to Django 2.0',
                    description: 'This project of mine followed the book "Tango with Django 1.7" by Dr. Leif Azzopardi and David Maxwell and updated all it\'s deprecations to make it compatible as of Django version 2.0',
                    repository: 'https://github.com/cedie712/tango_with_django-2.0-',
                    preview_images: [
                        require('../static/images/portfolio_thumbnails/tango_with_django.jpg')
                    ]
                },
                jwt: {
                    title: 'JWT-NodeJs-Express-React',
                    description: 'This project serves as boilerplate and example for intergrating JSON Web Token based authentication and authorization for your NodeJs Express API and ReactJs app. It includes token refresh, token blacklisting and device fingerprinting.',
                    repository: 'https://github.com/cedie712/JWT-NodeJs-Express-React',
                    preview_images: [
                        require('../static/images/portfolio_thumbnails/jwtnodejs.jpeg')
                    ]
                },
                face: {
                    title: 'Python-OpenCV Face Recognition/Identification',
                    description: 'This project is a python package that can be integrated in your python applications for face recognition and identification. The accuracy of the project is 98%',
                    repository: 'https://github.com/cedie712/faceRecognition_python',
                    preview_images: [
                        require('../static/images/portfolio_thumbnails/facerecog.jpg')
                    ]
                },
                password_validator: {
                    title: 'Password Validator Js',
                    description: 'Password Validator saves your time from the old-redundant writing of password validation javascript codes on your web application projects.',
                    repository: 'https://github.com/cedie712/password_validator',
                    preview_images: [
                        require('../static/images/portfolio_thumbnails/password.jpg')
                    ]
                },
                university_corner: {
                    title: 'University Corner',
                    description: 'University Corner was my very first web-dev project that I made way back 2017. The goal of it was to provide a classroom platform which includes daily score recordings, attendances and grade processing. It also includes SMS notification feature. The project was built with native PHP (version 7.1)',
                    repository: 'https://github.com/cedie712/universitycorner-with-PHP7.2',
                    preview_images: [
                        require('../static/images/portfolio_thumbnails/university_corner122.png'),
                        require('../static/images/portfolio_thumbnails/university_corner_2.png'),
                        require('../static/images/portfolio_thumbnails/university_corner_3.jpg'),
                        require('../static/images/portfolio_thumbnails/university_corner_3.png')
                    ]
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
        
        let link_container = document.getElementById('site-url-container');
        link_container.innerHTML = '';

        if (this.state.projects[project].site_url) {
            let link_container = document.getElementById('site-url-container');
            link_container.innerHTML = '';
            let fa_i = document.createElement('i');
            fa_i.className = 'fas fa-external-link-alt teal-text';
            link_container.appendChild(fa_i);
            let link = document.createElement('a');
            link.href = this.state.projects[project].site_url;
            link.target = '_blank';
            link.innerHTML = " view site";
            link_container.appendChild(link);
        }

        let image_container = document.getElementById('showcase-upper-block');
        image_container.style.backgroundImage = `url(${this.state.projects[project].preview_images[0]})`;
        let prev = document.getElementById('prev');
        let next = document.getElementById('next');

        if (this.state.projects[project].preview_images.length === 1) {
            prev.style.display = 'none'
            next.style.display = 'none';
        }

        let carousel_index = 0;
        if (this.state.projects[project].preview_images.length !== 1) {

            document.querySelectorAll('.preview-arrow').forEach(arrow => {
                arrow.style.display = "block";
            });

 

            next.addEventListener('click', () => {
                carousel_index++;
                if (carousel_index === this.state.projects[project].preview_images.length) {
                    carousel_index = 0;
                }
                image_container.style.backgroundImage = `url(${this.state.projects[project].preview_images[carousel_index]})`;
            });
    
            prev.addEventListener('click', () => {
                carousel_index--;
                if (carousel_index === -1) {
                    carousel_index = this.state.projects[project].preview_images.length - 1;
                }
                image_container.style.backgroundImage = `url(${this.state.projects[project].preview_images[carousel_index]})`;
            });
        }

        if (window.innerWidth < 800) {
            prev.style.display = 'none'
            next.style.display = 'none';
            let auto_carousel = setInterval(() => {
                image_container.style.backgroundImage = `url(${this.state.projects[project].preview_images[carousel_index]})`;
                carousel_index++;
                if (carousel_index === this.state.projects[project].preview_images.length) {
                    carousel_index = 0;
                }
            }, 4000);

            document.getElementById('close-container').addEventListener('click', () => {
                clearInterval(auto_carousel);
            });
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
                        document.getElementById('footer-container').style.display = 'block';
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
                        <div id="showcase-upper-block">
                        <i id="prev" className="fas fa-chevron-left fa-4x preview-arrow"></i>
                        <i id="next" className="fas fa-chevron-right fa-4x preview-arrow"></i>
                        </div>
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

                                    <div id="memo-container">
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

                                    <div id="jwt" className="col m4 grey portfolio-block-showcase animated fadeInUp">
                                        <div className="showcase-cover">
                                            <div className="cover-items-wrapper">
                                                <h5 className="showcase-cover-title grey-text text-darken-4">JWT-NodeJs-Express-React</h5>
                                                <button className="showcase-cover-button" onClick={this.show_showcase_preview.bind(this, 'jwt')}>DETAILS</button>
                                                <div className="showcase-tool-wrapper">
                                                    <span>
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/jwt.png')} alt="jwt" />
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/nodejslogo.png')} alt="nodejs" />
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/reactlogo.png')} alt="js" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="face" className="col m4 grey portfolio-block-showcase animated fadeInUp">
                                        <div className="showcase-cover">
                                            <div className="cover-items-wrapper">
                                                <h5 className="showcase-cover-title grey-text text-darken-4">Python-OpenCV Face Recognition/Identification</h5>
                                                <button className="showcase-cover-button" onClick={this.show_showcase_preview.bind(this, 'face')}>DETAILS</button>
                                                <div className="showcase-tool-wrapper">
                                                    <span>
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/pythonlogo.png')} alt="py" />
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/opencv_logo.png')} alt="opencv" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="password-validator" className="col m4 grey portfolio-block-showcase animated fadeInLeft">
                                        <div className="showcase-cover">
                                            <div className="cover-items-wrapper">
                                                <h5 className="showcase-cover-title grey-text text-darken-4">Password Validator Js</h5>
                                                <button className="showcase-cover-button" onClick={this.show_showcase_preview.bind(this, 'password_validator')}>DETAILS</button>
                                                <div className="showcase-tool-wrapper">
                                                    <span>
                                                        <img className="tool-logo" src={require('../static/images/tool_logos/jslogo.png')} alt="js" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="university_corner" className="col m4 grey portfolio-block-showcase animated fadeInRight">
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
