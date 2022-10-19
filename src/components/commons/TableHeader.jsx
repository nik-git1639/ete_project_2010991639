import React, { Component } from "react";

class TableHeader extends Component{
    render(){
        const {columns} = this.props;
        console.log(columns);
        return (
            <thead>
                <tr>
                    {columns.map( (c) => 
                        <th key={c.path || c.key }>{c.label}</th>
                     )}
                </tr>
            </thead>
        );
    }
}

export default TableHeader;