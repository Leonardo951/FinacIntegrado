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
        if(e.target.value === 'banco'){
            this.setState({
                optionParente: 'none',
                optionBanco: 'block',
                optionOutro: 'none',
            })
        }else if(e.target.value === 'parente'){
            this.setState({
                optionBanco: 'none',
                optionParente: 'block',
                optionOutro: 'none',
            })
        }else if(e.target.value === 'outro'){
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

    render() {

        return (
            <div className="modal fade" id="novoemprestimo" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 style={{fontWeight: 'bold'}}>NOVO EMPRÉSTIMO</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group row">
                                    <label htmlFor="fonteEmp" className="col-sm-2 col-form-label">Fonte </label>
                                    <div className="col-sm-10">
                                        <select id="fonteEmp" name="fonte" className="form-control" onChange={this.OpcaoFonte.bind(this)}>
                                            <option defaultValue='selecione'>Selecione...</option>
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
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="reset" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="submit" className="btn btn-primary">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}