import React, { Component } from 'react';

import NovaCompra from '../ui/Compras/NovaCompra';
import RelCompras from '../ui/Compras/RelCompras';

export default class Compras extends Component {

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <NovaCompra/>
                <div className='container text-center'>
                    <br/><br/>
                    <h4  style={{background: '#EEE8AA', padding: '0.5em', borderRadius: '5px'}}>REGISTRO DE COMPRAS</h4>
                </div>
                <RelCompras/>
            </div>
        );
    }
}