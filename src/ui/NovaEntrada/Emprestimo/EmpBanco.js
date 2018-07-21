import React, { Component } from 'react';

export default class EmpBanco extends Component {

    constructor(){
        super();
        this.state = ({
            PorcDinh: '%',
        })
    }

    OpcaoTaxa(e){
        let valor = e.target.value;
        this.setState({
            PorcDinh: valor,
        })}

    render() {

        return (
            <div style={{display: this.props.optionBanco}}>
                <div className="form-group col-md-6">
                    <label htmlFor="inlineFormInputValor2">Valor</label>
                    <input type="text" className="form-control" id="inlineFormInputValor2"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inlineFormInputGroupDate2">Data</label>
                    <input type="text" className="form-control" id="inlineFormInputGroupDate2"/>
                </div>
                <div id="optionTaxas">
                    <div className="form-group col-md-6">
                        <label htmlFor="jurosEmp">Calculo do juros</label>
                        <select id="jurosEmp" name="jurosEmp" className="form-control" onChange={this.OpcaoTaxa.bind(this)}>
                            <option value='%' selected>Taxa de Juros (% ao mês)</option>
                            <option value='%'>Taxa de Juros (% ao ano)</option>
                            <option value='R$'>Valor final</option>
                            <option value='R$'>Valor do Juros</option>
                        </select>
                    </div>
                    <div id="optionTaxaMes">
                        <div className="form-group col-md-6">
                            <label htmlFor="taxaMes">{this.state.PorcDinh}</label>
                            <input type="text" className="form-control" id="taxaMes"/>
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="valorTot">Valor Total</label>
                        <input type="text" className="form-control" id="Valortot" disabled/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="txjuros">Taxa Juros mês (%)</label>
                        <input type="text" className="form-control" id="txjuros" disabled/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="qntdMes">Qntd. meses</label>
                        <input type="number" min="1" id="qntdMes" className="form-control"/>
                    </div>
                </div>
            </div>
        );
    }
}