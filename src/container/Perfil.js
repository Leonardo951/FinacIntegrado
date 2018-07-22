import React, { Component } from 'react';

import Profile from '../ui/Perfil/Profile';
import ModificacaoDados from '../ui/Perfil/ModificacaoDados';
import AlteracaoSenha from '../ui/Perfil/AlteracaoSenha';
import Metas from '../ui/Perfil/Metas';
import ExcluirConta from '../ui/Perfil/ExcluirConta';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            optionDados: 'none',
            optionSenhas: 'none',
            optionMetas: 'none',
            optionExcluirConta: 'none',
            widthImg: "180px",
            heightImg: "180px",
            tamNome: '30px',
            btnVerde: "btn btn-fresh text-uppercase btn-sm",
            btnAzul: "btn btn-sky text-uppercase btn-sm",
            btnRed: "btn btn-hot text-uppercase btn-sm",
            btnLaranja: "btn btn-sunny text-uppercase btn-sm",
            itemAtivo: false,
        };
    }

    AlterarDados() {
        if(this.state.optionDados === 'block' && this.state.itemAtivo) {
            this.setState ({
                optionDados: 'none',
                btnVerde: "btn btn-fresh text-uppercase btn-sm",
                btnRed: "btn btn-hot text-uppercase btn-sm",
                btnLaranja: "btn btn-sunny text-uppercase btn-sm",
                itemAtivo: false,
                widthImg: "180px",
                heightImg: "180px",
                tamNome: '30px',
            });
        }else if(!this.state.itemAtivo){
            this.setState ({
                optionDados: 'block',
                btnVerde: "btn btn-default text-uppercase btn-sm",
                btnLaranja: "btn btn-default text-uppercase btn-sm",
                btnRed: "btn btn-default text-uppercase btn-sm",
                itemAtivo: true,
                widthImg: "130px",
                heightImg: "130px",
                tamNome: '20px',
            });
        }
    }

    AlterarMetas() {
        if(this.state.optionMetas === 'block' && this.state.itemAtivo) {
            this.setState ({
                optionMetas: 'none',
                btnAzul: "btn btn-sky text-uppercase btn-sm",
                btnRed: "btn btn-hot text-uppercase btn-sm",
                btnLaranja: "btn btn-sunny text-uppercase btn-sm",
                itemAtivo: false,
                widthImg: "180px",
                heightImg: "180px",
                tamNome: '30px',
            });
        }else if(!this.state.itemAtivo){
            this.setState ({
                optionMetas: 'block',
                btnAzul: "btn btn-default text-uppercase btn-sm",
                btnLaranja: "btn btn-default text-uppercase btn-sm",
                btnRed: "btn btn-default text-uppercase btn-sm",
                itemAtivo: true,
                widthImg: "130px",
                heightImg: "130px",
                tamNome: '20px',
            });
        }
    }

    ModificaSenha(){
        if(this.state.optionSenhas === 'block' && this.state.itemAtivo) {
            this.setState ({
                optionSenhas: 'none',
                btnVerde: "btn btn-fresh text-uppercase btn-sm",
                btnRed: "btn btn-hot text-uppercase btn-sm",
                btnAzul: "btn btn-sky text-uppercase btn-sm",
                itemAtivo: false,
                widthImg: "180px",
                heightImg: "180px",
                tamNome: '30px',
            });
        }else if(!this.state.itemAtivo){
            this.setState ({
                optionSenhas: 'block',
                btnVerde: "btn btn-default text-uppercase btn-sm",
                btnAzul: "btn btn-default text-uppercase btn-sm",
                btnRed: "btn btn-default text-uppercase btn-sm",
                itemAtivo: true,
                widthImg: "130px",
                heightImg: "130px",
                tamNome: '20px',
            });
        }
    }

    ExcluirConta() {
        if(this.state.optionExcluirConta === 'block' && this.state.itemAtivo) {
            this.setState ({
                optionExcluirConta: 'none',
                btnVerde: "btn btn-fresh text-uppercase btn-sm",
                btnAzul: "btn btn-sky text-uppercase btn-sm",
                btnLaranja: "btn btn-sunny text-uppercase btn-sm",
                itemAtivo: false,
                widthImg: "180px",
                heightImg: "180px",
                tamNome: '30px',
            });
        }else if(!this.state.itemAtivo){
            this.setState ({
                optionExcluirConta: 'block',
                btnVerde: "btn btn-default text-uppercase btn-sm",
                btnLaranja: "btn btn-default text-uppercase btn-sm",
                btnAzul: "btn btn-default text-uppercase btn-sm",
                itemAtivo: true,
                widthImg: "130px",
                heightImg: "130px",
                tamNome: '20px',
            });
        }
    }

    NomeDoUsuario = {
        usuario: 'Paul: ET',
        FotoProfile: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbezqZpEuwGSvitKy3wrwnth5kysKdRqBW54cAszm_wiutku3R"
    };

    render(){
        return (
            <div>
                <Profile {...this.NomeDoUsuario} altDados={this.AlterarDados.bind(this)}
                         altSenha={this.ModificaSenha.bind(this)}
                         altMeta={this.AlterarMetas.bind(this)}
                         ExcluirConta={this.ExcluirConta.bind(this)}
                         widthImg={this.state.widthImg}
                         heigthImg={this.state.heightImg}
                         tamNome={this.state.tamNome}
                         btnAzul={this.state.btnAzul}
                         btnLaranja={this.state.btnLaranja}
                         btnRed={this.state.btnRed}
                         btnVerde={this.state.btnVerde}/>

                <ModificacaoDados optionDados={this.state.optionDados}
                                  altDados={this.AlterarDados.bind(this)}/>
                <AlteracaoSenha optionSenhas={this.state.optionSenhas}
                                altSenha={this.ModificaSenha.bind(this)}/>
                <Metas optionMetas={this.state.optionMetas}
                       altMeta={this.AlterarMetas.bind(this)}/>
                <ExcluirConta ExcluirConta={this.state.optionExcluirConta}
                              FuncaoExcluirConta={this.ExcluirConta.bind(this)}/>

                <br/><br/>
            </div>
        );
    }
}