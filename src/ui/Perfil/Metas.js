import React, { Component } from 'react';

import MinhaMeta from './Metas/MinhaMeta';

export default class Metas extends Component {

    constructor(){
        super();
        this.state = ({
            metas: [
                {
                    id: 1,
                    meta: 'Comprar um helicoptero',
                    valor: '1.000.000'
                },
                {
                    id: 2,
                    meta: 'Comprar um carro',
                    valor: '100.000'
                },
                {
                    id: 3,
                    meta: 'Casamento',
                    valor: '60.000'
                },
            ],
            inserir: 'none',
            botaoNovo: true
        })
    }

    InsereMeta(e){
        let valor = {
            id: 1 + this.state.metas.id,
            meta: this[`NewMeta`].value,
            valor: this[`ValMeta`].value
        };
        e.preventDefault();
        this.setState({
            metas: this.state.metas.concat(valor)
        });
        this['NewMeta'].value = '';
        this['ValMeta'].value = '';
        this.setState({
            inserir: 'none',
            botaoNovo: true
        })
    }

    handleDelete(id){
        let indice = this.state.metas.find(item => item.id === id);
        let array = [...this.state.metas];
        array.splice(indice, 1);
        this.setState({
            metas: array
        })
    }

    InserirNovo(e){
        e.preventDefault();
        if(this.state.botaoNovo){
            this.setState({
                inserir: 'block',
                botaoNovo: false
            })
        }else{
            this.setState({
                inserir: 'none',
                botaoNovo: true
            })
        }

    }

    render(){
        return (
            <div className='container' style={{display: this.props.optionMetas}}>
                <div style={{border: 'double #51bf87', marginTop: '-10px', borderRadius: '10px'}}>
                    <form className="form-inline" style={{ marginTop: '8px', padding: '20px 7px', marginLeft: '8px', display: this.state.inserir}} onSubmit={this.InsereMeta.bind(this)}>
                        <div className="form-group col-md-5">
                            <label htmlFor="tetMeta" className='my-1 mr-3'>Nova meta:</label>
                            <input type="text" className="form-control" id="tetMeta"
                                   ref={(input) => this['NewMeta'] = input}
                                    style={{width: '75%'}}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="pwd" className='my-1 mr-3'>Valor necessário:</label>
                            <input type="text" className="form-control" id="pwd"
                                   ref={(input) => this['ValMeta'] = input}
                                    style={{width: '65%'}}/>
                        </div>
                        <button type="submit" className="btn btn-fresh">Inserir</button>
                    </form>
                    <table className="table table-sm" style={{overflowY: 'auto'}}>
                        <thead>
                        <tr className='text-center' style={{background: '#E6E6FA'}}>
                            <th scope="col">Meta</th>
                            <th scope="col">Valor necessário</th>
                            <th scope="col">Status</th>
                            <th scope="col">
                                {this.state.botaoNovo ?
                                    <button type="button" className="btn btn-primary btn-sm" onClick={this.InserirNovo.bind(this)}>Novo</button>
                                    :
                                    <button type="button" className="btn btn-secundary btn-sm" onClick={this.InserirNovo.bind(this)}>Cancelar</button>
                                }
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.metas.map((m, index) => {
                            return (
                            <MinhaMeta key={index} meta={m.meta} valor={m.valor} idMeta={m.id} handleDelete={this.handleDelete.bind(this)}/>
                            )})
                        }
                        </tbody>
                    </table>
                    {
                        this.state.metas.length < 1 ?
                        <div className="alert alert-warning text-center" role="alert">
                            Você ainda não definiu metas a realizar
                        </div>
                            :
                        <div/>
                    }
                </div>
            </div>
        );
    }
}

