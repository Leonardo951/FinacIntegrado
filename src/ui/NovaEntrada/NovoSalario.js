import React, { Component } from 'react';

export default class NovoSalario extends Component {

    CancelarSalario(e){
        e.preventDefault();
        this.props.CancelaSalario();
    }

    SalvaSalario(e){
        e.preventDefault();
        this.props.CancelaSalario();
    }

    render() {

        return (
            <div className="container" style={{display: this.props.NewSalario}}>
                <form style={{background: '#F5F5DC', padding: '10px 20px 40px 15px', borderRadius: '10px'}}>
                    <h4 style={{fontFamily: 'Tahoma, Geneva, sans-serif', fontWeight: 'bold'}}>INSERIR SALÁRIO</h4>
                    <div className="form-group row">
                        <label htmlFor="fonteSal" className="col-sm-2 col-form-label">Fonte </label>
                        <div className="col-sm-10">
                            <select id="fonteSal" name="fonte" className="form-control">
                                <option defaultValue='selecione'>Selecione...</option>
                                <option>Emprego 2</option>
                                <option>Frella</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="inlineFormInputValor5">Valor</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inlineFormInputValor5"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="inlineFormInputGroupDate5">Data</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inlineFormInputGroupDate5"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <div className="pull-right">
                                <button type="submit" className="btn btn-danger  btn-sm" onClick={this.CancelarSalario.bind(this)}>Cancelar</button>
                                <button type="submit" className="btn btn-success  btn-sm" onSubmit={this.SalvaSalario.bind(this)}>Salvar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}