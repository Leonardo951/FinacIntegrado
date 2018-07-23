import React, { Component } from 'react';

import {Link} from 'react-router';
import Banner from './Banner';

import './acesso.css';

export default class SignIn extends Component {

    constructor(){
        super();
        this.state ={
            selecionado: false,
            BotaoStyle: 'btn btn-sm btn-info'
        }
    }

    Selecionar(e){
        e.preventDefault();

        this.state.selecionado ?
            this.setState({
                selecionado: false,
                BotaoStyle: 'btn btn-sm btn-info'

            })
            :
            this.setState({
                selecionado: true,
                BotaoStyle: 'btn btn-sm'
            })
    }

    render(){
        return(
            <div style={{width: '100%', height: '100%', background: '#2c3e50', top: '0', left: '0', position: 'absolute'}}>
                <div className="container" style={{background: '#2c3e50'}}>
                    <div className="row" style={{background: '#D3D3D3', borderRadius: '10px', marginTop: '5em'}}>
                        <div style={{padding: '0px 5px'}}>
                        <Banner/>
                        </div>
                        <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3" style={{padding: '2em 10px'}}>
                            <form style={{background: '#fff', borderRadius: '10px', padding: '2em'}}>
                                <fieldset>
                                    <h2>Realize seu Login</h2>
                                    <hr className="colorgraph"/>
                                    <div className="form-group">
                                        <input type="email" name="email" id="email" className="form-control input-lg"
                                               placeholder="E-mail"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" id="password"
                                               className="form-control input-lg" placeholder="Senha"/>
                                    </div>
                                    <span className="button-checkbox">
					                     <button type="button" className={this.state.BotaoStyle} onClick={this.Selecionar.bind(this)}>Lembre-me</button>
                                        <input type="checkbox" name="remember_me" id="remember_me" checked={this.state.selecionado} className="hidden"/>
					                    <a href="" className="btn btn-link pull-right btn-sm">Recuperar sua senha?</a>
				                    </span>
                                    <hr className="colorgraph"/>
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <input type="submit" className="btn btn-lg btn-success btn-block btn-sm"
                                                   value="Entrar"/>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <Link to={'/Registrar'}>
                                                <a href="" className="btn btn-lg btn-primary btn-block btn-sm">Desejo me registrar</a>
                                            </Link>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}