import React, { Component } from 'react';

import {Link} from 'react-router';

import NovoSalario from '../ui/NovaEntrada/NovoSalario';
import NovoEmprestimo from '../ui/NovaEntrada/NovoEmprestimo';
import CartaoCredito from '../ui/NovaEntrada/CartaoCredito';

export default class MenuPrincipal extends Component {


    constructor() {
        super();
        this.state = {
            NewSalario: 'none',
            NewEmprestimo: 'none',
            NewCartao: 'none',
            itemAtivo: false,
            logo: 'Finac',
        };
    }

    InserirSalario() {
        if(this.state.NewSalario === 'block' && this.state.itemAtivo) {
            this.setState ({
                NewSalario: 'none',
                itemAtivo: false
            });
        }else if(!this.state.itemAtivo){
            this.setState ({
                NewCartao: 'none',
                NewEmprestimo: 'none',
                NewSalario: 'block',
                itemAtivo: true
            });
        }
    }

    InserirEmprestimo() {
        if(this.state.NewEmprestimo === 'block' && this.state.itemAtivo) {
            this.setState ({
                NewEmprestimo: 'none',
                itemAtivo: false
            });
        }else if(!this.state.itemAtivo){
            this.setState ({
                NewCartao: 'none',
                NewSalario: 'none',
                NewEmprestimo: 'block',
                itemAtivo: true
            });
        }
    }

    InserirCartao() {
        if(this.state.NewCartao === 'block' && this.state.itemAtivo) {
            this.setState ({
                NewCartao: 'none',
                itemAtivo: false
            });
        }else if(!this.state.itemAtivo){
            this.setState ({
                NewSalario: 'none',
                NewEmprestimo: 'none',
                NewCartao: 'block',
                itemAtivo: true
            });
        }
    }

    render(){

        return (
            <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link to='/' className="navbar-brand" title='Voltar ao dashboard'>{this.state.logo}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                        aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link">Relatórios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Novidades</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="dropdown01"
                               data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">Minhas informações</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown01">
                                <Link to='/perfil' className="dropdown-item">Meu perfil</Link>
                                <a className="dropdown-item">Meus gastos</a>
                                <a className="dropdown-item">Meus cartões</a>
                                <a className="dropdown-item">Meus ganhos</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="dropdown01"
                               data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">Nova Entrada</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown01">
                                <a className="dropdown-item" onClick={this.InserirSalario.bind(this)}>Salário</a>
                                <a className="dropdown-item" onClick={this.InserirEmprestimo.bind(this)}>Empréstimo</a>
                                <a className="dropdown-item" onClick={this.InserirCartao.bind(this)}>Cartão de crédito</a>
                                <a className="dropdown-item">Outro</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
                <NovoSalario NewSalario={this.state.NewSalario}
                            CancelaSalario={this.InserirSalario.bind(this)}/>
                <NovoEmprestimo NewEmprestimo={this.state.NewEmprestimo}
                              CancelaEmprestimo={this.InserirEmprestimo.bind(this)}/>
                <CartaoCredito NewCartao={this.state.NewCartao}
                                CancelaCartao={this.InserirCartao.bind(this)}/>
            </div>

        )}
};
