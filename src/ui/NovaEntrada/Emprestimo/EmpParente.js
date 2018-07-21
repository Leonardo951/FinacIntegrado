import React, { Component } from 'react';

export default class EmpParente extends Component {

    constructor(){
        super();
        this.state = ({
            desabilitar: false
        })
    }

    Habilita() {
        if(this.state.desabilitar){
            this.setState({
                desabilitar: false
            })
        }else{
            this.setState({
                desabilitar: true
            })
        }
    }

    render() {

        return (
            <div style={{display: this.props.optionParente}}>
                <div className="form-group col-md-6">
                    <label htmlFor="inlineFormInputValor2">Valor</label>
                    <input type="text" className="form-control" id="inlineFormInputValor2"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inlineFormInputGroupDate2">Data</label>
                    <input type="text" className="form-control" id="inlineFormInputGroupDate2"/>
                </div>
                <div id="optionParente">
                    <div className="form-group col-md-6">
                        <label htmlFor="dataPagar">Data de devolução</label>
                        <div className='input-group date' id='dataPagar'>
                            <input type='text' className="form-control" name="dataPagar" id="dataPag" disabled={this.state.desabilitar}/>
                        </div>
                    </div>
                    <br/><br/><br/>
                    <div className="col-auto my-5">
                        <div className="custom-control custom-checkbox mr-sm-5">
                            <input type="checkbox" className="custom-control-input" id="customControlAutosizing"/>
                            <label className="custom-control-label" htmlFor="customControlAutosizing" onClick={this.Habilita.bind(this)}  style={{marginLeft: '15px'}}>
                                Não há</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}