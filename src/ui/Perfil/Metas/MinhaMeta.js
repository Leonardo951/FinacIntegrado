import React, { Component } from 'react';


export default class MinhaMeta extends Component {

    constructor(){
        super();
        this.state = ({
            myClass: 'table-Light'
        })
    }

    MudaStatus(e){
        let valor = e.target.value;
        this.setState({
            myClass: valor,
        })
    }

    RemoverLinha(id){
        this.props.handleDelete(id);

    }

    render(){
        return (
            <tr className={this.state.myClass} style={{textAlign: 'center'}} key={this.props.idMeta}>
                <td>{this.props.meta}</td>
                <td>{this.props.valor}</td>
                <td style={{width: '200px'}}>
                    <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={this.MudaStatus.bind(this)}>
                        <option defaultValue='table-Light'>Não iniciado</option>
                        <option value="table-secondary">Sem planejamento</option>
                        <option value="table-primary">Em progresso</option>
                        <option value="table-success">Realizada</option>
                    </select>
                </td>
                <td className='text-center'>
                    <button type="button" className="btn btn-danger btn-sm" onClick={this.RemoverLinha.bind(this, this.props.idMeta)}>Remover</button>
                </td>
            </tr>
        );
    }
}

