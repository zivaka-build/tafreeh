import React from 'react';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as toastrActions } from 'react-redux-toastr';
import { ACTIONS, SAGA_ACTIONS } from '../../../common/config/actions';
import { STORAGE } from '../../../common/constants/storageConstants';
import Breadcrumb from '../../breadcrumb/breadcrumb';
import AccountDetails from './account.details.tab';
import ChangePassword from './change.password';
import OrderTab from './order.tab';
import "./profile.css";
import { updateUserPassword } from '../../../sagas/auth.saga';
class Profile extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.toastr = bindActionCreators(toastrActions, this.props.dispatch);
    }

    showToaster(type, title, message) {
        this.toastr.add({
            type,
            title,
            position: 'top-left',
            attention: true,
            onAttentionClick: id => { },
            message,
            options: { showCloseButton: true },
            showCloseButton: true,
        });
    }
    updateUser = values => {
        return new Promise((resolve, reject) => {
            this.props.dispatch({
                type: SAGA_ACTIONS.UPDATE_USER,
                payload: {
                    id: this.props.userDetails && this.props.userDetails._id ? this.props.userDetails._id : null,
                    data: values
                },
                callbackSuccess: resp => {
                    this.showToaster('success','Successful',resp.data.message);
                    resolve(resp);
                },
                callbackError: error => {
                    reject(error);
                }
            })
        })
    }

    logout = () => {
        Cookies.remove(STORAGE.AUTH_TOKEN);
        Cookies.remove(STORAGE.CURRENT_USER_EMAIL);
        this.props.dispatch({
            type: ACTIONS.LOGOUT
        });
        this.props.history.push('/login-register');
    }

    updateUserPassword=values=>{
        return new Promise((resolve, reject) => {
            this.props.dispatch({
                type: SAGA_ACTIONS.UPDATE_USER_PASSWORD,
                payload: {
                    id: this.props.userDetails && this.props.userDetails._id ? this.props.userDetails._id : null,
                    data: {
                        oldpassword:values.oldpassword,
                        newpassword:values.newpassword
                    }
                },
                callbackSuccess: resp => {
                    this.showToaster('success','Successful',resp.data.message);
                    resolve(resp);
                },
                callbackError: error => {
                    reject(error);
                }
            })
        })
    }
    render() {
        let tabs = [

            {
                name: "Orders", icon: "fa fa-cart-arrow-down", path: '#orders'
            },

            {
                name: "Account Details", icon: "fa fa-user", path: "#account-info"
            },
            {
                name: "Change Password", path: "#change-password", icon: "fa fa-lock"
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
                                                    tabs && tabs.length ?
                                                        tabs.map((tab, index) => {
                                                            return (
                                                                <a key={index} href={tab.path} className={index === 0 ? "active" : null} data-toggle="tab"><i className={tab.icon}></i>
                                                                    {tab.name}
                                                                </a>
                                                            )

                                                        })
                                                        :
                                                        null
                                                }
                                                <a href="#" onClick={this.logout}><i className="fa fa-sign-out"></i> Logout</a>
                                            </div>
                                        </div>
                                        {/* <!-- My Account Tab Menu End --> */}

                                        {/* <!-- My Account Tab Content Start --> */}
                                        <div className="col-lg-9 col-md-8">
                                            <div className="tab-content" id="myaccountContent">

                                                {/* <!-- Order Tab Component Start --> */}
                                                <OrderTab />
                                                {/* <!-- Order Tab Component End --> */}

                                                {/* <!-- account details Tab Content Start --> */}
                                                <AccountDetails
                                                    user={this.props.userDetails}
                                                    updateUser={this.updateUser}
                                                />
                                                {/* <!-- account details Tab Content End --> */}

                                                {/* change password tab */}
                                                <ChangePassword updatePassword={this.updateUserPassword}/>
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
const mapStateToProps = state => {
    return {
        userDetails: state.user && state.user.user ? state.user.user : {},
    }
}
export default connect(mapStateToProps)(Profile);