import React, { Component } from 'react';

export default class ModificacaoDados extends Component {

    Fechar(e){
        e.preventDefault();
        this.props.altDados();
    }

    ValidaImg(e){
        let ext = e.target.value.substring(e.target.value.lastIndexOf('.') + 1);

        if(ext === "JPEG" || ext === "JPG" || ext === "PNG" || ext === "jpeg" || ext === "jpg" || ext === "png"){
            return true;
        }else{
            e.target.value = '';
        }
    }

    render() {
        return (
        <div className='container' style={{display: this.props.optionDados}}>
            <form style={{border: 'double #0a97b9', marginTop: '-10px', padding: '10px', borderRadius: '10px'}}>
                <div className="form-group">
                    <label htmlFor="inputNome4">Nome</label>
                    <input type="text" className="form-control" id="inputNome4"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputMail">E-mail</label>
                    <input type="email" className="form-control" id="inputMail"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputUser">Nome de usuário</label>
                    <input type="text" className="form-control" id="inputUser"/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputDate">Data de Nascimento</label>
                        <input type="text" className="form-control" id="inputDate"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputSexo">Sexo</label>
                        <select id="inputSexo" className="form-control">
                            <option defaultValue='selecione'>Selecione...</option>
                            <option>Feminino</option>
                            <option>Masculino</option>
                            <option>Outros</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="FormControlFile1">Foto de perfil</label>
                        <input type="file" className="form-control-file" id="FormControlFile1" accept="image/png, image/jpeg" onChange={this.ValidaImg.bind(this)}/>
                    </div>
                    <br/>
                </div>
                <button type="submit" className="btn btn-primary btn-sm">Salvar</button>
                <button type="reset" className="btn btn-secundary btn-sm" onClick={this.Fechar.bind(this)}>Fechar</button>
            </form>
        </div>
        );
    }
}