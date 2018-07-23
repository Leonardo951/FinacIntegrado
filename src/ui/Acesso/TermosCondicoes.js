import React, { Component } from 'react';

export default class TermosCondicoes extends Component{

    Aceitar(e) {
        e.preventDefault();
        this.props.aceitar()
    }

    render() {
        return (
            <div className="modal fade" id="t_and_c_m" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Termos e Condições</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <div className="modal-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi,
                                aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi
                                tempore possimus ipsa porro delectus quidem dolorem ad.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi,
                                aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi
                                tempore possimus ipsa porro delectus quidem dolorem ad.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi,
                                aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi
                                tempore possimus ipsa porro delectus quidem dolorem ad.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi,
                                aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi
                                tempore possimus ipsa porro delectus quidem dolorem ad.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi,
                                aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi
                                tempore possimus ipsa porro delectus quidem dolorem ad.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi,
                                aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi
                                tempore possimus ipsa porro delectus quidem dolorem ad.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi,
                                aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi
                                tempore possimus ipsa porro delectus quidem dolorem ad.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal"
                                    onClick={this.Aceitar.bind(this)}>Eu aceito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}