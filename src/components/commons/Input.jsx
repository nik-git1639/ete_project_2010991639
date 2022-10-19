import React, {Component } from "react";

class Input extends Component{

    render(){
        const {name, label, value, error, onChange, type, placeholder } = this.props;
        return (
            <div className="form-group">
                <label htmlFor={name} >{label}</label>
                <input 
                    value={value} 
                    onChange={onChange} 
                    name={name} 
                    type={type}
                    id ={name}
                    className="form-control"
                    placeholder={placeholder}
                />
                {error && <div className="alert alert-danger ">{error}</div>}
            </div>
        );  
    }
}

export default Input;