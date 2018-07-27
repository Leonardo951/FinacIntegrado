import React, { Component } from 'react';

export default class CartaoCredito extends Component {

    constructor(){
        super();
        this.state = ({
            novo: false,
            escolhido: true,
            novoCartao: 'none',
            cartaoAtual: 'block',
            AltNovo: 'ALTERAR',
            textButton: 'Salvar'
        })
    }

    OpcaoCartao(e) {
        // Trazer os dados para coocar nos campos e depois mostrar
        if(this.state.escolhido || e.target.value !== 'selecione'){
            this.setState({
                escolhido: false
            })
        }else{
            this.setState({
                escolhido: true
            })
        }
    }

    NovoCartao(){
        if(this.state.novo){
            this.setState({
                novo: false,
                novoCartao: 'none',
                cartaoAtual: 'block',
                AltNovo: 'ALTERAR',
                textButton: 'Salvar'
            })
        }else{
            this.setState({
                novo: true,
                cartaoAtual: 'none',
                novoCartao: 'block',
                AltNovo: 'NOVO',
                textButton: 'Inserir'
            })
        }
    }

    render() {

        return (
            <div className="modal fade" id="cartaocredito" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 style={{fontWeight: 'bold'}}>{this.state.AltNovo} CARTÃO</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="SelectCartao">Selecione um cartão</label>
                                    <div className="col-auto my-2 pull-right" style={{marginBottom: '-20px'}}>
                                        <div className="custom-control custom-checkbox mr-sm-4">
                                            <input type="checkbox" className="custom-control-input" id="customRadioAutosizing"
                                                   onClick={this.NovoCartao.bind(this)} />
                                            <label className="custom-control-label" htmlFor="customRadioAutosizing"><small>Desejo inserir um novo</small></label>
                                        </div>
                                    </div>
                                    <select id="SelectCartao" className="form-control" disabled={this.state.novo} onChange={this.OpcaoCartao.bind(this)}>
                                        <option defaultValue='selecione'>Selecione...</option>
                                        <option value="bb">BB (visa)</option>
                                        <option value="nubank">Nubank</option>
                                        <option value="caixa">CAIXA</option>
                                    </select>
                                </div>
                                <div className="form-group" style={{display: this.state.cartaoAtual}}>
                                    <label htmlFor="limite">Alterar o limite?</label>
                                    <input type="text" className="form-control" id="limite" placeholder="Selecione um cartão" disabled={this.state.escolhido} />
                                </div>
                                <div style={{display: this.state.novoCartao}}>
                                    <div className="form-group">
                                        <label htmlFor="novoNome">Dê um nome ao cartão</label>
                                        <input type="text" className="form-control" id="novoNome"
                                               placeholder="Defina um nome para este cartão"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="novoLimite">Limite (R$)</label>
                                        <input type="text" className="form-control" id="novoLimite"
                                               placeholder="Somente números"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="reset" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="submit" className="btn btn-primary">{this.state.textButton}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}