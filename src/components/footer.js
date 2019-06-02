import React, { Component } from 'react'
import axios from 'axios';

// components


// js
import isInViewport from '../static/js/isIntoView';

// css
import '../static/css/footer.css';

const mailer_api_key = process.env.REACT_APP_MAILER_API_KEY;

class Footer extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.fetch_field_value = this.fetch_field_value.bind(this);
        this.send_message = this.send_message.bind(this);
    }

    fetch_field_value(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    send_message() {
        let loader = document.getElementById('send-mail-loader');
        let submit_btn = document.getElementById('submit-message');

        let name = this.state.name;
        let email = this.state.email;
        let message = this.state.message;
        if (name === '' || email === '' || message === '') {
            if (name === '') {
                this.show_warning('name');
            }
            if (email === '') {
                this.show_warning('email');
            }
            if (message === '') {
                this.show_warning('message');
            }
        }
        else {
            loader.style.display = 'block';
            submit_btn.style.display = 'none';
            let request_body = {
                "name": name,
                "email": email,
                "message": message,
                "api_key": mailer_api_key,
                "recepient_email": "cedrickdomingo048@gmail.com"
            }
            axios({
                method: 'post',
                url: 'https://cedmailer.herokuapp.com/api/send_mail/',
                withCredentials: true,
                crossdomain: true,
                data: request_body,
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache",
                }
            })
                .then(() => {
                    this.setState({
                        name: '',
                        email: '',
                        message: ''
                    }, () => {
                        document.querySelectorAll('textarea').forEach((textarea) => {
                            textarea.value = "";
                        });
                        loader.style.display = 'none';
                        submit_btn.style.display = 'block';
                        this.show_email_sent()
                    });
                })
                .catch((error) => {
                    console.log(error);
                })
        }



    }

    show_warning(targ) {
        let target_warning = document.getElementById(`exclamation-${targ}`);
        target_warning.style.opacity = '1';
        setTimeout(() => {
            target_warning.style.opacity = '0';
        }, 1500);
    }

    show_email_sent() {
        let modal_container = document.getElementById("email-sent-container");
        modal_container.style.display = 'grid';
    }

    componentDidMount() {
        let check_div_footer = setInterval(() => {
            if (isInViewport(document.getElementById('footer-container'))) {
                setTimeout(() => {
                    document.getElementById('footer-header-wrapper').style.display = 'grid';
                }, 1100);
                clearInterval(check_div_footer);
            }
        }, 100);

        let check_div_body = setInterval(() => {
            if (isInViewport(document.getElementById('footer-body-container'))) {
                setTimeout(() => {
                    document.getElementById('footer-body-wrapper').style.display = 'grid';

                    // document.getElementById('footer-container').style.height = 'auto';
                }, 1400);
                clearInterval(check_div_body);
            }
        }, 100);

        let check_div_resume = setInterval(() => {
            if (isInViewport(document.getElementById('resume-container'))) {
                setTimeout(() => {
                    document.getElementById('resume-wrapper').style.display = 'grid';
                }, 1500);
                clearInterval(check_div_resume);
            }
        }, 100);

        let check_div_end = setInterval(() => {
            if (isInViewport(document.getElementById('footer-end-container'))) {
                setTimeout(() => {
                    document.getElementById('footer-end-wrapper').style.display = 'grid';
                    document.getElementById('footer-container').style.height = 'auto';
                }, 1500);
                clearInterval(check_div_end);
            }
        }, 100);
    }

    render() {
        return (
            <div className="Footer">
                <div id="footer-container">
                    <div id="footer-wrapper" className="grey darken-4">
                        <div id="footer-header-wrapper">
                            <h4 className="white-text text-darken-1 animated fadeInDown"><b>PING ME</b></h4>
                            <div id="underline-footer" className="white"></div>
                        </div>
                        <div id="footer-body-container">
                            <div id="footer-body-wrapper">
                                <h6 className="light-blue-text text-lighten-2 animated bounceInLeft" id="contact-form-label">Do you have any questions? or maybe you wanna work with me?</h6>
                                <div id="contact-form" className="animated zoomIn">
                                    <div className="input-field">
                                        <textarea placeholder="Name" id="name" name="name" type="text" className="blue-grey darken-4" onChange={this.fetch_field_value} value={this.state.name}>
                                        </textarea><span id="exclamation-name"><i className="fas fa-exclamation-circle yellow-text text-darken-2 fa-2x"></i></span>
                                    </div>
                                    <div className="input-field">
                                        <textarea placeholder="Email" id="email" name="email" type="text" className="blue-grey darken-4" onChange={this.fetch_field_value} value={this.state.email}>
                                        </textarea><span id="exclamation-email"><i className="fas fa-exclamation-circle yellow-text text-darken-2 fa-2x"></i></span>
                                    </div>
                                    <div className="input-field">
                                        <textarea placeholder="Message" id="message" name="message" type="text" className="blue-grey darken-4" onChange={this.fetch_field_value} value={this.state.message}>
                                        </textarea><span id="exclamation-message"><i className="fas fa-exclamation-circle yellow-text text-darken-2 fa-2x"></i></span>
                                    </div>
                                    <div id="button-container-footer">

                                        <div id="send-mail-loader" className="preloader-wrapper small active">
                                            <div className="spinner-layer spinner-blue">
                                                <div className="circle-clipper left">
                                                    <div className="circle"></div>
                                                </div><div className="gap-patch">
                                                    <div className="circle"></div>
                                                </div><div className="circle-clipper right">
                                                    <div className="circle"></div>
                                                </div>
                                            </div>

                                            <div className="spinner-layer spinner-red">
                                                <div className="circle-clipper left">
                                                    <div className="circle"></div>
                                                </div><div className="gap-patch">
                                                    <div className="circle"></div>
                                                </div><div className="circle-clipper right">
                                                    <div className="circle"></div>
                                                </div>
                                            </div>

                                            <div className="spinner-layer spinner-yellow">
                                                <div className="circle-clipper left">
                                                    <div className="circle"></div>
                                                </div><div className="gap-patch">
                                                    <div className="circle"></div>
                                                </div><div className="circle-clipper right">
                                                    <div className="circle"></div>
                                                </div>
                                            </div>

                                            <div className="spinner-layer spinner-green">
                                                <div className="circle-clipper left">
                                                    <div className="circle"></div>
                                                </div><div className="gap-patch">
                                                    <div className="circle"></div>
                                                </div><div className="circle-clipper right">
                                                    <div className="circle"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <button id="submit-message" onClick={this.send_message}>SEND</button>
                                    </div>
                                </div>
                            </div>
                            <div id="resume-container">
                                <div id="resume-wrapper" className="center animated slideInRight center-align">
                                    <a href="https://wwww.google.com" rel="noopener noreferrer" target="_blank"><h6 className="yellow-text text-lighten-3"><i className="fas fa-file-alt"></i>&nbsp;MY RESUME</h6></a>
                                </div>
                            </div>
                        </div>
                        <div id="footer-end-container">
                            <div id="footer-end-wrapper" className="animated slideInUp">
                                <div>

                                    <div id="links-container" className="animated fadeInRight delay-1s row">


                                        <div className="col s6 col-link">
                                            <div className="link-item-container">
                                                <a href="https://github.com/cedie712" rel="noopener noreferrer" target="_blank">
                                                    <div className="link-item-container">

                                                        <i className="fab fa-github-alt fa-2x white-text link-fa"></i>

                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col s6 col-link">
                                            <div className="link-item-container">
                                                <a href="https://web.facebook.com/cedrick.domingo.75" rel="noopener noreferrer" target="_blank">
                                                    <div className="link-item-container">


                                                        <i className="fab fa-facebook-f fa-2x white-text link-fa"></i>

                                                    </div>
                                                </a>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="center center-align">
                                        <p className="yellow-text text-lighten-3 animated fadeInLeft delay-1s"><i className="fab fa-google-plus-g "></i>&nbsp;cedrickdomingo048@gmail.com</p>
                                        <p className="grey-text text-darken-2 animated fadeInUp delay-1s">CEDRICK DOMINGO <span className="light-blue-text text-lighten-2">©2019</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Footer;