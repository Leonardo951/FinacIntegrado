import React, { Component } from 'react';
import Select from 'react-select';

export default class NovaCompra extends Component {

    constructor(){
        super();
        this.state = {
            selectOption: '',
            btnNome: 'Esconder',
            btnAtivo: true,
            btnClass: 'btn btn-sm',
            mostraCampos: 'block',
            MinhasCarteiras: [
                { value: 'carteira', forma: 'Minha carteira' },
                { value: 'cartao1', forma: 'Nubank' },
                { value: 'conta', forma: 'Minha conta corrente' },
                { value: 'tesouro', forma: 'Tesouro direto' },
            ],
            subCat: 'none',
            placeholderCat: '',
            Selected: '',
            subAuto: 'none',
            subAutoSelect: '',
        }
    }

    MostrarEsconder(e){
        e.preventDefault();
        this.state.btnAtivo ?
            this.setState({
                mostraCampos: 'none',
                btnNome: 'Mostrar',
                btnAtivo: false,
                btnClass: 'btn btn-primary btn-sm',
            })
            :
            this.setState({
                mostraCampos: 'block',
                btnNome: 'Esconder',
                btnAtivo: true,
                btnClass: 'btn btn-sm',
            })
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
        this.setState({
            selectOption: selectedOption.value
        });
        // Não esta modificando o state na mesma hora, so na proxima função, então se quiser rtirar este item do state não haverá problema
        console.log('state: ' + this.state.selectOption);
        this.AddSubCat(selectedOption);
    };

    AddSubAuto(e){
        let valor = e.target.value;
        if(valor !== 'selecione'){
            this.setState({
                subAuto: 'flex',
                subAutoSelect: valor,
            })
        }else{
            this.setState({
                subAuto: 'none',
                subAutoSelect: '',
            })
        }
    };

    AddSubCat(selectedOption){
        if(selectedOption.value === 'automovel'){
            this.setState({
                subCat: 'flex',
                placeholderCat: 'Selecione...',
                Selected: 'automovel'
            })
        }else if(selectedOption.value === 'divida'){
            this.setState({
                subCat: 'flex',
                placeholderCat: 'Selecione sua dívida',
                Selected: 'divida'
            })
        }else{
            this.setState({
                subCat: 'none',
                placeholderCat: 'Selecione...',
                Selected: ''
            })
        }

    }

    render() {

        const { selectedOption } = this.state;

        const options = [
            {
                label: 'Contas', options: [
                    { label: 'Água', value: 'agua' },
                    { label: 'Aluguel', value: 'aluguel' },
                    { label: 'Celular', value: 'celular' },
                    { label: 'Combo (Internet+Tv+Tel.)', value: 'combo' },
                    { label: 'Condomínio', value: 'condominio' },
                    { label: 'Eletricidade', value: 'eletricidade' },
                    { label: 'Gás', value: 'gas' },
                    { label: 'Internet', value: 'internet' },
                    { label: 'Telefone', value: 'tel' },
                    { label: 'Tv a cabo', value: 'tv' }
                ]
            },
            {
                label: 'Consumo', options: [
                    { label: 'Lanchonetes', value: 'lanchonetes' },
                    { label: 'Restaurantes', value: 'restaurantes' },
                    { label: 'Roupas', value: 'roupas' },
                    { label: 'Supermercado', value: 'supermercado' },
                    { label: 'Padaria', value: 'padaria' },
                ]
            },
            {
                label: 'Educação', options: [
                    { label: 'Curso', value: 'curso' },
                    { label: 'Escola/ Universidade', value: 'escola' },
                    { label: 'Provas/ Concurso', value: 'prova' },
                ]
            },
            {
                label: 'Domésticos', options: [
                    { label: 'Eletrodomésticos', value: 'eletrodomesticos' },
                    { label: 'Faxineira', value: 'faxineira' },
                    { label: 'IPTU', value: 'iptu' },
                    { label: 'Lavanderia', value: 'lavanderia' },
                    { label: 'Manutenção da casa', value: 'manutencao' },
                    { label: 'Reforma', value: 'reforma' },
                ]
            },
            {
                label: 'Lazer', options: [
                    { label: 'Bares/ Baladas', value: 'balada' },
                    { label: 'Cinema', value: 'cinema' },
                    { label: 'Férias', value: 'ferias' },
                    { label: 'Shows/ Exposições', value: 'show' },
                    { label: 'Passeios', value: 'passeios' },
                ]
            },
            {
                label: 'Outros gastos', options: [
                    { label: 'Cabeleireiro', value: 'cabeleireiro' },
                    { label: 'Gastos avulsos', value: 'avulsos' },
                    { label: 'Livros', value: 'livros' },
                    { label: 'Presentes/ Comemorações', value: 'presentes' },
                    { label: 'Pagamento de dívida', value: 'divida' },
                ]
            },
            {
                label: 'Saúde', options: [
                    { label: 'Academia', value: 'academia' },
                    { label: 'Cirurgias', value: 'cirurgias' },
                    { label: 'Consultas', value: 'consultar' },
                    { label: 'Dentista', value: 'dentista' },
                    { label: 'Farmácia', value: 'farmacia' },
                    { label: 'Óculos/ Lentes', value: 'oculos' },
                    { label: 'Plano de saúde', value: 'PlanSaude' },
                ]
            },
            {
                label: 'Transporte', options: [
                    { label: 'Automóvel', value: 'automovel' },
                    { label: 'Estacionamento', value: 'estacionamento' },
                    { label: 'Ônibus', value: 'onibus' },
                    { label: 'Táxi/ Uber', value: 'taxi' },
                ]
            }
        ];

        const automoveis = [
            {automovel: 'carro1'},
            {automovel: 'carro2'},
            {automovel: 'moto'},
        ];

        const dividas = [
            {divida: 'Quitar o cheque especial'},
            {divida: 'Cartão banco do Brasil'},
        ];

        const subAuto = [
            { label: 'Combustível', value: 'combustivel' },
            { label: 'IPVA', value: 'ipva' },
            { label: 'Lavagens', value: 'lavagens' },
            { label: 'Oficina', value: 'oficina' },
            { label: 'Seguro', value: 'seguro' },
        ];

        return (
            <div className="container">
                <form style={{background: '#F5F5DC', padding: '10px 20px 40px 15px', borderRadius: '10px'}}>
                    <h4 style={{fontFamily: 'Tahoma, Geneva, sans-serif', fontWeight: 'bold'}}>REGISTRAR GASTO
                        <div className="pull-right">
                            <button type="button" className={this.state.btnClass} onClick={this.MostrarEsconder.bind(this)}>{this.state.btnNome}</button>
                        </div>
                    </h4>
                    <div style={{display: this.state.mostraCampos}}>
                        <br/>
                        <div className="form-group row">
                            <label htmlFor="SelectCartao" className="col-sm-2 col-form-label">Categoria:</label>
                            <div className="col-sm-8">
                                <Select
                                    placeholder='Selecione...'
                                    value={selectedOption}
                                    onChange={this.handleChange}
                                    options={options}
                                />
                            </div>
                        </div>
                        <div className="form-group row" style={{display: this.state.subCat}}>
                            <label htmlFor="SelectOption" className="col-sm-2 col-form-label">Selecione seu automóvel:</label>
                            <div className="col-sm-8">
                                <select id="SelectOption" className="form-control" onChange={this.AddSubAuto.bind(this)}>
                                    <option defaultValue={this.state.placeholderCat}>{this.state.placeholderCat}</option>
                                    {
                                        this.state.Selected === 'automovel' ?
                                            automoveis.map((a, index) => {
                                                return (
                                                    <option key={index} value={a.automovel}>{a.automovel}</option>
                                                );
                                            })
                                        :
                                            dividas.map((d, index) => {
                                                return (
                                                    <option key={index} value={d.divida}>{d.divida}</option>
                                                );
                                            })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="form-group row" style={{display: this.state.subAuto}}>
                            <label htmlFor="SelectsubOption" className="col-sm-2 col-form-label">Sub-categoria:</label>
                            <div className="col-sm-8">
                                <select id="SelectsubOption" className="form-control">
                                    <option defaultValue='selecione'>Selecione...</option>
                                    {
                                        subAuto.map((s, index) => {
                                            return (
                                                <option key={index} value={s.value}>{s.label}</option>
                                            );
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="SelectCartao" className="col-sm-2 col-form-label">Pago com? </label>
                            <div className="col-sm-8">
                                <select id="SelectCartao" className="form-control">
                                    <option defaultValue='selecione'>Selecione...</option>
                                    {
                                        this.state.MinhasCarteiras.map((m, index) => {
                                            return (
                                                <option key={index} value={m.value}>{m.forma}</option>
                                            );
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inlineFormInputValor10" className='col-sm-2 col-form-label'>Valor:</label>
                            <div className='col-sm-8'>
                                <input type="text" className="form-control" id="inlineFormInputValor10"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inlineFormInputGroupDate7" className='col-sm-2 col-form-label'>Data:</label>
                            <div className='col-sm-4'>
                                <input type="text" className="form-control" id="inlineFormInputGroupDate7"/>
                            </div>
                            <div className='col-sm-4'>
                                <input type="checkbox" className="custom-control-input" id="customControlCheck"/>
                                <label className="custom-control-label" htmlFor="customControlCheck"><small>Deseja tornar isso recorrente?</small></label>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inlineFormInputGroupDate7" className='col-sm-2 col-form-label' style={{fontSize: '15px'}}>Próximos pagamentos:</label>
                            <div className='col-sm-4'>
                                <input type="text" className="form-control" id="inlineFormInputGroupDate7"/>
                            </div>
                            {/*<div className='col-sm-4'>*/}
                                {/*<small style={{color: 'red', fontSize: '10px'}}>Você será notificado sempre nesta data informado sobre e solicitando confirmação deste pagamento</small>*/}
                            {/*</div>*/}
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="infoOut">Observação: <small style={{color: '#A9A9A9'}}>(opcional)</small></label>
                            <div className="col-sm-8">
                                <textarea className="form-control" id="infoOut" rows="3" maxLength='100'/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <div className="pull-right">
                                    <button type="reset" className="btn btn-primary btn-sm">Limpar</button>
                                    <button type="submit" className="btn btn-success btn-sm">Salvar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}