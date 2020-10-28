import React from 'react';
import { Link } from 'react-router-dom';
import '../breadcrumb/breadcrumb.css';
export default function Breadcrumb(props) {
    return (
    
    <div className="breadcrumb-area" style={{backgroundImage:'url("assets/images/banner-breadcrumb-banner.jpg")'}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb-wrap text-center">
                            <nav aria-label="breadcrumb"><h2>{props.page_title}</h2>
                                <ul className="breadcrumb">
                                    {
                                        props.items && props.items.length ?
                                            props.items.map((item, index) => {
                                                return (
                                                    (index < props.items.length - 1)
                                                        ?
                                                        <li key={index} className="breadcrumb-item"><Link to={item.path}>{item.name}</Link></li>
                                                        :
                                                        <li key={index} className="breadcrumb-item active" aria-current="page">{item.name}</li>
                                                )
                                            })
                                            :
                                            null
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
