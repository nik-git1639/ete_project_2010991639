import React, { Component } from "react";

class OurStory extends Component{
    render(){
        return (
            <div >
                <div id="about" className="container mb-5 pt-3 pb-4 bg-none">
                    <div className="row">
                        <div className="col-m-6 justify-content-center text-center" >
                            <img className="text-center" src="story.jpg" />
                            <h1 className="text-center text-primary mb-5" style={{fontFamily: "TimesNewRoman" }}><b><u>Our Story</u></b></h1>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>That’s why we started ReSanskrit as an Instagram channel in late 2016. Our objective was to handpick relevant Subhashitas and Shlokas from various Sanskrit books, translate them in English and Hindi and finally decorate them using beautiful visual graphics that would catch audience’s attention. We are still active on Instagram and we would recommend you to follow us there for a regular dose of Sanskrit.</p>
                        </div>
                        <div className="col-m-6">
                            <span className="glyphicon glyphicon-signal logo"></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurStory;