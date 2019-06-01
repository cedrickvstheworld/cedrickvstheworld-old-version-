import React, { Component } from 'react'

//js
import isInViewport from '../static/js/isIntoView';

// css
import '../static/css/footer.css';

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

    send_message(event) {
        event.preventDefault();
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
            document.getElementById('contact-form').submit();
        }


    }

    show_warning(targ) {
        let target_warning = document.getElementById(`exclamation-${targ}`);
        target_warning.style.opacity = '1';
        setTimeout(() => {
            target_warning.style.opacity = '0';
        }, 1500);
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
                                <form id="contact-form" className="animated zoomIn" method="post" action="https://formspree.io/cedrickdomingo048@gmail.com">
                                    <div className="input-field">
                                        <textarea placeholder="Name" id="name" name="name" type="text" className="blue-grey darken-4" onChange={this.fetch_field_value} value={this.state.name}>
                                        </textarea><span id="exclamation-name"><i className="fas fa-exclamation-circle red-text text-darken-2 fa-2x"></i></span>
                                    </div>
                                    <div className="input-field">
                                        <textarea placeholder="Email" id="email" name="email" type="text" className="blue-grey darken-4" onChange={this.fetch_field_value} value={this.state.email}>
                                        </textarea><span id="exclamation-email"><i className="fas fa-exclamation-circle red-text text-darken-2 fa-2x"></i></span>
                                    </div>
                                    <div className="input-field">
                                        <textarea placeholder="Message" id="message" name="message" type="text" className="blue-grey darken-4" onChange={this.fetch_field_value} value={this.state.message}>
                                        </textarea><span id="exclamation-message"><i className="fas fa-exclamation-circle red-text text-darken-2 fa-2x"></i></span>
                                    </div>
                                    <div id="button-container-footer">
                                        <button type="submit" id="submit-message" onClick={this.send_message}>SEND</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div id="footer-end-container">
                            <div id="footer-end-wrapper" className="animated slideInUp">
                                <h6 className="grey-text text-darken-2 animated bounceInUp">CEDRICK DOMINGO <span className="light-blue-text text-lighten-2">©2019</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;