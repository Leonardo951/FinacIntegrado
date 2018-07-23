import React, { Component } from 'react';

import {Link} from 'react-router';

import NovoSalario from '../ui/NovaEntrada/NovoSalario';
import NovoEmprestimo from '../ui/NovaEntrada/NovoEmprestimo';
import CartaoCredito from '../ui/NovaEntrada/CartaoCredito';
import OutraEntrada from '../ui/NovaEntrada/OutraEntrada';

import './container.css';

export default class MenuPrincipal extends Component {


    constructor() {
        super();
        this.state = {
            NewSalario: 'none',
            NewOutra: 'none',
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
                NewEmprestimo: 'block',
                itemAtivo: true
            });
        }
    }

    InserirOutraEntrada() {
        if(this.state.NewOutra === 'block' && this.state.itemAtivo) {
            this.setState ({
                NewOutra: 'none',
                itemAtivo: false
            });
        }else if(!this.state.itemAtivo){
            this.setState ({
                NewOutra: 'block',
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

    InfosDoUsuario = {
        usuario: 'Paul: ET',
        FotoProfile: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbezqZpEuwGSvitKy3wrwnth5kysKdRqBW54cAszm_wiutku3R"
        // FotoProfile: "http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
    };

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
                                    <a className="dropdown-item" onClick={this.InserirOutraEntrada.bind(this)}>Outra forma</a>
                                </div>
                            </li>
                        </ul>
                        {/*<form className="form-inline my-2 my-lg-0">*/}
                        {/*<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>*/}
                        {/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                        {/*</form>*/}
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown"><a href="" className="dropdown-toggle" data-toggle="dropdown">
                                {this.InfosDoUsuario.usuario}
                                <b className="caret"/></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li>
                                        <div className="navbar-content">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <img src={this.InfosDoUsuario.FotoProfile}
                                                         alt="" className="img-responsive" style={{borderRadius: '10px'}}/>
                                                    <p className="text-center small">Alterar imagem</p>
                                                </div>
                                                <div className="col-md-7">
                                                    <span>{this.InfosDoUsuario.usuario}</span>
                                                    <p className="text-muted small">mail@gmail.com</p>
                                                    <div className="divider">
                                                    </div>
                                                    <Link to={'/perfil'}>
                                                        <button className="btn btn-primary btn-sm active">Ver meu perfil</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="navbar-footer">
                                            <div className="navbar-footer-content">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <a href="" className="btn btn-light btn-sm">Acionar o suporte</a>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <a href="" className="btn btn-light btn-sm pull-right">Sair</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
                <NovoSalario NewSalario={this.state.NewSalario}
                             CancelaSalario={this.InserirSalario.bind(this)}/>
                <NovoEmprestimo NewEmprestimo={this.state.NewEmprestimo}
                                CancelaEmprestimo={this.InserirEmprestimo.bind(this)}/>
                <CartaoCredito NewCartao={this.state.NewCartao}
                               CancelaCartao={this.InserirCartao.bind(this)}/>
                <OutraEntrada NewOutra={this.state.NewOutra}
                              InserirOutra={this.InserirOutraEntrada.bind(this)}/>
            </div>

        )}
};
