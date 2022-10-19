import React, { Component } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

class Table extends Component{
    render(){
        const {dataToDisplay, columnData} =this.props;
        return (
            <table className="table table-striped">
                <TableHeader columns={columnData} />
                <TableBody users={dataToDisplay} columns={columnData} />
            </table>
        );
    }
}

export default Table;