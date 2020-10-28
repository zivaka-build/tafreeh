import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import AccountDetails from './account.details.tab';
import ChangePassword from './change.password';
import OrderTab from './order.tab';
import "./profile.css";
class Profile extends React.Component {
    constructor(props)
    {
        super(props);
    }
    baire=()=>{
        this.props.history.push('/');
    }
    render() {
        let tabs=[
            
            {
                name:"Orders",icon:"fa fa-cart-arrow-down",path:'#orders'
            },
            
            {
                name:"Account Details",icon:"fa fa-user",path:"#account-info"
            },
            {
                name:"Change Password",path:"#change-password",icon:"fa fa-lock"
            },
        ]
        return (
            <main>
                <Breadcrumb
                    page_title="My Profile"
                    items={[{ name: 'home', path: '/' }, { name: 'my account' }]}
                />
                <div className="my-account-wrapper pt-60 pb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* <!-- My Account Page Start --> */}
                                <div className="myaccount-page-wrapper">
                                    {/* <!-- My Account Tab Menu Start --> */}
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4">
                                            <div className="myaccount-tab-menu nav" role="tablist">
                                                {
                                                    tabs && tabs.length?
                                                    tabs.map((tab,index)=>{
                                                        return(
                                                            <a key={index} href={tab.path} className={index===0 ? "active":null} data-toggle="tab"><i className={tab.icon}></i>
                                                                {tab.name}
                                                            </a>
                                                        )
                                                        
                                                    })
                                                    :
                                                    null
                                                }
                                                <Link to="/login-register"><i className="fa fa-sign-out"></i> Logout</Link>
                                            </div>
                                        </div>
                                        {/* <!-- My Account Tab Menu End --> */}

                                        {/* <!-- My Account Tab Content Start --> */}
                                        <div className="col-lg-9 col-md-8">
                                            <div className="tab-content" id="myaccountContent">
                                                
                                                {/* <!-- Order Tab Component Start --> */}
                                                <OrderTab/>
                                                {/* <!-- Order Tab Component End --> */}

                                                {/* <!-- account details Tab Content Start --> */}
                                                <AccountDetails submitted={()=>this.baire}/>
                                                {/* <!-- account details Tab Content End --> */}

                                                {/* change password tab */}
                                                <ChangePassword/>
                                                {/* change password tab ends */}
                                            </div>
                                        </div>
                                        {/* <!-- My Account Tab Content End --> */}
                                    </div>
                                </div>
                                {/* <!-- My Account Page End --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )

    }
}
export default Profile;