import React, { Component } from 'react';

export default class MinhaMeta extends Component {

    RemoverLinha(id){
        this.props.Delete(id);
    }

    render(){
        return (
            <tr className='table-Light' style={{textAlign: 'center'}} key={this.props.id}>
                <td>{this.props.cat}</td>
                <td>{this.props.subC}</td>
                <td>{this.props.data}</td>
                <td>{ 'R$ ' + this.props.val}</td>
                <td>{this.props.pagoCom}</td>
                <td>{this.props.obs}</td>
                <td className='text-center'>
                    <button type="button" className="btn btn-danger btn-sm" onClick={this.RemoverLinha.bind(this, this.props.id)}>Remover</button>
                </td>
            </tr>
        );
    }
}

