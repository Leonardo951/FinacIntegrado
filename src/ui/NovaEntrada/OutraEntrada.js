import React, { Component } from 'react';

export default class OutraEntrada extends Component {

    CancelarOutra(e){
        e.preventDefault();
        this.props.InserirOutra();
    }

    SalvaOutra(e){
        e.preventDefault();
        this.props.InserirOutra();
    }

    render() {

        return (
            <div className="container" style={{display: this.props.NewOutra}}>
                <form style={{background: '#F5F5DC', padding: '10px 20px 40px 15px', borderRadius: '10px'}}>
                    <h4 style={{fontFamily: 'Tahoma, Geneva, sans-serif', fontWeight: 'bold'}}>NOVA ENTRADA</h4>
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
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <div className="pull-right">
                                <button type="submit" className="btn btn-danger  btn-sm" onClick={this.CancelarOutra.bind(this)}>Cancelar</button>
                                <button type="submit" className="btn btn-success  btn-sm" onSubmit={this.SalvaOutra.bind(this)}>Salvar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}