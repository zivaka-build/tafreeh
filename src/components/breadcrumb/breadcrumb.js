import React from 'react';
import '../breadcrumb/breadcrumb.css';
export default function Breadcrumb(props) {
    return (
        <div className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb-wrap text-center">
                            <nav aria-label="breadcrumb"><h2>About</h2>
                                <ul className="breadcrumb">
                                    {
                                        props.items && props.items.length ?
                                            props.items.map((item, index) => {
                                                return (
                                                    (index < props.items.length - 1)
                                                        ?
                                                        <li key={index} className="breadcrumb-item"><a href={item.path}>{item.name}</a></li>
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
