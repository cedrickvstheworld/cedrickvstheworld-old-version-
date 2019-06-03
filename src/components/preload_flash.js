import React, { Component } from 'react'


// css 
import '../static/css/preload_flash.css';

const c_for_ced = require('../static/images/c_for_ced.png');



class PreloadFlash extends Component {
    render() {
        return (
            <div className="PreloadFlash">
                <div id="preload-wrapper" className="block-face blue-grey darken-4">
                    <div>
                        <img id="c-for-ced" src={c_for_ced} alt="C for Ced" />

                        <div id="dot-wrapper" className="row">
                            <div className="col s3 dot-container">
                                <div id="dot-0" className="loading-dot"></div>
                            </div>
                            <div className="col s3 dot-container">
                                <div id="dot-1" className="loading-dot"></div>
                            </div>
                            <div className="col s3 dot-container">
                                <div id="dot-2" className="loading-dot"></div>
                            </div>
                            <div className="col s3 dot-container">
                                <div id="dot-3" className="loading-dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PreloadFlash;