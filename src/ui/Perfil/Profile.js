import React, { Component } from 'react';

export default class Profile extends Component {

    ModificarDados(e) {
        e.preventDefault();
        this.props.altDados();
    }

    ModificarSenha(e) {
        e.preventDefault();
        this.props.altSenha();
    }

    ModificarMeta(e) {
        e.preventDefault();
        this.props.altMeta();
    }

    ApagarConta(e) {
        e.preventDefault();
        this.props.ExcluirConta();
    }

    render() {

        return (
            <div className="container">
                <div className="span3 well text-center">
                    <img src={this.props.FotoProfile} style={{width: this.props.widthImg, height: this.props.heightImg, borderRadius: '75px'}} className="img-circle"/>
                    <h3 style={{fontSize: this.props.tamNome}}>{this.props.usuario}</h3>
                    <em>O que deseja fazer?</em>
                    <div className="well text-center">
                        <button type="button" className={this.props.btnAzul}
                                onClick={this.ModificarDados.bind(this)}>Modificar meus dados
                        </button>
                        <button type="button" className={this.props.btnVerde}
                                onClick={this.ModificarMeta.bind(this)}>Minhas metas</button>
                        <button type="button" className={this.props.btnLaranja}
                                onClick={this.ModificarSenha.bind(this)}>Alterar minha senha</button>
                        <button type="button" className={this.props.btnRed}
                                onClick={this.ApagarConta.bind(this)}>Apagar minha conta</button>
                    </div>
                </div>
            </div>
        );
    }
}