import React, { Component } from 'react';

export default class OutraEntrada extends Component {

    render() {

        return (

            <div className="modal fade" id="outraentrada" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 style={{fontWeight: 'bold'}}>OUTRA FORMA DE ENTRADA</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" htmlFor="inlineFormInputValor">Valor</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inlineFormInputValor"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" htmlFor="inlineFormInputGroupDate">Data</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inlineFormInputGroupDate"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" htmlFor="infoOut">Observação <small style={{color: '#A9A9A9'}}>(opcional)</small></label>
                                    <div className="col-sm-10">
                                        <textarea className="form-control" id="infoOut" rows="3" maxLength='100'/>
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