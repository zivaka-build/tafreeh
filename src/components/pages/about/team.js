import React from 'react';
import Member from './member';
export default function Team(props) {
    let ar = [
        {
            image: 'assets/images/team-team_member_1.jpg',
            name: 'Jonathan Scott',
            designation: 'CEO',
            about: 'Amadea Shop is a very slick and clean e-commerce template with endless possibilities.'
        },
        {
            image: 'assets/images/team-team_member_2.jpg',
            name: 'oliver bastin',
            designation: 'designer',
            about: 'Amadea Shop is a very slick and clean e-commerce template with endless possibilities.'
        },
        {
            image: 'assets/images/team-team_member_3.jpg',
            name: 'Chester Bennington',
            designation: 'developer',
            about: 'Amadea Shop is a very slick and clean e-commerce template with endless possibilities.'
        },
        {
            image: 'assets/images/team-team_member_1.jpg',
            name: 'maria mandy',
            designation: 'marketing officer',
            about: 'Amadea Shop is a very slick and clean e-commerce template with endless possibilities.'
        },
    ];
    return (
        <div className="team-area bg-gray pt-60 pb-20">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {
                            props.title?
                            <div className="section-title text-center">
                                <h2>{props.title}</h2>
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
                <div className="row">
                    {
                        ar.length?ar.map((member,index) => {
                            return (
                                <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                                    <Member 
                                        member={member}
                                    />
                                </div>
                            )
                        })
                        :
                        null
                    }

                </div>
            </div>
        </div>
    )
}