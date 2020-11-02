import React from 'react';
export default function Member(props) {
    return (
        <div className="team-member mb-30">
            <div className="team-thumb img-full">
                <img src={props.member.image} alt="" />
                <div className="team-social">
                    <a href="javaScript:void(0)"><i className="fa fa-facebook"></i></a>
                    <a href="javaScript:void(0)"><i className="fa fa-twitter"></i></a>
                    <a href="javaScript:void(0)"><i className="fa fa-linkedin"></i></a>
                    <a href="javaScript:void(0)"><i className="fa fa-google-plus"></i></a>
                </div>
            </div>
            <div className="team-content text-center">
                <h3>{props.member.name}</h3>
                <h6>{props.member.designation}</h6>
                <p>
                    {props.member.about}
                </p>
            </div>
        </div>
    )
}