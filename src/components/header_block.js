import React, { Component } from 'react';

// components
import PreloadFlash from './preload_flash';
import SecondaryBlock from './secondary_block';
import EmailSent from './email_sent_alert';

class HeaderBlock extends Component {

    componentDidMount() {
        window.addEventListener('load', () => {

            let start = setInterval(() => {
                if (document.getElementById('head-wrapper')) {
                    document.getElementById('head-wrapper').style.display = 'block';
                    document.getElementById('preload-wrapper').className += " animated slideOutUp";
                    setTimeout(() => {
                        document.getElementById('preload-wrapper').style.display = 'none';
                    }, 1000);
                    clearInterval(start);
                }
            }, 3000);



            setTimeout(() => {
                let top_title = "Hello World";
                let middle_title = " I am Cedrick DomingoI like bringing imaginationsinto reality"

                let top_indexer = 0;

                let top_type_title = setInterval(() => {
                    document.getElementById('top-title-header').innerHTML += top_title[top_indexer];
                    if (top_indexer === top_title.length - 1) {
                        clearInterval(top_type_title);
                        top_indexer = 0;
                        setTimeout(() => {
                            let backspacer = setInterval(() => {
                                top_title = top_title.substring(0, top_title.length - 1);
                                document.getElementById('top-title-header').innerHTML = top_title;
                                if (top_title.length === 0) {
                                    clearInterval(backspacer);
                                    setTimeout(() => {
                                        let middle_title_type = setInterval(() => {
                                            document.getElementById('top-title-header').innerHTML += middle_title[top_indexer];
                                            if (top_indexer === 20) {
                                                clearInterval(middle_title_type);

                                                setTimeout(() => {
                                                    let bottom_title_type = setInterval(() => {
                                                        if (top_indexer === 21 || top_indexer === 49) {
                                                            document.getElementById('top-title-header').innerHTML += "<br />";
                                                        }
                                                        document.getElementById('top-title-header').innerHTML += middle_title[top_indexer];
                                                        if (top_indexer === middle_title.length - 1) {
                                                            clearInterval(bottom_title_type);
                                                            top_indexer = 0;
                                                            setTimeout(() => {
                                                                document.getElementById('secondary-block').style.display = 'block'
                                                                document.getElementById('secondary-block').scrollIntoView();
                                                            }, 3500);
                                                        }
                                                        top_indexer++
                                                    }, 180);
                                                }, 1800);
                                            }

                                            top_indexer++
                                        }, 180);
                                        clearTimeout();
                                    }, 1600);
                                }
                            }, 120);
                        }, 2000);
                    }
                    top_indexer++;

                }, 180);




                clearTimeout();
            }, 4000);


        });

    }


    render() {

        return (
            <div className="HeaderBlock">
                <PreloadFlash />
                <div id="head-wrapper" className="light-blue lighten-1">

                    <div id="header-block" className="grey darken-4">
                        <div className="center-align">
                            <span>
                                <h4 className="white-text">
                                    <span id="top-title-header"></span>
                                    <span id="cursor">|</span></h4>
                            </span>
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
