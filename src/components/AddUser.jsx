import React, { Component } from "react";
import Input from "./commons/Input";
import Joi from 'joi-browser';
import { Link} from 'react-router-dom';
import axios from "axios";

class AddUser extends Component{
    state={
        data : {name : "", username : "", email : "", imgURL:"" },
        error : {}
    }

    schema ={
        name :Joi.string().required().label('Name'),
        username :Joi.string().required().label('Username'),
        email : Joi.string().required().email().label('Email'),
        imgURL : Joi.string().required()
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

    tryingmybest = async() =>{
        const {data: user}  = await axios.post("http://localhost:3001/users",this.state.data);
        // console.log(res);
        
        // const users = [res, ...]
        console.log(user);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <Input name="name" value={this.state.data.name} label="Name :" onChange={this.handleChange} 
                    error={this.state.error.name} type='text' placeholder="Enter Name" />
                <Input name="username" value={this.state.data.username} label="Username :" onChange={this.handleChange}
                    error={this.state.error.username} type='text' placeholder="Enter USername" />
                <Input name="email" value={this.state.data.email} label="Email :" 
                    onChange={this.handleChange} error={this.state.error.email} type="email" placeholder="Enter email"/>
                <Input name="imgURL" value={this.state.data.imgURL} label="Image url :" 
                    onChange={this.handleChange} error={this.state.error.imgURL} type="text" placeholder="Enter Image url"/>
                <Link to="/users"><button disabled={this.validate()} onClick={this.tryingmybest} className="btn btn-primary btn-sm"> Submit </button></Link>
            </form>
        );
    }
}

export default AddUser;