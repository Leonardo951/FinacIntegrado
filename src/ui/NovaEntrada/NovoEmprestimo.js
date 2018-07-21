import React, { Component } from 'react';

import EmpBanco from './Emprestimo/EmpBanco';
import EmpParente from './Emprestimo/EmpParente';
import EmpOutro from './Emprestimo/EmpOutro';

export default class NovoEmprestimo extends Component {

    constructor(){
        super();
        this.state = {
            optionBanco: 'none',
            optionParente: 'none',
            optionOutro: 'none',
        }
    }

    OpcaoFonte(e){
        if(e.target.value == 'banco'){
            this.setState({
                optionParente: 'none',
                optionBanco: 'block',
                optionOutro: 'none',
            })
        }else if(e.target.value == 'parente'){
            this.setState({
                optionBanco: 'none',
                optionParente: 'block',
                optionOutro: 'none',
            })
        }else if(e.target.value == 'outro'){
            this.setState({
                optionBanco: 'none',
                optionParente: 'none',
                optionOutro: 'block',
            })
        }else{
            this.setState({
                optionBanco: 'none',
                optionParente: 'none',
                optionOutro: 'none',
            })
        }

    }

    CancelarEmprestimo(e){
        e.preventDefault();
        this.props.CancelaEmprestimo();
    }

    SalvaEmprestimo(e){
        e.preventDefault();
        this.props.CancelaEmprestimo();
    }

    render() {

        return (
            <div className="container" style={{display: this.props.NewEmprestimo}}>
                <form style={{background: '#F5F5DC', padding: '10px 20px 40px 15px', borderRadius: '10px'}}>
                    <h4 style={{fontFamily: 'Tahoma, Geneva, sans-serif', fontWeight: 'bold'}}>NOVO EMPRÉSTIMO</h4>
                    <div className="form-group row">
                        <label htmlFor="fonteEmp" className="col-sm-2 col-form-label">Fonte </label>
                        <div className="col-sm-10">
                            <select id="fonteEmp" name="fonte" className="form-control" onChange={this.OpcaoFonte.bind(this)}>
                                <option selected>Selecione...</option>
                                <option value="banco">Banco (pessoal)</option>
                                <option value="banco">Banco (consignado)</option>
                                <option value="parente">Amigos ou Parente</option>
                                <option value="outro">Outros</option>
                            </select>
                        </div>
                    </div>
                    <EmpParente optionParente={this.state.optionParente}/>
                    <EmpBanco optionBanco={this.state.optionBanco}/>
                    <EmpOutro optionOutro={this.state.optionOutro}/>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <div className="pull-right">
                                <button type="submit" className="btn btn-danger" onClick={this.CancelarEmprestimo.bind(this)}>Cancelar</button>
                                <button type="submit" className="btn btn-success" onSubmit={this.SalvaEmprestimo.bind(this)}>Salvar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}