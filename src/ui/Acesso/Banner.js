import React, { Component } from 'react';

export default class Banner extends Component {

    constructor(){
        super();
        this.state ={
            Imagens: [
                // {
                //     img: 'https://static.pexels.com/photos/33972/pexels-photo.jpg',
                //     alt: 'First slide'
                // },
                {
                    img: 'https://s2.glbimg.com/AGczb_51RqU664FN86hexYKABAI=/0x600/s.glbimg.com/po/tt2/f/original/2014/08/12/mobills2.png',
                    alt: 'Suas finanças em qualquer lugar'
                },
                // {
                //     img: 'http://blog.valecred.com.br/wp-content/uploads/2017/02/68679-conheca-as-principais-tendencias-economicas-para-2017.jpg',
                //     alt: 'Second slide'
                // },
                {
                    img: 'https://s2.glbimg.com/AzsK0tbIXQuyKGgyBJaj8YecVmo=/0x600/s.glbimg.com/po/tt2/f/original/2014/08/12/mobills1.png',
                    alt: 'Seus dados sincronizados na nuvem'
                },
                {
                    img: 'https://blog.pluga.co/uploads/2016/07/ferramentas-de-controle-financeiro-pluga.jpg',
                    alt: 'Relatórios'
                }
            ]
        }
    }


    render(){
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{maxWidth: '35em', maxHeight: '22em', top: '2.5em'}}>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
                </ol>
                <div className="carousel-inner">
                    {
                        this.state.Imagens.map((i, index) => {
                            if(index === 0) {
                                return (
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={i.img} alt={i.alt}/>
                                    </div>
                                )
                            }else{
                                return (
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={i.img} alt={i.alt}/>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                   data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                   data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="sr-only">Próxima</span>
                </a>
            </div>
        );
    }
}

;