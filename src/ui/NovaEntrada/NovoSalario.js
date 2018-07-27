import React, { Component } from 'react';

export default class NovoSalario extends Component {

    render() {

        return (
            <div className="modal fade" id="novosalario" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 style={{fontWeight: 'bold'}}>INSERIR SALÁRIO</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
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