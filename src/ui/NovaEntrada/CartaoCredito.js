import React, { Component } from 'react';

export default class CartaoCredito extends Component {

    constructor(){
        super();
        this.state = ({
            novo: false,
            escolhido: true,
            novoCartao: 'none',
            cartaoAtual: 'block',
            AltNovo: 'ALTERAR'
        })
    }

    CancelarCartao(e){
        e.preventDefault();
        this.props.CancelaCartao();
    }

    SalvaCartao(e){
        e.preventDefault();
        this.props.CancelaCartao();
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
                AltNovo: 'ALTERAR'
            })
        }else{
            this.setState({
                novo: true,
                cartaoAtual: 'none',
                novoCartao: 'block',
                AltNovo: 'NOVO',
            })
        }
    }

    render() {

        return (
            <div className="container" style={{display: this.props.NewCartao}}>
                <form style={{background: '#F5F5DC', padding: '10px 20px 40px 15px', borderRadius: '10px'}}>
                    <h4 style={{fontFamily: 'Tahoma, Geneva, sans-serif', fontWeight: 'bold'}}>{this.state.AltNovo} CARTAO</h4>
                    <div className="col-auto my-3 pull-right">
                        <div className="custom-control custom-checkbox mr-sm-5">
                            <input type="checkbox" className="custom-control-input" id="customRadioAutosizing"
                                   onClick={this.NovoCartao.bind(this)} />
                            <label className="custom-control-label" htmlFor="customRadioAutosizing">Desejo inserir um novo</label>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="fonteEmp" className="col-sm-3 col-form-label">Selecione um cartão </label>
                        <div className="col-sm-8">
                            <select id="fonteEmp" className="form-control" disabled={this.state.novo} onChange={this.OpcaoCartao.bind(this)}>
                                <option defaultValue='selecione'>Selecione...</option>
                                <option value="bb">BB (visa)</option>
                                <option value="nubank">Nubank</option>
                                <option value="caixa">CAIXA</option>
                            </select>
                        </div>
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
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <div className="pull-right">
                                <button type="submit" className="btn btn-danger btn-sm" onClick={this.CancelarCartao.bind(this)}>Cancelar</button>
                                <button type="submit" className="btn btn-success btn-sm" onSubmit={this.SalvaCartao.bind(this)}>Salvar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}