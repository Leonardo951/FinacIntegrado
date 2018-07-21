import React, { Component } from 'react';

import MenuPrincipal from './container/MenuPrincipal';

import './App.css';

class App extends Component {
    render() {
        const logo = 'Finac';
        return (
            <div>
                <MenuPrincipal logo={logo}/>
                {this.props.children}
            </div>
    );
    }
    }

    export default App;
