import React, { Component } from 'react';
import './App.css';
import Navbar from './components/commons/Navbar';
import Starter from './components/Starter';
import About from "./components/About";
import OurStory from "./components/OurStory";
import AddUser from "./components/AddUser";
import Login from "./components/Login";
import Services from "./components/Services";
import NotFound from "./components/NotFound";
import Signup from './components/signup';
import Update from './components/Update';
import Users from "./components/Users";
import View from "./components/View";
import {Route, Routes, Navigate} from 'react-router-dom';

class App extends Component{

  render(){
    return (
      <div className='body'>
        <Navbar />
        <main className='container'>
          <Routes>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/ourstory" element={<OurStory />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/adduser" element={<AddUser  />}></Route>
            <Route path="/update/:id" element={<Update />}></Route>
            <Route path="/view/:id" element={<View />}></Route>
            <Route path="/users" element={<Users  />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/not-found" element={<NotFound />}></Route>
            <Route path="/" element={<Starter/>}></Route>
            <Route path="*" element={<Navigate replace to="/not-found" />}></Route>
          </Routes>
        </main>
      </div>
      // <h1>Hello World</h1>
    );
  }
}

export default App;
