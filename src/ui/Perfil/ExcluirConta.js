import React, { Component } from 'react';

export default class ExcluirConta extends Component {

    Fechar(e){
        e.preventDefault();
        this.props.FuncaoExcluirConta();
    }

    render() {
        return (
            <div className='container' style={{display: this.props.ExcluirConta}}>
                <form style={{border: 'double #df6a78', marginTop: '-10px', padding: '10px', borderRadius: '10px'}}>
                    <div className="form-group">
                        <label htmlFor="inputMotivo">Por que está nos deixando?</label>
                        <textarea className="form-control" id="inputMotivo" maxLength='200'/>
                        <br/>
                        <small style={{color: 'red', width: '100%'}}>Importante: Está ação não poderá ser desfeita!</small>
                        <div className='pull-right'>
                            <button type="submit" className="btn btn-danger btn-sm">Excluir conta</button>
                            <button type="reset" className="btn btn-secundary btn-sm" onClick={this.Fechar.bind(this)}>Fechar</button>
                        </div>
                    </div>
                    <br/>
                </form>
            </div>
        );
    }
}