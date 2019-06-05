import React, { Component } from 'react';

// components
// import PreloadFlash from './preload_flash';
import SecondaryBlock from './secondary_block';
import EmailSent from './email_sent_alert';

class HeaderBlock extends Component {


    show_my_works() {
        document.getElementById('block-four').scrollIntoView();
        setTimeout(() => {
            document.getElementById('block-four').scrollIntoView();
        }, 900)
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
                    </div>

                    <SecondaryBlock />

                </div>

                <EmailSent />
            </div>
        )
    }
}

export default HeaderBlock;
