import React, { Component } from 'react';

import HomeCard from '../ui/HomeCard';

export default class Dashboard extends Component {

    homeCardPositivo = {
        img: "data:image/png;base64,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",
        titleSection: 'Positivos',
        info1: 'Valor na carteira',
        description1: 'Veja quanto você tem hoje',
        info2: 'Valor Investido',
        description2: 'Nível de investimento',
        info3: 'Economia do mês',
        description3: 'Nível de economia em relação ao mês anterior',
        info4: 'Sonhos e metas',
        description4: 'Acompanhamento do nível de proximidade com suas metas'
    };

    homeCardNegativos = {
        img: "https://pbs.twimg.com/profile_images/1576958168/icon_400x400.png",
        titleSection: 'Negativos',
        info1: 'Maiores gastos',
        description1: 'O que mais te fez gastar neste mês?',
        info2: 'Contas principais',
        description2: 'Como está o pagamento de suas contas',
        info3: 'Empréstimos',
        description3: 'Verifique quanto você deve e quanto te devem',
        info4: 'Cartões e cheque especial',
        description4: 'Acompanhe os gastos de seu cartão'
    };

    render() {
       return (
           <div>
                <HomeCard{...this.homeCardPositivo}/>
                <HomeCard{...this.homeCardNegativos}/>
           </div>
       );
    }
}
