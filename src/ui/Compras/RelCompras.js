import React, { Component } from 'react';

import MinhaCompra from './MinhaCompra';

export default class RelCompras extends Component {

    constructor(){
        super();
        this.state = {
            compras: [
                {
                    cat: 'Automóveis',
                    id: 1,
                    subC: 'Oficina',
                    data: '15/12/2017',
                    pagoCom: 'Minha carteira',
                    val: '200,00',
                    obs: ''
                },
                {
                    cat: 'Curso',
                    id: 2,
                    subC: '',
                    data: '15/03/2018',
                    pagoCom: 'Nubank',
                    val: '30,00',
                    obs: 'python - Udemy'
                },
                {
                    cat: 'Aluguel',
                    id: 3,
                    subC: '',
                    data: '03/01/2018',
                    pagoCom: 'Conta Corrente',
                    val: '920,00',
                    obs: ''
                },
            ]
        }
    }

    handleDelete(id){
        let indice = this.state.compras.find(item => item.id === id);
        let array = [...this.state.compras];
        array.splice(indice, 1);
        this.setState({
            compras: array
        })
    }

    render(){
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-hover table-striped">
                            <thead>
                            <tr className='text-center'>
                                <th>Categoria</th>
                                <th>Sub-categoria</th>
                                <th>Data</th>
                                <th>Valor</th>
                                <th>Pago com</th>
                                <th>Observação</th>
                                <th>Ações</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.compras.map((c, index)=>{
                                    return (
                                        <MinhaCompra key={index} cat={c.cat} subC={c.subC}
                                                data={c.data} val={c.val} pagoCom={c.pagoCom} obs={c.obs} id={c.id}
                                                Delete={this.handleDelete.bind(this)}/>
                                    );
                                    }
                                )
                            }
                            </tbody>
                        </table>
                        {
                            this.state.compras.length < 1 ?
                                <div className="alert alert-warning text-center" role="alert">
                                    Você ainda não cadastrou nenhum gastos
                                </div>
                                :
                                <div/>
                        }
                    </div>
                </div>
            </div>
        );
    }
}