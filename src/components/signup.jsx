import React, { Component } from "react";
import Input from "./commons/Input";
import Joi from 'joi-browser';
import { Link } from "react-router-dom";

class Signup extends Component{
    state={
        data : {username : "", email : "", password : ""},
        error : {}
    }

    schema ={
        username :Joi.string().required().label('Username'),
        email : Joi.string().required().email().label('Email'),
        password : Joi.string().regex(/^[a-zA-z0-9]{3,30}$/).required().label('Password')
    }

    validateProperty = (input) =>{
        // console.log([input.name]);
        const obj = {[input.name] : input.value};
        const schema = {[input.name] : this.schema[input.name]};
        const {error} =Joi.validate(obj,schema);
        return error ? error.details[0].message : null;
    }

    validate = () =>{
        const options = {abortEarly: false};
        const res = Joi.validate(this.state.data, this.schema, options);
        // console.log(res);
        if(!res.error) return null;

        const error = {};
        for(let item of res.error.details)
         error[item.path[0]] =item.message;
        return error;
    }

    handleChange = (e) =>{
        const error ={... this.state.error};
        const erMes = this.validateProperty(e.currentTarget);
        if(erMes) error[e.currentTarget.name] = erMes;
        else  delete error[e.currentTarget.name];

        const data = {...this.state.data};
        data[e.currentTarget.name] = e.currentTarget.value;

        this.setState({data , error});
    }
    
    handleSubmit = (e) =>{
        e.preventDefault();
        
        const error = this.validate();
        this.setState({error : error || {}});
        if(error) return ;
        console.log("Submitted");
        console.log(this.state.data)
        
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <Input name="username" value={this.state.data.username} label="Username :" onChange={this.handleChange} 
                    error={this.state.error.username} type='text' placeholder="Enter Username" />
                <Input name="email" value={this.state.data.email} label="Email :" 
                    onChange={this.handleChange} error={this.state.error.email} type="email" placeholder="Enter email"/>
                <Input name="password" value={this.state.data.password} label="Password :" onChange={this.handleChange}
                    error={this.state.error.password} type='password' placeholder="Enter password" />
                <Link to="/" ><button disabled={this.validate()} className="btn btn-primary btn-sm"> Submit </button></Link>
            </form>
        );
    }
}

export default Signup;