import React, { Component } from 'react';

import {Link} from 'react-router';
import Banner from './Banner';
import TermosCondicoes from './TermosCondicoes';

import './acesso.css';

export default class SignUp extends Component {

    constructor(){
        super();
        this.state ={
            selecionado: false,
            BotaoStyle: 'btn btn-sm btn-info',
            habilitaBotao: true,
        }
    }

    Selecionar(e){
        e.preventDefault();

        this.state.selecionado ?
            this.setState({
                selecionado: false,
                BotaoStyle: 'btn btn-sm btn-info',
                habilitaBotao: true,
            })
            :
            this.setState({
                selecionado: true,
                BotaoStyle: 'btn btn-sm',
                habilitaBotao: false,
            })
    }

    render(){
        return(
            <div style={{width: '100%', height: '100%', background: '#2c3e50', top: '0', left: '0', position: 'absolute'}}>
                <div className="container">
                    <div className="row" style={{background: '#D3D3D3', borderRadius: '10px', marginTop: '5em'}}>
                        <div style={{padding: '0px 5px'}}>
                            <Banner/>
                        </div>
                        <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3" style={{padding: '2em 10px'}}>
                            <form style={{background: '#fff', borderRadius: '10px', padding: '2em'}}>
                                <h2>Faça seu cadastro</h2>
                                <hr className="colorgraph"/>
                                <div className="form-group">
                                    <input type="text" name="display_name" id="display_name"
                                           className="form-control input-lg" placeholder="Seu nome" tabIndex="3"/>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="first_name" id="first_name"
                                                   className="form-control input-lg" placeholder="Crie um nome de usuário" tabIndex="1"/>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <select name="fonte" className="form-control input lg">
                                                <option defaultValue='selecione'>Selecione seu sexo</option>
                                                <option>Feminino</option>
                                                <option>Masculino</option>
                                                <option>Outros</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" id="email" className="form-control input-lg"
                                           placeholder="Seu e-mail" tabIndex="4"/>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input type="password" name="password" id="password"
                                                   className="form-control input-lg" placeholder="Crie uma senha" tabIndex="5"/>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input type="password" name="password_confirmation"
                                                   id="password_confirmation" className="form-control input-lg"
                                                   placeholder="Confirme sua senha" tabIndex="6"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <span className="button-checkbox" style={{margin: '3px 8px'}}>
					                     <button type="button" className={this.state.BotaoStyle} onClick={this.Selecionar.bind(this)}>Concordo</button>
                                        <input type="checkbox" name="remember_me" id="remember_me" checked={this.state.selecionado} className="hidden"/>
				                    </span>
                                    <small className="col-xs-8 col-sm-9 col-md-9">
                                        Você concorda com os
                                        <a href="#t_and_c_m" data-toggle="modal" className='btn-link'> Termos e Condições </a>
                                        estabelecidos por este site, incluindo o uso de cookies?
                                    </small>
                                </div>
                                <hr className="colorgraph"/>
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <input type="submit" value="Registrar" disabled={this.state.habilitaBotao} className="btn btn-success btn-block btn-lg btn-sm" tabIndex="7"/>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <Link to={'/login'}>
                                            <a href="" className="btn btn-primary btn-block btn-lg btn-sm">Voltar ao login</a>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <TermosCondicoes aceitar={this.Selecionar.bind(this)}/>
            </div>
        );
    }
}