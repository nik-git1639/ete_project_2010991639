import React, { Component } from "react";
import axios from "axios";
import Table from "./commons/Table";
import {Link} from "react-router-dom";

class Users extends Component{

    state={
        Users : [],
    }

    columnData =[
        {label:"ID", path : "id" },
        {label:"Username", path : "username" },
        {label:"Name", path : "name" },
        {label:"Email", path : "email" },
        {label:"View", key :"view", content : m => (<Link to={`/view/${m.id}`}><button className="btn btn-sm btn-success">View</button></Link>) },
        {label:"Edit", key :"edit", content : m => (<Link to={`/update/${m.id}`}><button className="btn btn-sm btn-primary" onClick={()=>this.handleUpdate(m)} >Edit</button></Link>)},
        {label:"Delete", key : "delete",content : m =>(<button className="btn btn-sm btn-danger" onClick={()=>this.handleDelete(m)} >Delete</button>) },
    ]

    handleUpdate = (user) =>{
        console.log("Update",user);
    }

    handleDelete = async (user) =>{
        const Users = this.state.Users.filter( (item) => user.id !== item.id );
        const res = await axios.delete(`http://localhost:3001/users/${user.id}`)
        this.setState({Users});
    }

    async componentDidMount(){
        // const promise = axios.get("https://jsonplaceholder.typicode.com/users"); 
        // const response = await promise;
        // console.log(response);

        const response =await axios.get("http://localhost:3001/users");
        const Users = response.data;
        this.setState({Users});
    }


    render(){
        console.log(this.state.Users);
        // console.log(window.location);
        return(
            <React.Fragment>
           
                {/* <a href="/add"><button className="btn btn-my-2">Add</button></a> */}
                <Table dataToDisplay={this.state.Users} columnData={this.columnData} />
            </React.Fragment>
        );
    }
}

export default Users;