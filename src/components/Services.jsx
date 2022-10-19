import React, { Component } from "react";

class Services extends Component{
    state={

    }
    render(){
        return (
            <div className="bg-white mb-5 ">
                <h1 className="text-center text-primary mb-4" style={{fontFamily: "TimesNewRoman" }}><b><u>Services</u></b></h1>
                <div className="container marketing">
                    <div className="row">
                        <div className="col-lg-4">
                            <img className="rounded-circle" src="construction.jpg" alt="Generic placeholder image" width="140" height="140"/>
                            <h2>Construction</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>
                        <div className="col-lg-4">
                            <img className="rounded-circle center" src="medics.jpg" alt="Generic placeholder image" width="140" height="140"/>
                            <h2>Health Care</h2>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>
                        <div className="col-lg-4">
                            <img className="rounded-circle" src="carousel3.jpg" alt="Generic placeholder image" width="140" height="140"/>
                            <h2>Marketting</h2>
                            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;