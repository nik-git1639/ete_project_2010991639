import _ from "lodash";
import React, { Component } from "react";

class TableBody extends Component{

    renderCell = (item, c) => {
        if (c.content) return c.content(item);
        else
        return _.get(item, c.path);
    }

    render(){
        const { users, columns } = this.props;
        // console.log(users);
        return (
            <tbody>
                    {users.map( (userObj) => 
                        <tr key={userObj.id}>
                            {columns.map( (c) => <td key={c.path ||c.key }> {this.renderCell(userObj,c)} </td>)}
                        </tr>
                    )}
            </tbody>

        );
    }
}

export default TableBody;