import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useParams, Link } from "react-router-dom";

const Update = () => {
//   let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
  };

  const handleClick = async (e)=>{
    await axios.put(`http://localhost:3001/users/${id}`, user);
    }

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className=" mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>

          <div className="form-group">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="name"
              id="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="uname">UserName : </label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="username"
              id="uname"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              className="form-control form-control-lg"
              name="email"
              id="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Photo Link"
              name="photo"
              value={photo}
              onChange={e => onInputChange(e)}
            />
          </div> */}
          
          <Link to="/users"><button onClick={e=>handleClick(e)} className="btn btn-primary btn-sm"> Submit </button></Link>
        </form>
      </div>
    </div>
  );
};

export default Update;







// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import Input from "./commons/Input";

// const Update = () =>{
//     const params = useParams();
//     console.log("params",params);
//     console.log(params.id);

//     const [inputValues, setInputValue] = useState({
//         name: "",
//         username: "",
//         email: "",
//       });
    
//       const [validation, setValidation] = useState({
//         name: "",
//         username: "",
//         email: "",
//       });

//       const checkValidation = () => {
//         let errors = validation;
    
//         //first Name validation
//         if (!inputValues.name.trim()) {
//           errors.name = "First name is required";
//         } else {
//           errors.name = "";
//         }
//         //last Name validation
//         if (!inputValues.username.trim()) {
//           errors.username = "Last name is required";
//         } else {
//           errors.username = "";
//         }
    
//         // email validation
//         const emailCond =
//           "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
//         if (!inputValues.email.trim()) {
//           errors.email = "Email is required";
//         } else if (!inputValues.email.match(emailCond)) {
//           errors.email = "Please ingress a valid email address";
//         } else {
//           errors.email = "";
//         }

//         setValidation(errors);
//       };

//     const [data,setdata] =  useState([]);
//     useEffect(() => {
//         const user = async ()=>{
//             const res = await axios.get(`http://localhost:3001/users/${params.id}`);
//             console.log(res.data);
//             setdata(res.data);
//         }
//         user();
//       },[]);

//     useEffect(() => {
//     checkValidation();
//     }, [inputValues]);

//     const handleChange = (event) =>{
//         console.log(event.target);
//         const { name, value } = event.target;
//         console.log([name]);
//         setInputValue({ ...inputValues, [name]: value });
//       }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//       };

//     const handleClick = async (e)=>{
//         const {data: user}  = await axios.put(`http://localhost:3001/users/${params.id}`);
//     }

//     console.log(data);

//     return (
//         <>
//             <h1>Update Form </h1>
//             <form onSubmit={handleSubmit} >
//             {/* <div className="form-group">
//                 <label htmlFor="name" >Name :</label>
//                 <input 
//                     value={data.name} 
//                     onChange={e=>handleChange(e)} 
//                     name="name" 
//                     type="text"
//                     className="form-control"
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="username" >UserName :</label>
//                 <input 
//                     value={data.username} 
//                     onChange={e=>handleChange(e)} 
//                     name="username" 
//                     type="text"
//                     className="form-control"
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="name" >Email :</label>
//                 <input 
//                     value={data.email} 
//                     onChange={e=>handleChange(e)} 
//                     name="email" 
//                     type="email"
//                     className="form-control"
//                 />
//             </div> */}
//                 <Input name="name" value={data.name} onChange={e=>handleChange(e)} label="Name :" type='text'/>
//                 <Input name="username" value={data.username} onChange={e=>handleChange(e)} label="Username :" type='text' />
//                 <Input name="email" value={data.email} onChange={e=>handleChange(e)} label="Email :" type="email" />   
//                 <Link to="/users"><button onClick={e=>handleClick(e)} className="btn btn-primary btn-sm"> Submit </button></Link>                       
//             </form>
//         </>
        
//     );
// }

// export default Update;