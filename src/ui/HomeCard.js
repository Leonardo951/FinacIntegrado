import React from 'react';

import './ui.css';

const HomeCard = (props)=> {

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">
                        <img
                            src={props.img}
                            className="avatar-xs"/>
                        {props.titleSection}
                        <small>
                            <h5 className="pull-right">
                                Vous souhaitez avoir accès à toutes les mises à jour les plus récentes ?
                                Abonnez-vous maintenant.
                                <a href="#" className="btn btn-danger btn-xs"><i className="fa fa-youtube-play" aria-hidden="true"></i> S'abonner</a>
                            </h5>
                        </small>
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 portfolio-item">
                    <a href="#">
                        <img className="img-responsive" src="http://placehold.it/750x450" alt=""/>
                        <h4>{props.info1}</h4>
                    </a>
                    <a href="#"><h6>{props.description1}</h6></a>
                    <p>
                        61 286 vues il y a 1 heure
                    </p>
                </div>
                <div className="col-md-3 portfolio-item">
                    <a href="#">
                        <img className="img-responsive" src="http://placehold.it/750x450" alt=""/>
                        <h4>{props.info2}</h4>
                    </a>
                    <a href="#"><h6>{props.description2}</h6></a>
                    <p>
                        61 286 vues il y a 1 heure
                    </p>
                </div>
                <div className="col-md-3 portfolio-item">
                    <a href="#">
                        <img className="img-responsive" src="http://placehold.it/750x450" alt=""/>
                        <h4>{props.info3}</h4>
                    </a>
                    <a href="#"><h6>{props.description3}</h6></a>
                    <p>
                        61 286 vues il y a 1 heure
                    </p>
                </div>
                <div className="col-md-3 portfolio-item">
                    <a href="#">
                        <img className="img-responsive" src="http://placehold.it/750x450" alt=""/>
                        <h4>{props.info4}</h4>
                    </a>
                    <a href="#"><h6>{props.description4}</h6></a>
                    <p>
                        61 286 vues il y a 1 heure
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;