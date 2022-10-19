import React, { Component } from "react";
import Input from "./commons/Input";
import Joi from 'joi-browser';
import { Link } from "react-router-dom";

class Login extends Component{ 
    state={
        account : {email : "", password : ""},
        error : {}
    }

    schema = { 
        email : Joi.string().email().required().label('Email'),
        password : Joi.string().regex(/^[a-zA-z0-9]{3,30}$/).required().label('Password'),
    };

    validate = () =>{
        const options = {abortEarly: false};
        const res = Joi.validate(this.state.account, this.schema, options);
        // console.log(res);
        if(!res.error) return null;

        const error = {};
        for(let item of res.error.details)
         error[item.path[0]] =item.message;
        return error;
    }

    validateProperty = (input) =>{
        // console.log([input.name]);
        const obj = {[input.name] : input.value};
        const schema = {[input.name] : this.schema[input.name]};
        const {error} =Joi.validate(obj,schema);
        return error ? error.details[0].message : null;
    }
    
    handleChange = (e) =>{
        const error ={... this.state.error};
        const erMes = this.validateProperty(e.currentTarget);
        if(erMes) error[e.currentTarget.name] = erMes;
        else  delete error[e.currentTarget.name];

        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;

        this.setState({account , error});
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        const error = this.validate();
        this.setState({error : error || {}});
        if(error) return ;
        console.log("Submitted");
        
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <Input name="email" value={this.state.account.email} label="Email" 
                    onChange={this.handleChange} error={this.state.error.email} type="email" placeholder="Enter email"/>
                <Input name="password" value={this.state.account.password} label="Password" 
                    onChange={this.handleChange} error={this.state.error.password} type="password" placeholder="Enter password"/>
                <Link to="/" ><button disabled={this.validate()} className="btn btn-primary btn-sm"> Submit </button></Link>
            </form>
        );
    }
}

export default Login;