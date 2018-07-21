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

    render(){
        return (
            <tr className={this.state.myClass} style={{textAlign: 'center'}}>
                <td scope="row">{this.props.meta}</td>
                <td scope="row">{this.props.valor}</td>
                <td style={{width: '200px'}}>
                    <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={this.MudaStatus.bind(this)}>
                        <option selected value='table-Light'>Não iniciado</option>
                        <option value="table-secondary">Sem planejamento</option>
                        <option value="table-primary">Em progresso</option>
                        <option value="table-success">Realizada</option>
                    </select>
                </td>
                <td className='text-center'>
                    <button type="button" className="btn btn-danger btn-sm">Remover</button>
                </td>
            </tr>
        );
    }
}

