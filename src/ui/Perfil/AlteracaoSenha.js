import React, { Component } from 'react';

export default class AlteracaoSenha extends Component {

    Fechar(e){
        e.preventDefault();
        this.props.altSenha();
        return true;
    }

    render() {
        return (
            <div className='container' style={{display: this.props.optionSenhas}}>
                <form style={{border: 'double #d69840', marginTop: '-10px', padding: '10px', borderRadius: '10px'}}>
                    <div className="form-group">
                        <label htmlFor="inputSenhaAtual4">Senha atual</label>
                        <input type="password" className="form-control" id="inputSenhaAtual4"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputSenhaNova">Nova Senha</label>
                        <input type="password" className="form-control" id="inputSenhaNova"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputConfirmNovaSenha">Nome de usuário</label>
                        <input type="password" className="form-control" id="inputConfirmNovaSenha"/>
                    </div>
                    <button type="submit" className="btn btn-sunny btn-sm">Alterar</button>
                    <button type="reset" className="btn btn-secundary btn-sm" onClick={this.Fechar.bind(this)}>Fechar</button>
                </form>
            </div>
        );
    }
}