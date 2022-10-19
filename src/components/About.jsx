import React, { Component } from "react";
import {Link} from 'react-router-dom';

class About extends Component{
    state={

    }
    render(){
        return (
            <div >
                <div id="about" className="container mb-5 pt-3 pb-4 bg-none">
                    <div className="row">
                        <div className="col-m-6 justify-content-center text-center" >
                            <h1 className="text-center text-primary mb-5" style={{fontFamily: "TimesNewRoman" }}><b><u>About My world</u></b></h1>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br/>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>
                            <br/><Link to="/login"><button className="btn btn-primary btn-lg center">Login</button></Link>
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

export default About;