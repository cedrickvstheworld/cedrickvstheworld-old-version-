import React, { Component } from 'react';

// components
// import PreloadFlash from './preload_flash';
import SecondaryBlock from './secondary_block';
import EmailSent from './email_sent_alert';

class HeaderBlock extends Component {


    show_my_works() {
        let works_div = document.getElementById('block-four');
        works_div.scrollIntoView();
        setTimeout(() => {
            works_div.scrollIntoView();
        }, 1000);
    }

    show_profile() {
        let secondary_block = document.getElementById('secondary-block');
        secondary_block.scrollIntoView();
    }   

    show_contact() {
        let footer_block = document.getElementById('footer-container');
        footer_block.scrollIntoView();
        setTimeout(() => {
            footer_block.scrollIntoView();
        }, 2500);
    }   

    render() {

        return (
            <div className="HeaderBlock">
                <div id="head-wrapper" className="light-blue lighten-1">

                    <div id="header-block" className="">
                        <div className="center-align center">
                            <span>

                                <h4 className="white-text animated fadeIn">I am Cedrick Domingo<br />
                                    I like bringing imaginations
                                    into reality</h4>
                            </span>

                            <button className="animated fadeInUp" id="my-works-navigator" onClick={this.show_my_works.bind(this)}>
                                MY WORKS&nbsp;<i id="my-works-arrow" className="fas fa-arrow-right"></i></button>
                        </div>


                        <div id="circle-profile" className="circle" onClick={this.show_profile.bind(this)}>
                            <i className="fas fa-user white-text fa-2x link-fa-head animated fadeInUp "></i>
                        </div>
                        <div id="circle-contact" className="circle" onClick={this.show_contact.bind(this)}>
                            <i className="fas fa-phone white-text fa-2x link-fa-head animated fadeInUp"></i>
                        </div>
                    </div>

                    <SecondaryBlock />

                </div>

                <EmailSent />
            </div>
        )
    }
}

export default HeaderBlock;
