import React, { Component } from 'react';

export default class EmpOutro extends Component {

    render() {

        return (
            <div style={{display: this.props.optionOutro}}>
                <div className="form-group col-md-6">
                    <label htmlFor="inlineFormInputValor2">Valor</label>
                    <input type="text" className="form-control" id="inlineFormInputValor2"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inlineFormInputGroupDate2">Data</label>
                    <input type="text" className="form-control" id="inlineFormInputGroupDate2"/>
                </div>
                <div className="form-group">
                    <label htmlFor="infoEmp">Informação (opcional)</label>
                    <textarea className="form-control" id="infoEmp" rows="3" maxLength='100'/>
                </div>
            </div>
        );
    }
}