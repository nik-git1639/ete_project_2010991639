import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useParams, Link } from "react-router-dom";


const View = () =>{

    const { id } = useParams();
    
    const [userData, setUserData] = useState([]);
    useEffect(()=>{
        const d = async ()=>{
            const res = await axios.get(`http://localhost:3001/users/${id}`);
            setUserData(res.data);
        }
        d();
    },[])

    return (
       <>
        <div>
            <h1>User :- {userData.id} </h1>
            <h2>Name :- {userData.name} </h2>
            <h2>Usename :- {userData.username}</h2>
            <img src={userData.imgURL} ></img>
        </div>
       </> 
    );
}

export default View;