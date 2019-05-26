import React, { Component } from 'react'

//css
import '../static/css/fourth_block.css';

class FourthBlock extends Component {
    render() {
        return (
            <div className="FourthBlock">
                <div id="block-four">
                    <div id="portfolio-header" className="center-align">
                        <div id="portfolio-header-wrapper">
                            <h3 className="grey-text text-darken-3 animated fadeInDown"><b>PROJECTS</b></h3>
                            <div id="underline-portfolio" className="grey darken-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FourthBlock;
