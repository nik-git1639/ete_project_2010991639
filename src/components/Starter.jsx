import React, { Component } from "react";
import About from "./About";
import Jumbo from "./Jumbo";
import OurStory from "./OurStory";
import Login from "./Login";
import Services from "./Services";
import Users from "./Users";

class Starter extends Component{
    state={

    }

    render(){
        return (
            <main className="container">
                {/* <Corousel /> */}
                <Jumbo />
                <Services />
                <About />
                <OurStory />
                {/* <Users  fs/> */}
            </main>
        );
    }
}

export default Starter;